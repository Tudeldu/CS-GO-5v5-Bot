const fs = require('fs');

module.exports = {
	name: 'test',
	description: 'help for 5v5_bot',
	execute(message, args) {
		if (!message.guild) return;
        if (message.member.voice.channel) {
            message.reply(message.member.voice)
        } else {
        message.reply('You need to join a voice channel first!');
    }
   
  
	},
};