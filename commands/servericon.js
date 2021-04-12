const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

let icon = message.guild.iconURL({dynamic: true, format: "png", size: 2048})

const icone = new Discord.MessageEmbed()
.setDescription(`Icon de ${message.guild.name} [Clique Aqui](${icon}) para baixar a imagem`)
.setImage(icon)
.setColor("BLACK")
message.channel.send(icone)

}