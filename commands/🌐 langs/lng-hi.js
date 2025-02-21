/*CMD
  command: lng-hi
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🌐 langs
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

const currentLang = "🇮🇳 हिन्दी";

const LANG = {
  "commands": {
    "/start": {
      "text": "स्वागत है, {username}! क्या आप अपनी यात्रा शुरू करने के लिए तैयार हैं? \nआप अपने दोस्तों को बोट रेफर करके {currency} कमा सकते हैं।\n\n<b>⛔️ आपको आगे बढ़ने के लिए हमारे सभी चैनलों को जॉइन करना होगा</b>\n {Joining:allChannels}\n✅ <b>जॉइन करने के बाद, 🟢 Joined पर क्लिक करें</b>",
      "inline_buttons": "#/keyboard/joinInlineKeyboard",
      "parse_mode": "HTML"
    },
    "!": {
      "text": "😭 माफ़ करें, एक त्रुटि हुई। \n\n कृपया बाद में फिर से प्रयास करें।"
    },

    "checkJoin": {
      "alert_top": "चैनलों से जुड़ने की जांच हो रही है: {Joining:needToJoinChannels}..."
    },
    "/onNeedJoining": {
      "text": "<b>⛔️ आपको आगे बढ़ने के लिए हमारे सभी चैनलों को जॉइन करना होगा</b>\n {Joining:allChannels}\n✅ <b>जॉइन करने के बाद, 🟢 Joined पर क्लिक करें</b>",
      "inline_buttons": "#/keyboard/joinInlineKeyboard",
      "parse_mode": "HTML"
    },
    "/onAllJoining": {
      "text": "✅ हमारे चैनलों में जुड़ने के लिए धन्यवाद!",
      "run": { "command": "/menu" }
    },
    "/onStillJoined": {
      "text": "आप अभी भी सभी चैनलों से जुड़े हुए हैं! धन्यवाद!",
      "run": { "command": "/menu" }
    },
    "/onMCLError": {
      "text": "MCL त्रुटि हुई! शायद बोट को जांचने की अनुमति नहीं है?\n\nत्रुटि: {Joining:error}",
    },

    "onNewRefAttracted": {
      "chat_id": "{referrerId}",
      "text": "<b>🔋 आपने एक नया रेफरल प्राप्त किया</b>: {referralId}\n<i>💡 केवल तभी इनाम मिलेगा जब रेफरल कैप्चा हल करेगा और हमारे चैनल से जुड़ जाएगा</i>",
      "parse_mode": "HTML",
      "inline_buttons": "#/keyboard/referralProfile"
    },
    "onInvitedBy": {
      "text": "<b>🌟 आपको निमंत्रित किया गया है</b>: <a href='tg://user?id={referrerId}'>{referrerId}</a>",
      "parse_mode": "HTML"
    },
    "onNewRefCompleted": {
      "chat_id": "{referrerId}",
      "text": "❤️<b> आपका <a href='tg://user?id={referralId}'>रेफरल</a> हमारे चैनल से जुड़ गया</b>\n➕ {refReward} <b>{currency} जोड़ा गया</b>",
      "parse_mode": "HTML"
    },
    "welcomeToBot": {
      "text": "❤️<b> स्वागत है, आपको प्राप्त हुआ है</b>\n➕ {welcomeReward} <b>{currency} स्वागत इनाम के रूप में</b>",
      "parse_mode": "HTML"
    },

    "/menu": {
      "alias": "Back 🔙",
      "text": "🏡 मुख्य मेनू में स्वागत है",
      "keyboard": "#/keyboard/mainMenu"
    },
    "/balance": {
      "text": "💰 आपका वर्तमान बैलेंस {balance} {currency} है।",
      "keyboard": "#/keyboard/mainMenu"
    },
    "/invite": {
      "alias": "👫 निमंत्रण",
      "text": "🙌🏻 आपका निमंत्रण लिंक: {referralLink}\n🙌🏻 आपने {refCount} उपयोगकर्ता(s) को रेफर किया\nप्रत्येक सफल निमंत्रण पर {refReward} {currency} कमाएँ।",
      "keyboard": "#/keyboard/mainMenu"
    },
    "/bonus": {
      "alias": "🎁 बोनस",
      "run": { "command": "/dailyReward" }
    },
    "justRewardedDaily": {
      "text": "🎉 बधाई हो! आपने अपना दैनिक बोनस {dailyReward} {currency} प्राप्त कर लिया है।",
      "keyboard": "#/keyboard/mainMenu"
    },
    "alreadyRewardedDaily": {
      "text": "⏳ आप अपना दैनिक बोनस फिर से {hours} घंटे, {minutes} मिनट और {seconds} सेकंड बाद प्राप्त कर सकते हैं।",
      "keyboard": "#/keyboard/mainMenu"
    },

    "/wallet": {
      "alias": "🗂 वॉलेट",
      "text": "आपका वर्तमान वॉलेट {currency} के लिए {wallet} है।\nयह भविष्य में निकासी के लिए उपयोग किया जाएगा।",
      "keyboard": "🗂 अपना वॉलेट सेट करें, वापस 🔙"
    },

    "noWallet": {
      "text": "❌ आपका अभी तक वॉलेट नहीं है।\n\n *कृपया पहले इसे सेट करें।*",
      "keyboard": "🗂 अपना वॉलेट सेट करें, वापस 🔙"
    },

    "/walletRequest": {
      "alias": "🗂 अपना वॉलेट सेट करें",
      "text": "कृपया अपना वॉलेट पता दर्ज करें:",
      "run": { "command": "acceptWallet" },
      "keyboard": "रद्द करें ❌"
    },

    "walletAccepted": {
      "text": "✅ *वॉलेट स्वीकार किया गया!* \n\nआपका वॉलेट: `{wallet}`",
      "run": { "command": "/menu" }
    },

    "/withdraw": {
      "alias": "📤 निकासी",
      "text": "📤 निकासी\n\n💰 आपका वॉलेट: `{wallet}` \n\nबैलेंस: {balance} {currency}",
      "noWalletText": "n/a",
      "keyboard": "💸 निकासी अनुरोध, वापस 🔙"
    },
    "/request": {
      "alias": "💸 निकासी अनुरोध",
      "text": "📤 कृपया वह राशि दर्ज करें जिसे आप निकासी करना चाहते हैं (न्यूनतम {minPayout} {currency}" + ("{maxPayout}" ? `, और अधिकतम {maxPayout} {currency}` : "") + ").",
      "keyboard": "❌ रद्द करें"
    },

    "withdrawInitiated": {
      "text": "<b>✅ *निकासी अनुरोध किया गया*</b>\n\n" +
      "<b>राशि:</b> {amount} {currency}\n" +
      "<b>वॉलेट:</b> {wallet}\n\n" +
      "<i>⏳ प्रक्रिया समय: 1-12 घंटे। नकली रेफरल्स के कारण बैन हो सकता है!</i>\n\n",
      "parse_mode": "HTML",
      "run": { "command": '/menu' }
    },

    "channel:postSuccess": {
      "chat_id": "{chat_id}",
      "text": "<b>🔋 नई निकासी अनुरोध 🏦</b>\n\n" +
      "<b>▪️ स्थिति:</b> <i>प्रलंबित</i>\n" +
      "<b>▪️ उपयोगकर्ता:</b> {username}\n" +
      "<b>▪️ उपयोगकर्ता ID:</b> {tgid}\n" +
      "<b>▪️ निकासी राशि:</b> {amount} {currency}\n" +
      "<b>▪️ उपयोगकर्ता रेफरल:</b> {refCount}\n\n" +
      "<b>💳 वॉलेट पता:</b> {wallet}\n\n" +
      "<b>👮🏻‍♂️ बोट:</b> @{botName}\n\n" +
      "<b>⚠️ महत्वपूर्ण:</b> नकली रेफरल्स के कारण बैन हो सकता है!\n\n",
      "parse_mode": "HTML",
      "inline_buttons": [[{ "text": "उपयोगकर्ता", "url": "tg://user?id={tgid}" }]]
    },

    "withdrawDisabled": {
      "text": "⛔️ निकासी असक्षम हैं। कृपया बाद में पुनः प्रयास करें।",
      "keyboard": "#/keyboard/mainMenu"
    },
    "withdrawDeniedRefsRequired": {
      "text": "⛔️ आपको निकासी के लिए {left_refs} और रेफरल की आवश्यकता है। आपके पास अभी {min_ref_needed} में से {my_ref_count} हैं।",
      "keyboard": "#/keyboard/mainMenu"
    },
    "withdrawDeniedInsufficientBalance": {
      "text": "⛔️ अपर्याप्त बैलेंस। निकासी के लिए आपको कम से कम {required_balance} {currency} की आवश्यकता है, लेकिन आपका बैलेंस {balance} {currency} है।",
      "keyboard": "#/keyboard/mainMenu"
    },

    "withdrawDeniedLowBalance": {
      "text": "⛔️ आपका बैलेंस बहुत कम है। न्यूनतम आवश्यक: {minPayout} {currency}, आपका बैलेंस: {balance} {currency} है।",
      "keyboard": "#/keyboard/mainMenu"
    },

    "withdrawDeniedExceedsMaxPayout": {
      "text": "⛔️ अनुरोधित राशि {maxPayout} {currency} से अधिक है। आपका बैलेंस: {balance} {currency} है।",
      "keyboard": "#/keyboard/mainMenu"
    },

    "acceptRequestAmount": {
      "dialogErrors": {
        "invalid": "⛔️ *अमान्य राशि.* \"{_amount}\" - सही नहीं है।\n\nकृपया निकासी के लिए वैध राशि दर्ज करें (अधिकतम: {_curValue})।",
        "zero": "आपका बैलेंस शून्य है।\n\nकृपया पहले कोई कार्य पूरा करें।",
        "notEnough": "⛔️ *अमान्य राशि.* \"{_amount}\" - बैलेंस पर्याप्त नहीं है।\n\nकृपया वैध राशि दर्ज करें (अधिकतम: {_curValue})।",
        "small": "⛔️ *अमान्य राशि.* \"{_amount}\" - बहुत छोटी है।\n\nकृपया वैध राशि दर्ज करें (न्यूनतम: {_min}, अधिकतम: {_curValue})।",
        "big": "⛔️ *अमान्य राशि.* \"{_amount}\" - बहुत बड़ी है।\n\nकृपया वैध राशि दर्ज करें (अधिकतम: {_max})।",
        "notInteger": "⛔️ *अमान्य राशि.* \"{_amount}\" - पूर्णांक नहीं है।"
      }
    },

    "/statistics": {
      "alias": "📊 सांख्यिकी",
      "text": "📊 कुल भुगतान: {totalPayouts} {currency}\n\nकुल उपयोगकर्ता: {totalUsers}\n\nसर्जक: @devendra",
      "keyboard": "#/keyboard/mainMenu"
    },

    "cancel": {
      "aliases": "रद्द करें ❌, ❌ रद्द करें",
      "text": "अनुरोध रद्द कर दिया गया।",
      "run": { "command": "/menu" }
    },

    "selectLanguage": {
      "alias": "#/button/changeLanguage",
      "text": "कृपया भाषा का चयन करें। \n\nवर्तमान भाषा: \"{curLang}\"",
      "inline_buttons": "#/keyboard/selectlanguage"
    },

    "setLng": {
      "text": "भाषा बदलकर \"{newLang}\" कर दी गई",
      "inline_buttons": "#/keyboard/selectlanguage",
      "edit": true,
      "run": { "command": "/menu" }
    }
  },
  "types": {
    "button": {
        "changeLanguage": "🌐 भाषा(Language)"
    },
    "keyboard": {
      "mainMenu": "💰 {balance} {currency},\n👫 निमंत्रण,🗂 वॉलेट,📤 निकासी,\n🎁 बोनस,📊 सांख्यिकी,\n🌐 भाषा(Language)",
      "setWallet": "{wallet}" ? "बदलें" : "सेट करें" + " वॉलेट, वापस 🔙",
      "joinInlineKeyboard": [[
        { "text": "🟢 {Joining:needToJoinCount} चैनल(s) में से {Joining:channelsCount} जॉइन किए गए",
          "command": "checkJoin"
      }]],
      "referralProfile": [[{ "text": "📟 प्रोफ़ाइल", "url": "tg://user?id={referralId}" }]],
      "selectlanguage": [
        [
          { "text": "🇬🇧 English", "command": "setLng en" },
          { "text": "🇫🇷 Français", "command": "setLng fr" }
],
        [
          { "text": "🇮🇳 हिन्दी", "command": "setLng hi" },
          { "text": "🇧🇩 বাংলা", "command": "setLng bn" }
        ]
      ]
    },
  },
  "titles": {
    "mainMenu": "🏠 मुख्य मेनू",
    "curLang": currentLang,
    "coreTasks": {
      "welcomeReward": "जॉइनिंग बोनस",
      "newRefReward": "रेफरल बोनस"
    },
    "dailyRewardTask": "दैनिक बोनस"
  }
}

smartBot.setupLng("hi", LANG);
debug("step x: language setup complete")
