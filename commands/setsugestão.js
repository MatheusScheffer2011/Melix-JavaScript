const Discord = require('discord.js');//conectando com o discord
const db = require('quick.db');// npm i quick.db
const config = require('../../config.json')//se quiser tirar esse ach que pode

exports.run = async (client, message, args) => {

  if (!message.member.permissions.has("ADMINISTRATOR")) {
   return message.reply(`${message.author} Você precisa da permissão **ADMINISTRADOR** para usar o comando!`)
 }

 let canal = message.mentions.channels.first();
 if (!canal) {
   return message.channel.send("Mencione um chat válido!")
 }

 let chx = db.set(`sugestao_${message.guild.id}`, canal.id);
 message.channel.send(`canal setado ${canal} com sucesso!`)
}//lembrando quando for mencionar um canal tem q colocar o prefixo