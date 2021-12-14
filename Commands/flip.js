const { SlashCommandBuilder } = require('@discordjs/builders');
const { randomInt } = require('mathjs');

module.exports = {

    /**
	 * 
	 */
	data: new SlashCommandBuilder()

            // Command name
		.setName('flip')

            // Command description
		.setDescription('**Gamble** test disc')

		.addNumberOption(option => option
			.setName('wager')
			.setDescription('Enter an amount to be wagered')),


    /**
	 * execute: Sets up flip game and calls runFlip
	 * @param {Object} interaction Command message itself
	 */
	async execute(interaction) {
		const num = interaction.options.getNumber('wager');
		await interaction.reply("- " + num);

	},

	/**
	 * runFlip: Runs core flip game
	 * @param {Object} interaction Command message itself
	 */
	async runFlip(interaction){

		gambNum = random();
		gambNum++;

	}
};