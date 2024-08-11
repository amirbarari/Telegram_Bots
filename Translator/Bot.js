const Telegram_Bot = require("node-telegram-bot-api");
const Action = require("./Dependencies/Actions");
const Component = require("./Dependencies/Components")

const Token = "7455600740:AAF3KYaFVcF2g9c2Cd_YHv3AGQ52SAFkTd0";

const Bot = new Telegram_Bot(Token, { polling: true });

const redis = require("redis")
const client = redis.createClient();
client.connect();

Bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    Action.SendHomeMenu(Bot, chatId, "choose your translation engine.");
});

Bot.on("callback_query", (query) => {
    const choose = query.data;
    const chatId = query.message.chat.id;
    const Engines = ["Google", "Microsoft", "Farazin"];

    if (Engines.includes(choose)) Action.SendDestLanguage_IKeyboard(Bot, query.message, client, choose);
});



