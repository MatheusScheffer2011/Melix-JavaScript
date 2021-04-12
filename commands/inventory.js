const db = require('quick.db');
const Discord = require('discord.js');

exports.run = async (bot, message, args) => {

        let items = await db.fetch(message.author.id);
        if(items === null) items = "Você ainda não comprou nada, digite m!shop"

        const Embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .addField('Invetário', items)

        message.channel.send(Embed);
}