const Discord = require("discord.js");

exports.run = async(client, message, args) => {
              const codare = require('../ayarlar.json')
            let prefix = codare.prefix

  
  const motion = new Discord.MessageEmbed()
                      .setDescription(
    `
<:701858829792575528:788374251740200961> **Welcome To AtalantisBot**

**Convert:** \`${prefix}v11tov12 <codes>\`
 
- to access my command list ${prefix}help
- Do you need help [Joining Support Server](https://discord.gg/chkpfQpx)

**Commands** (5)

invite, stats, nuke, slowmode, prefix

`)
  
  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "help",
  description: "",
  usage: ""
};