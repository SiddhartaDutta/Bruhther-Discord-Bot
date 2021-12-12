require('dotenv').config();     // Initialize dotenv

const fs = require('fs');

const { Client, Collection, Intents } = require('discord.js');

const Bruhther = new Client({ intents: [Intents.FLAGS.GUILDS] });

// .commands property addition to Bruhther
Bruhther.commands = new Collection();

// Filtered array of all file names in directory
const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./Commands/${file}`);
    // Set a new item in the collection
    // With the key as the command name and the value as the exported module
    Bruhther.commands.set(command.data.name, command);
}

Bruhther.on('ready', () => {
    console.log('ready!');
});

//Bruhther.on("debug", console.log);

Bruhther.on('interactionCreate', async interaction => {

    if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}

});

Bruhther.login(process.env.BRUHTHER_TOKEN);