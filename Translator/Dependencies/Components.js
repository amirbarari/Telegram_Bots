const homeInlineKeyboard = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: "Google", callback_data: "google" },
                { text: "Microsoft", callback_data: "microsoft" }
            ],
            [
                { text: "Faraazin", callback_data: "faraazin" }
            ]
        ]
    }
};

const google_SelectLang_InlineKeyboard = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: "Persian", callback_data: "fa" },
                { text: "English", callback_data: "en" },
                { text: "Spanish", callback_data: "es" }
            ],
            [
                { text: "French", callback_data: "fr" },
                { text: "Germany", callback_data: "de" },
                { text: "Arabic", callback_data: "ar" }
            ]
        ]
    }
};

const microsoft_SelectLang_InlineKeyboard = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: "Persian", callback_data: "fa" },
                { text: "English", callback_data: "en" },
                { text: "Spanish", callback_data: "es" }
            ],
            [
                { text: "French", callback_data: "fr" },
                { text: "Germany", callback_data: "de" }
            ]
        ]
    }
}

const faraazin_SelectLang_InlineKeyboard = {
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
    homeInlineKeyboard, google_SelectLang_InlineKeyboard,
    microsoft_SelectLang_InlineKeyboard, faraazin_SelectLang_InlineKeyboard
};