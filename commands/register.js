//const teamfunctions=require('Functions.js')
const fs = require('fs');

module.exports = {
	name: 'register',
	description: 'registers for 5v5',
	execute(message, args) {
		if (!message.guild) return;
        if (message.member.voice.channel) {
        message.channel.send(pushplayer(message.member.displayName));
        //message.member.voice.channel.leave();
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