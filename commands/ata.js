const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (client, message, args) => {

let moedas = await db.fetch(`money_${message.author.id}`)
if(moedas === null) moedas = 0;


const cu = new Discord.MessageEmbed()
.setTitle(`Moedas de ${message.author.username}`)
.setDescription(moedas)
.setColor("GREEN")
message.channel.send(cu)
  
}
module.exports.help = {
aliases: ["money"],
name: "bal"
}