const { SlashCommandBuilder } = require('@discordjs/builders');
const { randomInt } = require('mathjs');

module.exports = {

    data: new SlashCommandBuilder()

        // Command name
        .setName('blackjack')

        // Command description
        .setDescription('Gamble your Social Credit in a game of Blackjack!')

        // Command input [wager][OPTIONAL]
        .addNumberOption(option => option
            .setRequired(false)
            .setName('wager')
            .setDescription('Enter an amount to be wagered')),

            
    async execute(interaction){

    }

}