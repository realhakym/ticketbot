const { BOT_PREFIX } = process.env;

module.exports = async (client) => {
	const botStatus = [
		`BlackKnight683 on yt`,
		`${client.users.cache.size} Users`,
		`${client.guilds.cache.size} Servers`,
	];

	client.user.setActivity(`${BOT_PREFIX}help | by weed`, {
		type: "STREAMING",
		url: "https://www.twitch.tv/monstercat"
	  });

	console.log(`Logged in as ${client.user.tag}`);
	console.log('Prefix:', BOT_PREFIX);
};