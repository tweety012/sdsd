const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const seksizaman = moment
    .duration(client.uptime)
    .format(" D [Day], H [Hour], m [Minute], s [Second]");
  const istatistikler = new Discord.MessageEmbed()
    .setTimestamp()
    .setFooter("© 2021 Atalantis-BOT", client.user.avatarURL())
    .addField("» **Delay times**","Message Delay: {ping1} ms \nBot Delay: {ping2} ms"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
    .addField("» **Memory usage**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
    .addField("» **Operation time**", seksizaman, true)
    .addField("» **Users**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("» **Servers**", client.guilds.cache.size.toLocaleString(), true)
    .addField("» **Channels**", client.channels.cache.size.toLocaleString(), true)
    .addField("» **Discord.JS version**", "v" + Discord.version, true)
    .addField("» **Node.JS version**", `${process.version}`, true)
    .addField("» **Number of Servers Playing Music**", client.voice.connections.size, true)
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["stats"],
  permLevel: 0
};

exports.help = {
  name: "stats",
  description: "Botun istatistiklerini gösterir",
  usage: "stats"
};
