const { Client, Message, MessageEmbed } = require('discord.js');


module.exports = {
  name: 'resetar',
  run: async(client, message, args) => {
    const member = message.mentions.members.first();message.member;

    if(!member) return message.reply("Você precisa dizer o membro!");

    try {
      member.setNickname(null)
    } catch (err) {
      message.reply("Não tenho permissão para resetar o apelido de " + member.toString() + " nickname!"
      );
    }
  },
};