const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');


exports.run = async (client, message, args) => {
  let autor = message.author;



  let user = message.mentions.users.first() || client.users.cache.get(args[0]);

  if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dar like!');
}

if(user.id == autor.id){
        return message.channel.send(` ${autor} você não pode dar like a si próprio!`);
    };



  let sorte = Math.floor(Math.random() * 2) + 1;
    let amount = sorte;

    db.add(`like_${user.id}`, amount);
    db.set(`likes_${user.id}`, Date.now());




    const embed = new Discord.MessageEmbed()
  .setTitle('💖 Like!')
  .setDescription(`Você deu ${amount} like para ${user}!`)
  .setColor('dfcaff')
  message.channel.send(embed)

}