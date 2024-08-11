const homeInlineKeyboard = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: "Google", callback_data: "Google" },
                { text: "Microsoft", callback_data: "Microsoft" }
            ],
            [
                { text: "Farazin", callback_data: "Farazin" }
            ]
        ]
    }
};

const Google_SelectLang_InlineKeyboard = {
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
};

const Microsoft_SelectLang_InlineKeyboard = {
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

const Farazin_SelectLang_InlineKeyboard = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: "English 2 Persian", callback_data: "en_fa" },
                { text: "Persian 2 English", callback_data: "fa_en" }
            ]
        ]
    }
}

module.exports = {
    homeInlineKeyboard, Google_SelectLang_InlineKeyboard,
    Microsoft_SelectLang_InlineKeyboard, Farazin_SelectLang_InlineKeyboard
};