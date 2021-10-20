const fs = require('fs');

module.exports = {
	name: 'add',
	description: 'adds to 5v5',
	execute(message, args) {
		if (!message.guild) return;
        if (message.member.voice.channel) {
        message.channel.send(pushplayer(args[0]));
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
        console.log(readTeams())
        return `${player} is now registered\n${teams.undefined.length} of 10 players registered`
        
    }

    function readTeams(){
        var teams = fs.readFileSync('teams.json', 'utf-8');
        teams = JSON.parse(teams)
        var ct=''
            var t=''
            for(var i=0;i<5;i++){
                ct=ct+teams.CT[i]+` (${i+1})`+'\n'
                t=t+teams.T[i]+` (${i+1})`+'\n'
            }
            ct='-----:CT:-----\n'+ct
            t='-----:T:------\n'+t
            return ct+t
    }
  
	},
};