const { SlashCommandBuilder } = require('@discordjs/builders');
const { random } = require('mathjs')

module.exports = {

    /**
	 * 
	 */
	data: new SlashCommandBuilder()

            // Command name
		.setName('flip')

            // Command description
		.setDescription('**Gamble** test disc'),


    /**
	 * execute: Sets up flip game and calls runFlip
	 * @param {Object} interaction Command message itself
	 */
	async execute(interaction) {

            
		await interaction.reply(random().toString());
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