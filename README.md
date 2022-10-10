#This project has been archived.

# ConnectToVoice
This is a simple discord.js bot to connect a bot user to a voice channel.

*No, it cannot play sounds.*

*No, it cannot move itself around.*

The bot just connects to a voice channel and does nothing.


## Installation + Configuration
Requires Node.js 16 LTS or HIGHER.

```bash
git clone https://github.com/sethwv/ConnectToVoice.git ConnectToVoice
cd ConnectToVoice
npm install
cp config.example.json config.json
```

Fill your bot's details to `config.json`.

`TOKEN`, `GUILDID`, and `CHANNELID` are required, the bot can not function without them.

`DEAFENED` and `MICMUTED` are not required, and will default to false if absent from the config file.

```bash
node index.js
```

Configuration changes will require you to right click + disconnect the bot in discord, and restart the bot.

## Support
No support or warranty is offered, this is a tool created for my own personal use.
