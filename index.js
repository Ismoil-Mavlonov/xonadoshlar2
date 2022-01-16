const token = '5021387983:AAFJYY_4G2Wk0iHEPha-SrBaPe48kLcSFsU'
const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot(token, {polling: true})




bot.on('message', (evt) =>{
	let msg = evt.text
	let chatId = evt.chat.id
	let fName = evt.from.first_name

	bot.sendMessage(chatId, 'salom, ' + fName, {
		reply_markup: {
			keyboard: [['salom', 'qanday'],
			           ['salah rasmi', 'qalay']],
			resize_keyboard: true
		}
	})

	if (msg == 'salah rasmi'){
		bot.sendPhoto(chatId, './images/salah.jpg')
		
	}

})