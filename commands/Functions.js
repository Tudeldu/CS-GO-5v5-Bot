//write JSON.stringify()
//read JSON.parse()
const fs = require('fs');

module.exports={
    name: 'Functions',
    pushplayer(player){
    var teams = fs.readFileSync('teams.json', 'utf-8');
    teams = JSON.parse(teams)
    if(teams.undefined.length>=10){
        return 'there are already 10 players registered'
    }
    teams.undefined.push(player)
    fs.writeFileSync('teams.json',JSON.stringify(teams))
    return `${player} is now registered\n${teams.undefined.length} of 10 players registered`
},

 splitToTeams(){
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
    }
    fs.writeFileSync('teams.json',JSON.stringify(teams))
},

 reset(){
    fs.writeFileSync('teams.json','{"CT": [],"T": [],"undefined": [], "map": ""}')
},

 resetTeams(){
    var teams = fs.readFileSync('teams.json', 'utf-8');
    teams = JSON.parse(teams)
    teams.undefined=[...teams.CT,...teams.T]
    teams.CT=[]
    teams.T=[]
},

swap(a,b){
    if(a>5||b>5) return 'out of bounds, du hurrehnsonn!';
    var teams = fs.readFileSync('teams.json', 'utf-8');
    teams = JSON.parse(teams)
    if(teams.CT.length!=5||teams.T.length!=5) return 'teams not (properly) built';
    a--;
    b--;
    var mem=teams.CT[a]
    teams.CT[a]=teams.T[b]
    teams.T[b]=mem
    fs.writeFileSync('teams.json',JSON.stringify(teams))

},

 reroll(){
    resetTeams()
    return splitToTeams()
},

createEmbeded()
{
    var teams = fs.readFileSync('teams.json', 'utf-8');
            teams = JSON.parse(teams)
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
    return TeamsEmbedded;
},

readTeams(){
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
},

}