const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
'https://images-ext-1.discordapp.net/external/NrPVoh3z1-4xTph_LuuDtXpyoF0vhIZWHLej7SThTRM/https/loritta.website/assets/img/actions/kiss/female_x_female/gif_348.gif',
'https://images-ext-2.discordapp.net/external/GK48tR5GCb4qFiv_6BvcM-iddrdEZ0edoo8FLFnRy5g/https/loritta.website/assets/img/actions/kiss/both/gif_285.gif',
'https://images-ext-1.discordapp.net/external/Q7ksjEKeMUiSqUYLWlfGFPfdo_jjnltRrmUrHiPOEHE/https/loritta.website/assets/img/actions/kiss/female_x_male/gif_389.gif',
'https://images-ext-2.discordapp.net/external/Rsg3zP8cZgj0INAAwg-rHiEDJPu4mBFCU32DbtDuT5k/https/loritta.website/assets/img/actions/kiss/male_x_female/gif_296.gif',
'https://images-ext-2.discordapp.net/external/tP7MqFi2NOayhp44-ejY9-hxMUbYOQkUi4-b2wNmWCs/https/loritta.website/assets/img/actions/kiss/male_x_female/gif_290.gif?format=png',
'https://images-ext-1.discordapp.net/external/sHDT0l9qsf3jdqNbIMwIqCNTfr710QA9DGDw8Kcohvo/https/loritta.website/assets/img/actions/kiss/female_x_female/gif_341.gif',
'https://images-ext-1.discordapp.net/external/b790vBk2cSgfnovO2TytBJI6_aJmP9HS0YoQ4zMvyk4/https/loritta.website/assets/img/actions/kiss/female_x_male/gif_380.gif',
'https://images-ext-2.discordapp.net/external/i1rKa0jZdn6c9ZhbWUYTD2xo5ve6UapuaR2IaUx6esg/https/loritta.website/assets/img/actions/kiss/male_x_female/gif_288.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para beijar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});

  const embed = new Discord.MessageEmbed()
        .setTitle('Kiss')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de beijar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Ainda estou em desenvolvimento')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
      