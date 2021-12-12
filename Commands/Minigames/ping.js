const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

        // Command Data
	data: new SlashCommandBuilder()

            // Command name
		.setName('ping')

            // Command description
		.setDescription('Replies with Pong!'),


        // Command Execution
	async execute(interaction) {

            // Reply with "Pong!"
		await interaction.reply('Pong!');
	},
};