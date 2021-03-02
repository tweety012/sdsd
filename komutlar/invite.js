const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const motion = new Discord.MessageEmbed()
                      .setDescription(
    `
<:708996099460825140:788001866940022804> **İnvite The Bot**

\`Permissions:\`

> __Authorized__ [Click and go](https://discord.com/oauth2/authorize?client_id=813407970750496828&scope=bot&permissions=8)
> __Unauthorized__ [Click and go](https://discord.com/oauth2/authorize?client_id=813407970750496828&scope=bot&permissions=0)
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
  name: "invite",
  description: "",
  usage: ""
};