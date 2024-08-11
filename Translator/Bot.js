const Telegram_Bot = require("node-telegram-bot-api");

const Token = "";

const Bot = new Telegram_Bot(Token, { polling: true });


Bot.onText("/\/start/", (msg) => {
    const chatId = msg.chat.id;

    Bot.sendMessage(chatId, "welcome");
});

