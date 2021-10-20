const fs = require('fs');

module.exports = {
	name: 'reset',
	description: 'resets 5v5',
	execute(message, args) {
		if (!message.guild) return;
        if (message.member.voice.channel) {
            reset()
        message.channel.send("5v5 has been resetted");
        //message.member.voice.channel.leave();
        } else {
        message.reply('You need to join a voice channel first!');
    }
    function reset(){
        fs.writeFileSync('teams.json','{"CT": [],"T": [],"undefined": [], "map": ""}')
    }
  
	},
};