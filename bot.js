const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./settings.json').token;
const ddiff = require('return-deep-diff');
client.on('ready', () => {
  console.log('I\'m Online\nI\'m Online');
});

// client.on('',''=>{});


client.on('guildMemberAdd', member => {
  let guild = member.guild;
  client.channels.get('428005344065617930').sendMessage(`Hey, ${member.user}! Welcome to the server! Please, make sure you check out the channels in the "Welcome" category before proceeding.`);
});


client.login(process.env.BOT_TOKEN);
