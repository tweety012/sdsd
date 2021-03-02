const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  

  const onayembed = new Discord.MessageEmbed()
  .setTimestamp()
  .setFooter("Confirm 👍 to emoji, Reject 👎 to emoji you can click")
  .setDescription("**❗ Nuke Commands** \n\nIf you approve the nuke, this channel will be permanently deleted However, this channel will be duplicated!\n")
  message.channel.send(onayembed).then(msg => {
msg.react('👍').then(() => msg.react('👎'));

const filter = (reaction, user) => {
	return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '👍') {
      message.channel.clone({position: message.channel.position});
      message.channel.delete();
		} else {
			message.reply('<:788152753888952391:816286093405454358> **Nuke It is cancelled!**');
      msg.delete({timeout:3000})
		}
	})
	.catch(collected => {
		message.reply('<:795084193209909289:816287005184098314> **We encountered an error**');
	});
  
})

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3,
  kategori: "nuke"
};

exports.help = { 
	name: 'nuke', 
  description: "Bot bulunduğunuz kanalı siler ve yeniden oluşturur.",
  usage: 'nuke'
}
