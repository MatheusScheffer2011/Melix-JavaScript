const Discord = require("discord.js");
const config = require("../config.json");
const moment = require("moment");
const ms = require("ms");

module.exports.run = async (client, message, args) => {

  message.delete();
  if (!args[0])
    return message.channel.send(
      `**${message.author.username}, a sintaxe correta é** \`${config.prefix}channelinfo (nome do canal)\``
    ); 
  let channel = message.guild.channels.cache.find(channel => channel.name === args[0]);

  if (!channel) {
    message.channel.send(
      "" + args[0] + " **não é um chat deste servidor.**"
    );
  } else {
    const embed = new Discord.MessageEmbed()
  .addField(`Chat`, `<#${channel.id}>`)
  .addField(`Nome do chat:`,`${channel.name}`)
  .addField(`ID do Chat`,`${channel.id}`)
  .addField(`Foi criado no dia:`, `${moment(channel.createdAt).format("DD/MM/YYYY, h:mm A", Date.now())}`)
  await message.channel.send(embed);
  } 

};