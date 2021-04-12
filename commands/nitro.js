const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  let embed = new Discord.MessageEmbed()
  .setColor("BLACK")
  .setTitle('Tenho um nitro pra te dar, você aceita?')
  .setDescription('Clique em aceitar para ter o nitro que eu vou te dar!')
  .setImage('https://media.discordapp.net/attachments/772477554668994610/774337350271500348/image0-2-1.png')
  .setTimestamp();
  await message.channel.send(embed)
}