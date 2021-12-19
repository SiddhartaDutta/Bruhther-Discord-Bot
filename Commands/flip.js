const { SlashCommandBuilder } = require('@discordjs/builders');
const { Message } = require('discord.js');
const { randomInt } = require('mathjs');

var run = false;
var choice;

module.exports = {

	possibleH:["H", "HEAD", "HEADS"],
	possibleT:["T", "TAIL", "TAILS"],

    /**
	 * 
	 */
	data: new SlashCommandBuilder()

        // Command name
		.setName('flip')

        // Command description
		.setDescription('Flip a coin to earn some Social Credit!')

		// Command input [face][REQUIRED]
		.addStringOption(option => option
			.setRequired(true)
			.setName('face')
			.setDescription('Choose a face of the coin: heads or tails'))

		// Command input [wager][OPTIONAL]
		.addNumberOption(option => option
			.setRequired(false)
			.setName('wager')
			.setDescription('Enter an amount to be wagered')),

			
    /**
	 * execute: Sets up flip game and calls runFlip
	 * @param {Object} interaction Command message itself
	 */
	async execute(interaction){


		/* Initialize FACE - Cain face selection [REQUIRED] */

			// Coin Face
		var FACE = interaction.options.getString('face');

			// Convert string to all caps
		FACE = FACE.toUpperCase();


		/* Initialize WAGER - Wager input [OPTIONAL] */

			// Wager (optional)
		let WAGER = interaction.options.getNumber('wager');

			// If input is 'null' (meaning no inputted wager), set to 5
		if(WAGER == null){
			WAGER = 5.00;
		}


		/* Process FACE */
		
		if(this.possibleH.includes(FACE)){				// Checks for heads input
			run = true;
			choice = 1;
		} else if (this.possibleT.includes(FACE)){		// Checks for tails input
			run = true;
			choice = 0;
		} else {
			interaction.reply({content: 'You didn\'t choose a coin face 😠', ephemeral: true});
		}

		
		/* RUN GAME */

		if(run){

			let flip = randomInt(0,2);

			if(flip && choice){				// Win [H|H]
				interaction.reply({content: `> <@${interaction.user.id}> spent ` + WAGER + ' SC and picked HEADS - You won!'});
			} else if(!flip && !choice){	// Win [T|T]
				interaction.reply({content: `> <@${interaction.user.id}> spent ` + WAGER + ' SC and picked TAILS - You won!'});
			} else {
				interaction.reply({content: 'L CITY'});
			}

		}


		/* EMBED */

		//#region ReactionTest

		// Print out game msg and react
		// Set 'sentMsg' to initial reply
		// sentMsg = await interaction.reply({ content: 'Chose \'H\' for HEADS or \'T\' for TAILS', fetchReply: true });

		// // React to 'sentMsg'
		// sentMsg.react('🇭')						// :regional_indicator_h:
		// 	.then(() => sentMsg.react('🇹'))	// :regional_indicator_t:
		// 	.catch(error => console.error('One or more emojis failed to react:', error));

		// // Set 'GAME_TRIGGER' to True
		// GAME_TRIGGER = true;

		// await sentMsg.reply({ content: 'work1'});

		/*
		function func(reaction){
			console.log(reaction.emoji.name);
		}

		const filter = (reaction, user) => {
			func(reaction);
			return ['🇭', '🇹'].includes(reaction.emoji.name) && user.id === interaction.user.id;
		};

		sentMsg.awaitReactions({ filter, max: 1, time: 3000})
			.then(collected => {
				console.log("ran");
				sentMsg.reactions.removeAll()
					.catch(error => console.error('Failed to clear reactions:' , error));
			})
			.catch(console.log("UNRAN\n"));
			*/

			/*
			console.log(interaction.user.id);
			const filter = (reaction, user) => reaction.emoji.name === '🇭' && user.id === interaction.user.id;
			const collector = sentMsg.createReactionCollector({ filter});
			collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
			collector.on('end', collected => console.log(`Collected ${collected.size} items`));
			*/

			//sentMsg = await sendReact();

			// const filter = (reaction, user) => {
			// 	return ['🇭', '🇹'].includes(reaction.emoji.name) && user.id === interaction.user.id;
			// };

			// await sentMsg.awaitReactions(filter, {max: 1, time: 10000 })
			// 	.then(collected => {
			// 		const reaction = collected.first();

			// 		if(reaction.emoji.name === '🇭'){
			// 			await sentMsg.reply({ content: 'work1'});
			// 		} else {
			// 			await sentMsg.reply({ content: 'work2'});
			// 		}
			// 	})
			// 	.catch(collected => {
			// 		await sentMsg.reply({ content: 'nothing'});
			// 	})

			//#endregion
	
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