const components = require("./Components");
const redis = require("redis")
const axios = require("axios");

const client = redis.createClient();
client.connect();


const SendHomeMenu = (Bot, chatId, msg) => {
    Bot.sendMessage(chatId, msg, components.homeInlineKeyboard);
};

const SendDestLanguage_IKeyboard = (Bot, message, choose) => {
    const chatId = message.chat.id;
    client.set(`user:${chatId}:action`, choose, { EX: 300 });
    Bot.deleteMessage(chatId, message.message_id);
    choose = choose.charAt(0).toLowerCase() + choose.slice(1);
    Bot.sendMessage(chatId, "Choose destination language:", components[`${choose}_SelectLang_InlineKeyboard`]);
};

const SetTranslationLang = (Bot, lang, message) => {
    const chatID = message.chat.id;
    client.set(`user:${chatID}:lang`, lang, { EX: 180 });
    Bot.deleteMessage(chatID, message.message_id);
    Bot.sendMessage(chatID, "Please send your text for translation :");
};

const SendTranslation = async (Bot, msg, Api_Token) => {
    const chatID = msg.chat.id;
    let Text = msg.text;
    try {
        const action = await client.get(`user:${chatID}:action`);
        const lang = await client.get(`user:${chatID}:lang`);

        if (action && lang) {
            Text = encodeURIComponent(Text);
            const response = await axios.get(`https://one-api.ir/translate/?token=${Api_Token}&action=${action}&lang=${lang}&q=${Text}`);
            let translated_text = "";
            translated_text = (action === "faraazin") ? response.data.result.base[0][1] : response.data.result;
            Bot.sendMessage(chatID, translated_text);
        }
        else SendHomeMenu(Bot, chatID, "choose your translation engine.");
    } catch (error) {
        console.error("Error in translation", error);
        Bot.sendMessage(msg.chat.id, "Sorry, something went wrong. Please try again later.");
    }
};

module.exports = { SendHomeMenu, SendDestLanguage_IKeyboard, SetTranslationLang, SendTranslation };