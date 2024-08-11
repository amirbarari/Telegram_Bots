const Telegram_Bot = require("node-telegram-bot-api");
const Action = require("./Dependencies/Actions");

const Token = "7455600740:AAF3KYaFVcF2g9c2Cd_YHv3AGQ52SAFkTd0";

const Bot = new Telegram_Bot(Token, { polling: true });

Bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    Action.SendHomeMenu(Bot, chatId, "choose your translation engine.");
});

Bot.on("callback_query", (query) => {
    const choose = query.data;
    const Engines = ["Google", "Microsoft", "Farazin"];
    const Langs = ["fa", "en", "fr", "de", "ar", "es", "en_fa", "fa_en"];
    console.log("--------------------" + choose);
    if (Engines.includes(choose)) Action.SendDestLanguage_IKeyboard(Bot, query.message, choose);
    else if (Langs.includes(choose)) Action.SetTranslationLang(Bot, choose, query.message);
});


Bot.on("polling_error", (error) => { //error, polling_error, webhook_error
    console.log(error);
});