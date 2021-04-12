const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {    
    if (message.author.id !== '721493542819856425') {
       return message.channel.send("Desculpe, mas só meu criador pode usar este comando!")
        }

    let user = message.mentions.users.first();

    if (!user) {
        return message.channel.send(` ${message.author}, você precisa mencionar um usuário para adicionar o Dinheiro!`);
    };

    if (isNaN(args[1])) {
        return message.channel.send(` ${message.author}, você precisa colocar um número valido!`);
    };

    db.add(`money_${message.guild.id}_${user.id}`, args[1]);
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);
       
    let moneyEmbed = new Discord.MessageEmbed()
    .setTitle("Dinheiro adicionado!")
    .setColor("#000001")
    .setDescription(`Foi adicionado **$${args[1]}** para ${user}!\n\nDinheiro Atual: **R$${bal}**`)
    .setFooter(`Dinheiro foi adicionado!`);
    message.channel.send(moneyEmbed);
}