const components = require("./Components");


const SendHomeMenu = (Bot, chatId, msg) => {
    Bot.sendMessage(chatId, msg, components.homeInlineKeyboard);
};

const SendDestLanguage_IKeyboard = (Bot, message, client, choose) => {
    const chatId = message.chat.id;
    client.set(`user:${chatId}:action`, choose);
    Bot.deleteMessage(chatId, message.message_id);
    Bot.sendMessage(chatId, "Choose destination language:", components[`${choose}_SelectLang_InlineKeyboard`]);
};

module.exports = { SendHomeMenu, SendDestLanguage_IKeyboard };