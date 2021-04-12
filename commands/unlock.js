const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
 
  let motivo = args.slice(" ").join(" ")
  if(!motivo) motivo = "Motivo não Informado"
      let avatar = message.author.avatarURL({ dynamic: true, format: "gif", size: 1024 });
            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const embed = new Discord.MessageEmbed()
        .setDescription(`${message.author}, Lhe falta permissão para usar o comando`)
        return message.channel.send(embed);
      }
    message.delete();
    message.channel.createOverwrite(message.guild.id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true
    })
    const embed = new Discord.MessageEmbed()
    .setTitle('CHAT DESBLOQUEADO')
    .setDescription(`Chat desbloqueado!`)
    .addField('Para bloquear:', 'm!lock', true)
    .addField('Quem destrancou:', `${message.author}`, true)
    .addField('Rasão:', motivo)
    .setTimestamp()
    .setThumbnail(avatar)
    .setColor('#6400b6')
    message.channel.send(embed);
    
}
 