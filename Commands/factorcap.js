const { SlashCommandBuilder } = require('@discordjs/builders');
const { randomInt } = require('mathjs');

module.exports = {

    data: new SlashCommandBuilder()

        // Command name
        .setName('factorcap')
        
        // Command description
        .setDescription('Answers the question: Fact, or cap?'),


        /**
         * 
         * @param {Object} interaction 
         */
        async execute(interaction){

            // Generate random number
            let FOC = randomInt(0, 2);

            // Print out "Fact" or "Cap" based on 'FOC' (0 = Cap, 1 = Fact)
            if(FOC){
                await interaction.reply({content: 'Das fax 📠'});
            } else {
                await interaction.reply({content: 'Stop the cap 🧢'});
            }

        }

}