const fs = require('fs');

module.exports = {
	name: 'reroll',
	description: 'rerolls teams',
	execute(message, args) {
		if (!message.guild) return;
        if (message.member.voice.channel) {
        reroll()
        var teams = fs.readFileSync('teams.json', 'utf-8');
            teams = JSON.parse(teams)
            var maps=["Mirage", "Inferno","Overpass","Nuke","Train","Dust II","Cache"];
            var rndm=Math.floor(maps.length*Math.random())
            if(teams.map.length<1){
                teams.map=maps[rndm]
                fs.writeFileSync('teams.json',JSON.stringify(teams))
            }
            var mapImg
            switch (teams.map){
                case "Mirage":
                    mapImg='https://w7.pngwing.com/pngs/798/960/png-transparent-counter-strike-global-offensive-dota-2-electronic-sports-steelseries-elite-crew-csgo-miscellaneous-logo-video-game.png'
                    break;
                 case "Inferno":
                    mapImg='https://image.pngaaa.com/30/1961030-middle.png'
                    break;
                case "Overpass":
                    mapImg='https://static.wikia.nocookie.net/cswikia/images/d/d9/Set_overpass.png'
                    break;
                case "Nuke":
                    mapImg='https://images.skin.club/img/cases/collection/nuke2018.png'
                    break;
                case "Train":
                    mapImg='https://e7.pngegg.com/pngimages/609/475/png-clipart-counter-strike-global-offensive-train-logo-emblem-map-ai-emblem-text.png'
                    break;
                case "Dust II":
                    mapImg='https://csgostash.com/img/collections/256x198/the_dust_2_collection.png'
                    break;
                case "Cache":
                    mapImg='https://csgostash.com/img/collections/256x198/the_cache_collection.png'
                    break;
            }
            const Discord = require('discord.js');
            const TeamsEmbedded = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Not a rickroll')
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            .setAuthor('Tudeldu', 'https://seeklogo.com/images/C/counter-strike-global-offensive-logo-B877EB5D33-seeklogo.com.png', 'https://www.reddit.com/user/tudeldu')
            .setDescription('This Bot creates teams of five and a random map')
            .setThumbnail(mapImg)
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'Terrorists', value: readT(), inline: true },
                { name: 'Counter-Terrorists', value: readCT(), inline: true },
            )
            .addField('Map', teams.map, true)
            .setImage('https://thumbs.gfycat.com/WhichWaryBluemorphobutterfly-size_restricted.gif')
            .setTimestamp()
                
            message.channel.send(TeamsEmbedded);
        } else {
        message.reply('You need to join a voice channel first!');
    }
    function resetTeams(){
        var teams = fs.readFileSync('teams.json', 'utf-8');
        teams = JSON.parse(teams)
        for(var i=0;i<5;i++)
        {
            teams.undefined.push(teams.CT[i])
            teams.undefined.push(teams.T[i])
        }
        teams.CT=[]
        teams.T=[]
        fs.writeFileSync('teams.json',JSON.stringify(teams))
    }
    
    function reroll(){
        resetTeams()
        return splitToTeams()
    }

    function splitToTeams(){
        var teams = fs.readFileSync('teams.json', 'utf-8');
        teams = JSON.parse(teams)
        if(teams.undefined.length<10){
            return `${10-teams.undefined.length} more players needed`
        }else if(teams.undefined.length>10) {
            return 'to many players registered'
        }else{
            for(var i=5;i>0;i--){
                var rndm=Math.floor(teams.undefined.length*Math.random())
                teams.CT.push(teams.undefined[rndm])
                teams.undefined.splice(rndm,1)
            }
            teams.T=teams.undefined
            teams.undefined=[]
            fs.writeFileSync('teams.json',JSON.stringify(teams))
            console.log(readTeams())
            return readTeams()
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
        
    }
    function readCT(){
        var teams = fs.readFileSync('teams.json', 'utf-8');
    teams = JSON.parse(teams)
        var ct=''
            var t=''
            for(var i=0;i<5;i++){
                ct=ct+` (${i+1})`+' '+teams.CT[i]+'\n'
                
            }
            
            return ct
    }

    function readT(){
        var teams = fs.readFileSync('teams.json', 'utf-8');
    teams = JSON.parse(teams)
        var ct=''
            var t=''
            for(var i=0;i<5;i++){
                
                t=t+` (${i+1})`+' '+teams.T[i]+'\n'
            }
            
            return t
    }
  
	},
};