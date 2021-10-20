const fs = require('fs');

module.exports = {
	name: 'testregister',
	description: 'help for 5v5_bot',
	execute(message, args) {
		if (!message.guild) return;
        if (message.member.voice.channel) {
            for(var i=0;i<9;i++){
            pushplayer('TestPlayer '+i)
                	}
                    message.channel.send('succes')
            } else {
        message.reply('You need to join a voice channel first!');
    }
    
    function pushplayer(player){
        var teams = fs.readFileSync('teams.json', 'utf-8');
        teams = JSON.parse(teams)
        if(teams.undefined.length>=10){
            return 'there are already 10 players registered'
        }
        teams.undefined.push(player)
        fs.writeFileSync('teams.json',JSON.stringify(teams))
        return `${player} is now registered\n${teams.undefined.length} of 10 players registered`
    }
  
	},
};