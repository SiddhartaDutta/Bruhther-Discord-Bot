const { SlashCommandBuilder } = require('@discordjs/builders');
const { Message } = require('discord.js');
const { randomInt } = require('mathjs');

// ----- Private Variables ----- \\

	// Game trigger - allows async on reaction event to run
	var GAME_TRIGGER = false;

	// Wager - stores wagered amount
	var wager = null;

	// reply string - for future access
	var sentMsg;

module.exports = {

    /**
	 * 
	 */
	//#wager: null,

	data: new SlashCommandBuilder()

            // Command name
		.setName('flip')

            // Command description
		.setDescription('**Gamble** test disc')

		.addNumberOption(option => option
			.setName('wager')
			.setDescription('Enter an amount to be wagered')),

		//.setConstant({content: const guessVal = 0}),

	//const guessVal = 0,

    /**
	 * execute: Sets up flip game and calls runFlip
	 * @param {Object} interaction Command message itself
	 */
	async execute(interaction) {

		// Process wager
			// Set 'wager' to inputted amount
			wager = interaction.options.getNumber('wager');

			// If input is 'null' (meaning no inputted wager), set to 5
			if(wager == null){
				wager = 5.00;
			}

		// Print out game msg and react
			// Set 'sentMsg' to initial reply
			sentMsg = await interaction.reply({ content: 'Chose \'H\' for HEADS or \'T\' for TAILS', fetchReply: true });

			// React to 'sentMsg'
			sentMsg.react('🇭')
			.then(() => sentMsg.react('🇹'))
			.catch(error => console.error('One or more emojis failed to react:', error));

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