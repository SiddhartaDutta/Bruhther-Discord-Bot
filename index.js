require('dotenv').config();     // Initialize dotenv

const { Client, Intents } = require('discord.js');

const Bruhther = new Client({ intents: [Intents.FLAGS.GUILDS] });

Bruhther.on('ready', () => {
    console.log('ready!');
});

Bruhther.on("debug", console.log);

Bruhther.on('interactionCreate', async interaction => {

    if(!interaction.isCommand()) return;

    const {commandName} = interaction;

    if(commandName === 'ping'){
        await interaction.reply('Pong!');
    }

});

Bruhther.login(process.env.BRUHTHER_TOKEN);