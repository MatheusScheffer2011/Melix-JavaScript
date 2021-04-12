const Discord = require('discord.js');
const db = require('quick.db');
const config = require('../../config.json')

exports.run = async (client, message, args) => {

 let chx = db.get(`sugestao_${message.guild.id}`)

 if (chx === null) {
   return message.reply(`O Canal não foi setado, use ${config.prefix}setsugestão para setar o canal!`)
 }

  let sugestão = args.splice(0).join(' ');
  if (!sugestão) {
    return message.reply("**Você precisa digitar sua sugestão!**")
  }

  if (sugestão.length > 500) {
    return message.channel.send("A precisa ter 500 caracteres no máximo!")
  }

 {

  let embedsugesttion = new Discord.MessageEmbed()
  .setTitle(`Sugestão de  ${message.author.username}`)
  .setDescription(`a Sugestão: ${sugestão}`)
  .setColor("WHITE")

    client.channels.cache.get(chx).send(embedsugesttion).then(msg => {
      msg.react(`✅`);//o bot tem que tar no servidor do emoji 
      msg.react(`❌`)
    })

    message.channel.send("**Sua sugestão foi enviada com sucesso!**")
 }
};