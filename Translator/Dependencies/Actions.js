const components = require("./Components");


const SendHomeMenu = (Bot, chatId, msg) => {
    Bot.sendMessage(chatId, msg, components.homeInlineKeyboard);
};

module.exports = { SendHomeMenu };