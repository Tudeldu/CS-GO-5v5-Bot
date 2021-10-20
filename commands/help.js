const fs = require('fs');

module.exports = {
	name: 'help',
	description: 'help for 5v5_bot',
	execute(message, args) {
		if (!message.guild) return;
        if (message.member.voice.channel) {
        message.channel.send('\n-add <Name> |Adds player with <name> to the Roster\n -register |Adds player that uses command to the Roster\n -maketeams |Creates random T & CT Teams\n -reroll |Rerolls the Teams\n -reset |Resets the Bot\n -swap <Player Number in Team1> <Player Number in Team2> |Swaps two Players\n -info |returns currently registered players\n -newmap |rerolls the map for 5v5');
        } else {
        message.reply('You need to join a voice channel first!');
    }
   
  
	},
};