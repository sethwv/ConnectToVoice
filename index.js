const { Client, Intents } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');
const config = require("./config.json");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.login(config.TOKEN);

client.on("ready", () => {
<<<<<<< HEAD
    client.user.setStatus(config.STATUS ?? 'invisible');
=======
    client.user.setStatus(config.STATUS??'invisible');
>>>>>>> 05781d0aa32b8454c8f537625d2a7539e00725be
    const guild = client.guilds.cache.get(config.GUILDID);
    try {
        joinVoiceChannel({
            adapterCreator: guild.voiceAdapterCreator,
            guildId: guild.id,
            channelId: config.CHANNELID,
            selfDeaf: config.DEAFENED ?? false,
            selfMute: config.MICMUTED ?? false
        });
        console.info(`Connected to voice channel "${guild.channels.cache.get(config.CHANNELID).name}" in guild "${guild.name}".`);
        console.info('If the bot disconnects from vc, you\'ll need to restart this.');
    } catch (e) {
        console.error('Something went wrong while connecting to the voice channel\nMake sure that TOKEN, GUILDID, and CHANNELID are specified in config.json');
        process.exit(1)
    }
});