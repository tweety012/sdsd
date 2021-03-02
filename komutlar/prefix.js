const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {// can#0002
const codare = require('../ayarlar.json')
let prefix = codare.prefix

let argslar = ['add', 'remove', 'set', 'clear'];
if(!args[0] || !argslar.includes(args[0])) {

let prefixes = ['1. <@!'+client.user.id+'>'];
const prefixler = await database.fetch(`prefixes.${message.guild.id}`);
if(prefixler && prefixler.length >= 1) {
var i = 1;
for(const key in prefixler) {
i++
prefixes.push(i+'. '+prefixler[key]);
};
};

const embed = new Discord.MessageEmbed()
.setTitle('<:701851468243796198:788464208228515870> | Prefix System')
.setDescription('__To set__ \`!prefix add <prefix>\`\n__Deleted__ \`!prefix remove <prefix>\`\n__Cleaning__ \`!prefix clear\` ')
return message.channel.send(embed);

};

if(args[0] === 'add') {
if(!args[1]) return;
if(args[1].startsWith('"') && args[args.length-1].endsWith('"')) {
let arg = args.slice(1).join(' ').slice(1, args.slice(1).join(' ').length-1);
const prefixler = await database.fetch(`prefixes.${message.guild.id}`);
if(prefixler && prefixler.some(a => a === arg)) return message.channel.send(`<:788152753888952391:816286093405454358> \`${arg}\` **Added**`);  
await database.push(`prefixes.${message.guild.id}`, arg);
return message.channel.send(`<:788152753888952391:816286093405454358> \`${arg}\` **Added**`);
};
if(args[2]) return message.channel.send("<:795084193209909289:816287005184098314> **You've given too many prefixes. Either quote it or only do it one by one.**");
const prefixler = await database.fetch(`prefixes.${message.guild.id}`);
if(prefixler && prefixler.some(a => a === args[1])) return message.channel.send(`<:788152753888952391:816286093405454358> \`${args[1]}\` **Added**`);  
await database.push(`prefixes.${message.guild.id}`, args[1]);
return message.channel.send(`<:788152753888952391:816286093405454358> \`${args[1]}\` **Added**`);
};

if(args[0] === 'remove') {
if(!args[1]) return;
if(args[1].startsWith('"') && args[args.length-1].endsWith('"')) {
let arg = args.slice(1).join(' ').slice(1, args.slice(1).join(' ').length-1);
const prefixler = await database.fetch(`prefixes.${message.guild.id}`);
if(prefixler && !prefixler.some(a => a === arg)) return message.channel.send('<:708993792950140979:788001820068544552> **I do not have this** \`prefix\` **registered.**');  
await database.set(`prefixes.${message.guild.id}`, prefixler.filter(a => a !== arg));
return message.channel.send(`<:788152753888952391:816286093405454358> \`${arg}\` Removed`);
};
if(args[2]) return message.channel.send("<:795084193209909289:816287005184098314> **You've given too many prefixes. Either quote it or only do it one by one.**");
const prefixler = await database.fetch(`prefixes.${message.guild.id}`);
if(prefixler && !prefixler.some(a => a === args[1])) return message.channel.send('<:708993792950140979:788001820068544552> **I do not have this** \`prefix\` **registered.**');  
await database.set(`prefixes.${message.guild.id}`, prefixler.filter(a => a !== args[1]));
return message.channel.send(`<:788152753888952391:816286093405454358> \`${args[1]}\` **Removed**`);
};

if(args[0] === 'set') {
if(!args[1]) return;
if(args[1].startsWith('"') && args[args.length-1].endsWith('"')) {
let arg = args.slice(1).join(' ').slice(1, args.slice(1).join(' ').length-1);
await database.delete(`prefixes.${message.guild.id}`);
await database.push(`prefixes.${message.guild.id}`, arg);
return message.channel.send(`<:788152753888952391:816286093405454358> **Prefix for this server is now** \`${arg}\``);
};
if(args[2]) return message.channel.send("<:795084193209909289:816287005184098314> **You've given too many prefixes. Either quote it or only do it one by one.**");
await database.delete(`prefixes.${message.guild.id}`);
await database.push(`prefixes.${message.guild.id}`, args[1]);
return message.channel.send(`<:788152753888952391:816286093405454358> **Prefix for this server is now** \`${args[1]}.\``);
};

if(args[0] === 'clear') {
await database.delete(`prefixes.${message.guild.id}`);
return message.channel.send('<:788152753888952391:816286093405454358> **ALL** \`prefixes\` **removed, you need to mention me to set a new one.**');
};

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'prefix'
};// codare ♥