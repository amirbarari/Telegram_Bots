const homeInlineKeyboard = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: "Google", callback_data: "google" },
                { text: "Microsoft", callback_data: "microsoft" }
            ],
            [
                { text: "Farazin", callback_data: "farazin" }
            ]
        ]
    }
};

const GM_SelectLang_InlineKeyboard = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: "Persian", callback_data: "fa" },
                { text: "English", callback_data: "en" },
                { text: "Spanish", callback_data: "sp" }
            ],
            [
                { text: "French", callback_data: "fr" },
                { text: "Germany", callback_data: "gr" }
            ]
        ]
    }
}
module.exports = { homeInlineKeyboard, GM_SelectLang_InlineKeyboard };