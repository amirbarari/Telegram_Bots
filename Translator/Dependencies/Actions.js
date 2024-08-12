const components = require("./Components");
const redis = require("redis")

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

module.exports = { SendHomeMenu, SendDestLanguage_IKeyboard, SetTranslationLang, client };