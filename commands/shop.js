const Discord = require('discord.js');

exports.run = async (bot, message, argumentos, arg_teste, chat) => {
    const { guild } = message
  const icon = guild.iconURL()
  const comandos = new Discord.MessageEmbed()
  .setColor('#000001')
  .setThumbnail(icon)
  .setTitle('Minha loja')
  .setDescription(`Olá ${message.author}, Bem vindo a minha loja! \n\n 🛒 **Itens**\n\n 🔫 **Armas**\n\n 🚙 **Carros**.`)
  .setTimestamp()
  .setFooter(`Autor do comando: ${message.author.username}`, message.author.displayAvatarURL({Size: 32}))

  message.channel.send(comandos).then(msg => {
    msg.react('🛒').then(r => {
      msg.react('🔫').then(r => {
        msg.react('🚙').then(r => {
          
        })
      })
    })

    const geralFilter = (reaction, user) => reaction.emoji.name === '🛒' && user.id === message.author.id;
      const staffFilter = (reaction, user) => reaction.emoji.name === '🔫' && user.id === message.author.id;
    const diverFilter = (reaction, user) => reaction.emoji.name === '🚙' && user.id === message.author.id;

    const geral = msg.createReactionCollector(geralFilter);
      const staff = msg.createReactionCollector(staffFilter);
    const diver = msg.createReactionCollector(diverFilter);


    geral.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('**Itens**')
      .setThumbnail(icon)
       .addFields(
        {
        name: 'Bola',
        value: '2000'
        },
        {
        name: 'Celular',
        value: '5000'
        },
        {
        name: 'Death Note',
        value: '7000'
        },
        {
        name: 'PC',
        value: '10000'
        },
        {
        name: 'PlayStation 5',
        value: '23000'
        }
      )
      .setColor('#000001')
      msg.edit(embed);
      })

    staff.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('**Armas**')
      .setThumbnail(icon)
      .addFields(
        {
        name: 'Pistola',
        value: '3000'
        },
        {
        name: 'ak-47',
        value: '5000'
        },
        {
        name: 'mp-5',
        value: '10000'
        },
        {
        name: 'Vector',
        value: '15000'
        },
        {
        name: 'Metralhadora',
        value: '22000'
        }
      )
      .setColor('#000001')
      msg.edit(embed);
    })

    diver.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('**Carros**')
      .setThumbnail(icon)
      .addFields(
        {
          name: 'Fusca',
          value: '3000'
        },
        {
        name: 'HB20',
        value: '7000'
        },
        {
        name: 'Camionete',
        value: '10000'
        },
        {
        name: 'Camaro',
        value: '15000'
        },
        {
        name: 'Nissan',
        value: '20000'
        }
      )
      .setColor('#000001')
      msg.edit(embed);
    })




  })








}