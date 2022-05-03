const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const teamfunctions=require('./commands/Functions.js')
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);
    
    try {
        command.execute(message, args);
        console.log(message.member.displayName+' has executed '+commandName)
	fs.appendFileSync("logfile.log", '['+(new Date(Date.now())).toUTCString()+'] '+message.member.displayName+': '+prefix+commandName+'\n');
    } catch (error) {
        console.error(error);
	fs.appendFileSync("logfile.log", '**************************\n'+'['+(new Date(Date.now())).toUTCString()+']\n'+error+'\n**************************');
        message.reply('there was an error trying to execute that command!');
    }
});

client.login(token);
