const fs = require('fs');

module.exports = {
	name: 'info',
	description: 'info for 5v5 bot',
	execute(message, args) {
		if (!message.guild) return;
        if (message.member.voice.channel) {
        var teams = fs.readFileSync('teams.json', 'utf-8');
        teams = JSON.parse(teams)
        
            var out="";
        for(var i=0;i<teams.CT.length;i++){
            out=out+", "+teams.CT[i];
        }
        for(var i=0;i<teams.T.length;i++){
            out=out+", "+teams.T[i];
        }
        for(var i=0;i<teams.undefined.length;i++){
            out=out+", "+teams.undefined[i];
        }
        message.channel.send(out);
        console.log(teams)
        } else {
        message.reply('You need to join a voice channel first!');

        
    }
   
  
	},
};