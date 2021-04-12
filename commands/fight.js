const Discord = require("discord.js");

const db = require("quick.db");

const ms = require("parse-ms");



exports.run = async (bot, message, args) => {

  

    let autor = message.author;

    

    let user = message.mentions.users.first();

    

    if(!user) {

        return message.channel.send(` ${autor} Você precisar mencionar um usuário para duelar!`);

    };



    if(user.id == autor.id){

        return message.channel.send(` ${autor} Você não pode Duelar com você mesmo!`);

    };



    let user_money = await db.fetch(`money_${message.guild.id}_${user.id}`)

    if(user_money == null) user_money = 0;



    let autor_money = await db.fetch(`money_${message.guild.id}_${autor.id}`)

    if(autor_money == null) autor_money = 0;

        

    if(user_money <= 0) {

        return message.channel.send(` ${autor}, Você não pode Duelar alguem que não tem nada na carteira pra apostar no duelo !`);

    };



    let timeout = 0;



    let daily = await db.fetch(`fight_${message.guild.id}_${autor.id}`);



    if (daily !== null && timeout - (Date.now() - daily) > 0) {



        let time = ms(timeout - (Date.now() - daily));

  

        let timeEmbed = new Discord.MessageEmbed()

        .setColor("#000001")

        .setDescription(` Você já Duelou , Tente depois dos **${time.hours}h ${time.minutes}m ${time.seconds}s**`);

        

        message.channel.send(`${autor}`, timeEmbed);

    } else {

        

        let sorte = Math.floor(Math.random() * 4) + 1;

        

        if(sorte == 2) {

            

            let amount = Math.floor(Math.random() * autor_money) + 1;

            

            let moneyEmbed = new Discord.MessageEmbed()

            .setTitle(" | Batalha Épica")

            .setColor("#000001")

            .setDescription(`Você não ganhou o Duelo e perdeu **R$${amount}**!`);

           

            message.channel.send(`${autor}`, moneyEmbed);

            db.subtract(`money_${message.guild.id}_${autor.id}`, amount);

            db.set(`fight_${message.guild.id}_${autor.id}`, Date.now());

        }else{

            

            let amount = Math.floor(Math.random() * user_money) + 1;

            

            let moneyEmbed = new Discord.MessageEmbed()

            .setTitle(" | Batalha Épica")

            .setColor("#000001")
            
            .setImage("https://imgur.com/wUODdsf")

            .setDescription(`${autor} ganhou de ${user} e ficou com **R$${amount}**!`);

            

            message.channel.send(`${autor}`, moneyEmbed);

            db.subtract(`money_${message.guild.id}_${user.id}`, amount);

            db.add(`money_${message.guild.id}_${autor.id}`, amount);

            db.set(`fight_${message.guild.id}_${autor.id}`, Date.now());

        };

    };

}