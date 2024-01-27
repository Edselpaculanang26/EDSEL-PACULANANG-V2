module.exports.config = {
name: "askv1",
version: "1.0.0",
hasPermssion: 0,
credits: "Prince Sanel",
description: "ChatGPT ai. api by Prince Sanel Osorio",
price: 1,
commandCategory: "Random",
cooldowns: 0,
};
module.exports.run = async function ({ api, args, event, permssion, Currencies }) {
	const { threadID, messageID, senderID } = event;
	const axios = require("axios");
	try {
		const req = args.join(" ");
		if (!req) return api.sendMessage("[!] Need an prompt to proceed.", threadID, messageID);
    const { getData, increaseMoney, decreaseMoney } = Currencies;
    const moneyUser = (await getData(senderID)).money;
    if (this.config.price > moneyUser) {
    return api.sendMessage("Your money is not enough to do this request. please check your balance before using this command.", threadID, messageID);
    }
		
    api.sendMessage(" Answering question... please wait. ", threadID, messageID);
    await decreaseMoney(senderID, parseInt(this.config.price));
		const res = await axios.get(`https://mainapi.princemc166.repl.co/api/ai?prompt=${encodeURI(req)}`);
		api.sendMessage(res.data.content, threadID, messageID);
	} catch {
		api.sendMessage("An error occured while fetching the api.", threadID, messageID);
	}
}