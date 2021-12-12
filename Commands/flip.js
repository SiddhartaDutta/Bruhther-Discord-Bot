const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

        // Command Data
	data: new SlashCommandBuilder()

            // Command name
		.setName('flip')

            // Command description
		.setDescription('Flips a coin'),


        // Command Execution
	async execute(interaction) {

            // Reply with "Pong!"
		await interaction.reply('Pong!');
	},
};