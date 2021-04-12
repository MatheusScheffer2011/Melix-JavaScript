const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  message.channel.send("Calculando ping...").then((resultMessage) => {
     const ping = resultMessage.createdTimestamp - message.createdTimestamp
     resultMessage.edit(`:ping_pong: Pong! **Latencia do Bot:** ${ping}ms | **Sua Latencia:** ${bot.ws.ping}ms `)
  })
}

module.exports.config = {
  command: "ping",
  aliases: ["latencia"],
  category: "general",
  cooldown: 5,
  args: false
}