const Telegram_Bot = require("node-telegram-bot-api");
const Action = require("./Dependencies/Actions");

require("dotenv").config();

const Token = process.env.TELEGRAM_TOKEN;
const Api_Token = process.env.API_TOKEN;

const Bot = new Telegram_Bot(Token, { polling: true });

Bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    Action.SendHomeMenu(Bot, chatId, "choose your translation engine.");
});

Bot.on("callback_query", (query) => {
    const choose = query.data;
    const Engines = ["google", "microsoft", "faraazin"];
    const Langs = ["fa", "en", "fr", "de", "ar", "es", "en_fa", "fa_en"];

    if (Engines.includes(choose)) Action.SendDestLanguage_IKeyboard(Bot, query.message, choose);
    else if (Langs.includes(choose)) Action.SetTranslationLang(Bot, choose, query.message);
});

Bot.on("message", (msg) => {
    let text = msg.text;
    if (!text.startsWith("/")) Action.SendTranslation(Bot, msg, Api_Token)

});

// Bot.on("polling_error", (error) => { //error, polling_error, webhook_error
//     console.log(error);
// });
