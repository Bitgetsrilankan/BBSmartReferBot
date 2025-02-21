/*CMD
  command: lng-bn
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🌐 langs
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

const currentLang = "🇧🇩 বাংলা";

const LANG = {
  "commands": {
    "/start": {
      "text": "স্বাগতম, {username}! আপনি কি আপনার যাত্রা শুরু করতে প্রস্তুত? \nআপনি আপনার বন্ধুদের বোত রেফার করে {currency} উপার্জন করতে পারেন।\n\n<b>⛔️ আপনাকে এগিয়ে যেতে আমাদের সব চ্যানেলগুলোতে যোগ দিতে হবে</b>\n {Joining:allChannels}\n✅ <b>যোগদান করার পর, 🟢 Joined এ ক্লিক করুন</b>",
      "inline_buttons": "#/keyboard/joinInlineKeyboard",
      "parse_mode": "HTML"
    },
    "!": {
      "text": "😭 দুঃখিত, একটি ত্রুটি ঘটেছে। \n\n অনুগ্রহ করে পরে আবার চেষ্টা করুন।"
    },

    "checkJoin": {
      "alert_top": "চ্যানেলগুলোতে যোগদানের পরীক্ষা চলছে: {Joining:needToJoinChannels}..."
    },
    "/onNeedJoining": {
      "text": "<b>⛔️ আপনাকে এগিয়ে যেতে আমাদের সব চ্যানেলগুলোতে যোগ দিতে হবে</b>\n {Joining:allChannels}\n✅ <b>যোগদান করার পর, 🟢 Joined এ ক্লিক করুন</b>",
      "inline_buttons": "#/keyboard/joinInlineKeyboard",
      "parse_mode": "HTML"
    },
    "/onAllJoining": {
      "text": "✅ আমাদের চ্যানেলগুলোতে যোগদানের জন্য ধন্যবাদ!",
      "run": { "command": "/menu" }
    },
    "/onStillJoined": {
      "text": "আপনি ইতিমধ্যেই সব চ্যানেলগুলোর সাথে যুক্ত! ধন্যবাদ!",
      "run": { "command": "/menu" }
    },
    "/onMCLError": {
      "text": "MCL ত্রুটি! সম্ভবত বট চেক করার অনুমতি নেই?\n\nত্রুটি: {Joining:error}",
    },

    "onNewRefAttracted": {
      "chat_id": "{referrerId}",
      "text": "<b>🔋 আপনি একটি নতুন রেফারেল পেয়েছেন</b>: {referralId}\n<i>💡 কেবল তখনই পুরস্কার পাবেন, যখন রেফারেল ক্যাপচা সমাধান করবে এবং আমাদের চ্যানেলে যোগ দেবে</i>",
      "parse_mode": "HTML",
      "inline_buttons": "#/keyboard/referralProfile"
    },
    "onInvitedBy": {
      "text": "<b>🌟 আপনাকে নিমন্ত্রণ করেছেন</b>: <a href='tg://user?id={referrerId}'>{referrerId}</a>",
      "parse_mode": "HTML"
    },
    "onNewRefCompleted": {
      "chat_id": "{referrerId}",
      "text": "❤️<b> আপনার <a href='tg://user?id={referralId}'>রেফারেল</a> আমাদের চ্যানেলে যোগ দিয়েছে</b>\n➕ {refReward} <b>{currency} যোগ হয়েছে</b>",
      "parse_mode": "HTML"
    },
    "welcomeToBot": {
      "text": "❤️<b> স্বাগতম, আপনি পেয়েছেন</b>\n➕ {welcomeReward} <b>{currency} স্বাগতম পুরস্কার</b>",
      "parse_mode": "HTML"
    },

    "/menu": {
      "alias": "Back 🔙",
      "text": "🏡 মূল মেনুতে স্বাগতম",
      "keyboard": "#/keyboard/mainMenu"
    },
    "/balance": {
      "text": "💰 আপনার বর্তমান ব্যালেন্স {balance} {currency}।",
      "keyboard": "#/keyboard/mainMenu"
    },
    "/invite": {
      "alias": "👫 নিমন্ত্রণ",
      "text": "🙌🏻 আপনার নিমন্ত্রণ লিংক: {referralLink}\n🙌🏻 আপনি {refCount} জন ব্যবহারকারীকে রেফার করেছেন\nপ্রতিটি সফল রেফারেলের জন্য {refReward} {currency} উপার্জন করুন।",
      "keyboard": "#/keyboard/mainMenu"
    },
    "/bonus": {
      "alias": "🎁 বোনাস",
      "run": { "command": "/dailyReward" }
    },
    "justRewardedDaily": {
      "text": "🎉 অভিনন্দন! আপনি আপনার দৈনিক বোনাস {dailyReward} {currency} পেয়েছেন।",
      "keyboard": "#/keyboard/mainMenu"
    },
    "alreadyRewardedDaily": {
      "text": "⏳ আপনি আপনার দৈনিক বোনাস আবার পেতে {hours} ঘন্টা, {minutes} মিনিট এবং {seconds} সেকেন্ড অপেক্ষা করতে হবে।",
      "keyboard": "#/keyboard/mainMenu"
    },

    "/wallet": {
      "alias": "🗂 ওয়ালেট",
      "text": "আপনার বর্তমান ওয়ালেট {currency} জন্য {wallet}।\nএটি ভবিষ্যতে উত্তোলন জন্য ব্যবহার করা হবে।",
      "keyboard": "🗂 আপনার ওয়ালেট সেট করুন, ফিরে 🔙"
    },

    "noWallet": {
      "text": "❌ আপনার এখনো কোন ওয়ালেট নেই।\n\n *দয়া করে প্রথমে এটি সেট করুন।*",
      "keyboard": "🗂 আপনার ওয়ালেট সেট করুন, ফিরে 🔙"
    },

    "/walletRequest": {
      "alias": "🗂 আপনার ওয়ালেট সেট করুন",
      "text": "অনুগ্রহ করে আপনার ওয়ালেট ঠিকানা দিন:",
      "run": { "command": "acceptWallet" },
      "keyboard": "বাতিল করুন ❌"
    },

    "walletAccepted": {
      "text": "✅ *ওয়ালেট গ্রহণ করা হয়েছে!* \n\nআপনার ওয়ালেট: `{wallet}`",
      "run": { "command": "/menu" }
    },

    "/withdraw": {
      "alias": "📤 উত্তোলন",
      "text": "📤 উত্তোলন\n\n💰 আপনার ওয়ালেট: `{wallet}` \n\nব্যালেন্স: {balance} {currency}",
      "noWalletText": "n/a",
      "keyboard": "💸 উত্তোলন অনুরোধ, ফিরে 🔙"
    },
    "/request": {
      "alias": "💸 উত্তোলন অনুরোধ",
      "text": "📤 অনুগ্রহ করে আপনি যে পরিমাণ উত্তোলন করতে চান তা লিখুন (ন্যূনতম {minPayout} {currency}" + ("{maxPayout}" ? `, এবং সর্বোচ্চ {maxPayout} {currency}` : "") + ").",
      "keyboard": "❌ বাতিল করুন"
    },

    "withdrawInitiated": {
      "text": "<b>✅ *উত্তোলন অনুরোধ করা হয়েছে*</b>\n\n" +
      "<b>পরিমাণ:</b> {amount} {currency}\n" +
      "<b>ওয়ালেট:</b> {wallet}\n\n" +
      "<i>⏳ প্রক্রিয়া সময়: 1-12 ঘণ্টা। প্রতারণামূলক রেফারেল জন্য ব্যান হতে পারে!</i>\n\n",
      "parse_mode": "HTML",
      "run": { "command": '/menu' }
    },

    "channel:postSuccess": {
      "chat_id": "{chat_id}",
      "text": "<b>🔋 নতুন উত্তোলন অনুরোধ 🏦</b>\n\n" +
      "<b>▪️ অবস্থা:</b> <i>বিপর্যস্ত</i>\n" +
      "<b>▪️ ব্যবহারকারী:</b> {username}\n" +
      "<b>▪️ ব্যবহারকারী ID:</b> {tgid}\n" +
      "<b>▪️ উত্তোলন পরিমাণ:</b> {amount} {currency}\n" +
      "<b>▪️ ব্যবহারকারী রেফারেল:</b> {refCount}\n\n" +
      "<b>💳 ওয়ালেট ঠিকানা:</b> {wallet}\n\n" +
      "<b>👮🏻‍♂️ বট:</b> @{botName}\n\n" +
      "<b>⚠️ গুরুত্বপূর্ণ:</b> প্রতারণামূলক রেফারেল জন্য ব্যান হতে পারে!\n\n",
      "parse_mode": "HTML",
      "inline_buttons": [[{ "text": "ব্যবহারকারী", "url": "tg://user?id={tgid}" }]]
    },

    "withdrawDisabled": {
      "text": "⛔️ উত্তোলন অক্ষম। দয়া করে পরে আবার চেষ্টা করুন।",
      "keyboard": "#/keyboard/mainMenu"
    },
    "withdrawDeniedRefsRequired": {
      "text": "⛔️ আপনি উত্তোলনের জন্য {left_refs} এবং রেফারেল প্রয়োজন। আপনার কাছে বর্তমানে {my_ref_count} {min_ref_needed} এর মধ্যে {min_ref_needed} আছে।",
      "keyboard": "#/keyboard/mainMenu"
    },
    "withdrawDeniedInsufficientBalance": {
      "text": "⛔️ অপর্যাপ্ত ব্যালেন্স। উত্তোলনের জন্য আপনাকে কমপক্ষে {required_balance} {currency} প্রয়োজন, কিন্তু আপনার ব্যালেন্স {balance} {currency}।",
      "keyboard": "#/keyboard/mainMenu"
    },

    "withdrawDeniedLowBalance": {
      "text": "⛔️ আপনার ব্যালেন্স খুব কম। ন্যূনতম প্রয়োজন: {minPayout} {currency}, আপনার ব্যালেন্স: {balance} {currency}।",
      "keyboard": "#/keyboard/mainMenu"
    },

    "withdrawDeniedExceedsMaxPayout": {
      "text": "⛔️ অনুরোধকৃত পরিমাণ {maxPayout} {currency} এর বেশি। আপনার ব্যালেন্স: {balance} {currency}।",
      "keyboard": "#/keyboard/mainMenu"
    },

    "acceptRequestAmount": {
      "dialogErrors": {
        "invalid": "⛔️ *অবৈধ পরিমাণ.* \"{_amount}\" - সঠিক নয়।\n\nঅনুগ্রহ করে উত্তোলনের জন্য বৈধ পরিমাণ লিখুন (সর্বোচ্চ: {_curValue})।",
        "zero": "আপনার ব্যালেন্স শূন্য।\n\nঅনুগ্রহ করে প্রথমে কিছু কাজ সম্পন্ন করুন।",
        "notEnough": "⛔️ *অবৈধ পরিমাণ.* \"{_amount}\" - ব্যালেন্স যথেষ্ট নয়।\n\nঅনুগ্রহ করে বৈধ পরিমাণ লিখুন (সর্বোচ্চ: {_curValue})।",
        "small": "⛔️ *অবৈধ পরিমাণ.* \"{_amount}\" - খুব ছোট।\n\nঅনুগ্রহ করে বৈধ পরিমাণ লিখুন (ন্যূনতম: {_min}, সর্বোচ্চ: {_curValue})।",
        "big": "⛔️ *অবৈধ পরিমাণ.* \"{_amount}\" - খুব বড়।\n\nঅনুগ্রহ করে বৈধ পরিমাণ লিখুন (সর্বোচ্চ: {_max})।",
        "notInteger": "⛔️ *অবৈধ পরিমাণ.* \"{_amount}\" - পূর্ণসংখ্যা নয়।"
      }
    },

    "/statistics": {
      "alias": "📊 পরিসংখ্যান",
      "text": "📊 মোট পেমেন্ট: {totalPayouts} {currency}\n\nমোট ব্যবহারকারী: {totalUsers}\n\nসার্ভার: @devendra",
      "keyboard": "#/keyboard/mainMenu"
    },

    "cancel": {
      "aliases": "বাতিল করুন ❌, ❌ বাতিল করুন",
      "text": "অনুরোধ বাতিল করা হয়েছে।",
      "run": { "command": "/menu" }
    },

    "selectLanguage": {
      "alias": "#/button/changeLanguage",
      "text": "অনুগ্রহ করে ভাষা নির্বাচন করুন। \n\nবর্তমান ভাষা: \"{curLang}\"",
      "inline_buttons": "#/keyboard/selectlanguage"
    },

    "setLng": {
      "text": "ভাষা পরিবর্তন হয়ে \"{newLang}\"",
      "inline_buttons": "#/keyboard/selectlanguage",
      "edit": true,
      "run": { "command": "/menu" }
    }
  },
  "types": {
    "button": {
        "changeLanguage": "🌐 ভাষা(Language)"
    },
    "keyboard": {
      "mainMenu": "💰 {balance} {currency},\n👫 নিমন্ত্রণ,🗂 ওয়ালেট,📤 উত্তোলন,\n🎁 বোনাস,📊 পরিসংখ্যান,\n🌐 ভাষা(Language)",
      "setWallet": "{wallet}" ? "পরিবর্তন" : "সেট করুন" + " ওয়ালেট, ফিরে 🔙",
      "joinInlineKeyboard": [[
        { "text": "🟢 {Joining:needToJoinCount} চ্যানেল(s) এর মধ্যে {Joining:channelsCount} যোগ হয়েছে",
          "command": "checkJoin"
      }]],
      "referralProfile": [[{ "text": "📟 প্রোফাইল", "url": "tg://user?id={referralId}" }]],
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
    "mainMenu": "🏠 মূল মেনু",
    "curLang": currentLang,
    "coreTasks": {
      "welcomeReward": "যোগদান বোনাস",
      "newRefReward": "রেফারেল বোনাস"
    },
    "dailyRewardTask": "দৈনিক বোনাস"
  }
}

smartBot.setupLng("bn", LANG);
debug("step x: language setup complete")
