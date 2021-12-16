const { SlashCommandBuilder } = require('@discordjs/builders');
const { Message } = require('discord.js');
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

		// Process wager

		//var wager;

		var wager = interaction.options.getNumber('wager');
		if(wager / 1 == 0){
			wager = 5.00;
		}
		
		//var wager2 = wager;

		// Print out game msg and react
		const sentMsg = await interaction.reply({ content: 'Chose \'H\' for HEADS or \'T\' for TAILS', fetchReply: true });
		sentMsg.react('🇭')
			.then(() => sentMsg.react('🇹'))
			.catch(error => console.error('One or more emojis failed to react:', error));

		//await interaction.reply("- " + wager);

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