module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Prince Sanel",
	description: "Restart the Bot",
	commandCategory: "system",
	usages: "no prefix",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`❯ ${global.config.BOTNAME} Bot is Restarting!!\n\n❯ wait Ka Mga 1 day before mag on`, threadID, () => process.exit(1));
}