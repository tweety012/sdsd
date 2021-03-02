const emran = require('discord.js');
//codarev12

exports.run = async(client, message, args) => {
              const codare = require('../ayarlar.json')
            let prefix = codare.prefix
//codarev12

              if(message.channel.type == "dm")  return;
if (message.channel.type !== "text") return;
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("<:708996099460825140:788001866940022804> **You do not have sufficient privileges**");  
//codarev12
const limit = args[0] ? args[0] : 0;//codare
  if(!limit) {//codare
              var embed = new emran.MessageEmbed()
                .setDescription(`<:758978905574342687:788370520210145312> **Proper use:** \`${prefix}slowmode [0/100]\``)//codare
            message.channel.send({embed})
            return
          }//codare
if (limit > 100) {
    return message.channel.send(new emran.MessageEmbed().setDescription("<:767388134928678922:788370531656663051> **Maximum time limit** \`100\` **Can be** "));
}  
    message.channel.send(new emran.MessageEmbed().setDescription(`<:708993792950140979:788001820068544552> **Slowmode** \`${limit}\` **Set**`)).then(m => m.delete({ timeout: 5000, reason: 'Siliniyor.' }));
  
var request = require('request');
request({
    url: `https://discord.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slowmode", "slowmode", "slowmode", 'slowmode', 'slowmode'],
  permLevel: 0,

};

exports.help = {
  name: 'slowmode',
  description: 'Sohbete yazma sınır (süre) ekler.',
  usage: 'slowmode [1/10]',
};