/*CMD
  command: lng-fr
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🌐 langs
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

const currentLang = "🇫🇷 Français";

const LANG = {
  "commands": {
    "/start": {
      "text": "Bienvenue, {username} ! Prêt à commencer votre voyage ? \nVous pouvez gagner {currency} en référant le bot à vos amis." +
        "\n\n<b>⛔️ Vous devez rejoindre tous nos canaux pour continuer</b>\n {Joining:allChannels}\n✅ <b>Après avoir rejoint, cliquez sur 🟢 Rejoint</b>",
      "inline_buttons": "#/keyboard/joinInlineKeyboard",
      "parse_mode": "HTML"
    },
    "!": {
      "text": "😭 Désolé, nous avons rencontré une erreur. \n\nVeuillez réessayer plus tard."
    },

    // JOINING section
    "checkJoin": {
      "alert_top": "Vérification de l'adhésion aux canaux : {Joining:needToJoinChannels}..."
    },
    "/onNeedJoining": {
      "text": "<b>⛔️ Vous devez rejoindre tous nos canaux pour continuer</b>\n {Joining:allChannels}\n✅ <b>Après avoir rejoint, cliquez sur 🟢 Rejoint</b>",
      "inline_buttons": "#/keyboard/joinInlineKeyboard",
      "parse_mode": "HTML"
    },
    "/onAllJoining": {
      "text": "✅ Merci d'avoir rejoint nos canaux !",
      "run": { "command": "/menu" }
    },
    "/onStillJoined": {
      "text": "Vous êtes toujours inscrit à tous les canaux ! Merci !",
      "run": { "command": "/menu" }
    },
    "/onMCLError": {
      "text": "Erreur MCL survenue ! Peut-être que le bot n'a pas l'accès nécessaire pour vérifier ?\n\nErreur : {Joining:error}",
    },

    // -- new referred user
    "onNewRefAttracted": {
      "chat_id": "{referrerId}",
      "text": "<b>🔋 Vous avez un nouveau parrainé</b> : {referralId}\n<i>💡 Récompense uniquement si le parrainé résout le Captcha et rejoint notre canal</i>",
      "parse_mode": "HTML",
      "inline_buttons": "#/keyboard/referralProfile"
    },
    "onInvitedBy": {
      "text": "<b>🌟 Vous avez été invité par</b> : <a href='tg://user?id={referrerId}'>{referrerId}</a>",
      "parse_mode": "HTML"
    },
    "onNewRefCompleted": {
      "chat_id": "{referrerId}",
      "text": "❤️<b> Votre <a href='tg://user?id={referralId}'>parrainé</a> a rejoint notre canal</b>\n➕ {refReward} <b>{currency} ajouté</b>",
      "parse_mode": "HTML"
    },
    "welcomeToBot": {
      "text": "❤️<b> Bienvenue, vous avez reçu</b>\n➕ {welcomeReward} <b>{currency} en récompense de bienvenue</b>",
      "parse_mode": "HTML"
    },
    // -- menu commands
    "/menu": {
      "alias": "Retour 🔙",
      "text": "🏡 Bienvenue dans le menu principal",
      "keyboard": "#/keyboard/mainMenu"
    },
    "/balance": {
      "text": "💰 Votre solde actuel est de {balance} {currency}.",
      "keyboard": "#/keyboard/mainMenu"
    },
    "/invite": {
      "alias": "👫 Inviter",
      "text": "🙌🏻 Votre lien d'invitation : {referralLink}\n🙌🏻 Vous avez référé : {refCount} utilisateur(s)\nGagnez {refReward} {currency} pour chaque invitation réussie.",
      "keyboard": "#/keyboard/mainMenu"
    },
    "/bonus": {
      "alias": "🎁 Bonus",
      "run": { "command": "/dailyReward" }
    },
    "justRewardedDaily": {
      "text": "🎉 Félicitations ! Vous avez réclamé votre bonus quotidien de {dailyReward} {currency}.",
      "keyboard": "#/keyboard/mainMenu"
    },
    "alreadyRewardedDaily": {
      "text": "⏳ Vous pouvez réclamer votre bonus quotidien dans {hours} heures, {minutes} minutes et {seconds} secondes.",
      "keyboard": "#/keyboard/mainMenu"
    },
    // -- wallet start
    "/wallet": {
      "alias": "🗂 Portefeuille",
      "text": "Votre portefeuille actuellement défini pour {currency} est {wallet}.\nIl sera utilisé pour les retraits futurs.",
      "keyboard": "🗂 Définir mon portefeuille, Retour 🔙"
    },
    "noWallet": {
      "text": "❌ Vous n'avez pas encore de portefeuille. \n\n *Veuillez le configurer d'abord.*",
      "keyboard": "🗂 Définir mon portefeuille, Retour 🔙"
    },
    "/walletRequest": {
      "alias": "🗂 Définir mon portefeuille",
      "text": "Veuillez entrer votre adresse de portefeuille :",
      "run": { "command": "acceptWallet" },
      "keyboard": "Annuler ❌"
    },
    "walletAccepted": {
      "text": "✅ *Portefeuille accepté !* \n\nVotre portefeuille : `{wallet}`",
      "run": { "command": "/menu" }
    },
    // -- wallet end
    // -- withdraw start
    "/withdraw": {
      "alias": "📤 Retrait",
      "text": "📤 Retrait\n\n💰 Votre portefeuille : `{wallet}` \n\nSolde : {balance} {currency}",
      "noWalletText": "n/a",
      "keyboard": "💸 Demander un retrait, Retour 🔙"
    },
    "/request": {
      "alias": "💸 Demander un retrait",
      "text": "📤 Entrez le montant en INR que vous souhaitez retirer (minimum {minPayout} {currency}" + ("{maxPayout}" ? `, et maximum {maxPayout} {currency}` : "") + ").",
      "keyboard": "❌ Annuler",
    },
    "withdrawInitiated": {
      "text": "<b>✅ *Retrait demandé*</b>\n\n" +
        "<b>Montant :</b> {amount} {currency}\n" +
        "<b>Portefeuille :</b> {wallet}\n\n" +
        "<i>⏳ Temps de traitement : 1-12 heures. Les parrainages frauduleux entraîneront une interdiction !</i>\n\n",
      "parse_mode": "HTML",
      "run": { "command": "/menu" }
    },
    "channel:postSuccess": {
      "chat_id": "{chat_id}",
      "text": "<b>🔋 Nouveau retrait demandé 🏦</b>\n\n" +
        "<b>▪️ Statut :</b> <i>en attente</i>\n" +
        "<b>▪️ Utilisateur :</b> {username}\n" +
        "<b>▪️ ID utilisateur :</b> {tgid}\n" +
        "<b>▪️ Montant du retrait :</b> {amount} {currency}\n" +
        "<b>▪️ Référents de l'utilisateur :</b> {refCount}\n\n" +
        "<b>💳 Adresse de portefeuille :</b> {wallet}\n\n" +
        "<b>👮🏻‍♂️ Bot :</b> @{botName}\n\n" +
        "<b>⚠️ Important :</b> Les parrainages frauduleux entraîneront une interdiction !\n\n",
      "parse_mode": "HTML",
      "inline_buttons": [[{ "text": "Utilisateur", "url": "tg://user?id={tgid}" }]]
    },
    "withdrawDisabled": {
  "text": "⛔️ Les retraits sont désactivés. Veuillez réessayer plus tard.",
      "keyboard": "#/keyboard/mainMenu"
    },
    "withdrawDeniedRefsRequired": {
      "text": "⛔️ Vous avez besoin de {left_refs} références supplémentaires pour pouvoir retirer. Vous en avez actuellement {my_ref_count} sur {min_ref_needed}.",
      "keyboard": "#/keyboard/mainMenu"
    },
    "withdrawDeniedInsufficientBalance": {
      "text": "⛔️ Solde insuffisant. Vous avez besoin d'au moins {required_balance} {currency} pour effectuer un retrait, mais votre solde est de {balance} {currency}.",
      "keyboard": "#/keyboard/mainMenu"
    },
    "withdrawDeniedLowBalance": {
      "text": "⛔️ Votre solde est trop faible. Montant minimum requis : {minPayout} {currency}, votre solde : {balance} {currency}.",
      "keyboard": "#/keyboard/mainMenu"
    },
    "withdrawDeniedExceedsMaxPayout": {
      "text": "⛔️ Le montant demandé dépasse le paiement maximum de {maxPayout} {currency}. Votre solde : {balance} {currency}.",
      "keyboard": "#/keyboard/mainMenu"
    },
    "acceptRequestAmount": {
      "dialogErrors":{
        "invalid": "⛔️ *Montant invalide.*\"{_amount}\" - non valide.\n\nVeuillez entrer un montant valide pour le retrait (max : {_curValue}).",
        "zero": "Votre solde est nul.\n\nVeuillez accomplir une tâche pour gagner plus.",
        "notEnough": "⛔️ *Montant invalide.*\n\"{_amount}\" - solde insuffisant.\n\nVeuillez entrer un montant valide (max : {_curValue}).",
        "small": "⛔️ *Montant invalide.*\n\"{_amount}\" - trop petit.\n\nVeuillez entrer un montant valide (min : {_min}, max : {_curValue}).",
        "big": "⛔️ *Montant invalide.*\n\"{_amount}\" - trop grand.\n\nVeuillez entrer un montant valide (max : {_max}).",
        "notInteger": "⛔️ *Montant invalide.*\n\"{_amount}\" - pas un entier."
      }
    },

    // -- withdraw end

    "/statistics": {
      "alias": "📊 Statistiques",
      "text": "📊 Total des paiements : {totalPayouts} {currency}\n\nTotal des utilisateurs : {totalUsers}\n\nCréateur : @devendra",
      "keyboard": "#/keyboard/mainMenu"
    },

    "cancel": {
      "aliases": "Annuler ❌, ❌ Annuler",
      "text": "Demande annulée.",
      "run": { "command": "/menu" }
    },

    "selectLanguage": {
      "alias": "#/button/changeLanguage",
      "text": "Veuillez sélectionner la langue. \n\nLangue actuelle : \"{curLang}\"",
      "inline_buttons": "#/keyboard/selectlanguage"
    },
    "setLng": {
      "text": "Langue changée en \"{newLang}\"",
      "inline_buttons": "#/keyboard/selectlanguage",
      "edit": true,
      "run": { "command": "/menu" }
    }
  },
  "types": {
    "button": {
        "changeLanguage": "🌐 Langue(Language)"
    },
    "keyboard": {
      "mainMenu": "💰 {balance} {currency},\n👫 Inviter, 🗂 Portefeuille, 📤 Retrait,\n🎁 Bonus, 📊 Statistiques,\n🌐 Langue(Language)",
      "setWallet": "{wallet}" ? "Changer" : "Définir" + " Portefeuille, Retour 🔙",
      "joinInlineKeyboard": [[
        { "text": "🟢 Rejoint {Joining:needToJoinCount} sur {Joining:channelsCount} canal(s)",
          "command": "checkJoin"
      }]],
      "referralProfile": [[{ "text": "📟 Profil", "url": "tg://user?id={referralId}" }]],
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
    "mainMenu": "🏠 Menu Principal",
    "curLang": "🇫🇷 Français",
    "coreTasks": {
      "welcomeReward": "Bonus d'adhésion",
      "newRefReward": "Bonus de parrainage"
    },
    "dailyRewardTask": "Bonus quotidien"
  }
}

smartBot.setupLng("fr", LANG);
debug("step x: language setup complete")
