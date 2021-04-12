const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  let uptime = ` ${days.toFixed()}d ${hours.toFixed()}h ${minutes.toFixed()}m ${seconds.toFixed()}s`;

  let embed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setTitle("Botinfo | Melix")
  .setDescription(`**Informações**
  <:Pessoa:830061980776661032> | Nome do bot: \`Melix\`
  <:Calendario:830061954647064586> | Data da criação: \`28 de Janeiro de 2021\`
  <a:dev:771923226750222336> | Desenvolvedor: \`Detetive Pikachu#4680\`
  <:javascript:781002266604863509> | Linguagem: \`JavaScript\`
  
  **Status do bot**
  <:fhy_cpu:771927454805524530> | Servidores: \`${client.guilds.cache.size}\`
  <:Partner:817809654373416980> | Canais: \`${client.channels.cache.size}\`
  <:discord:775097980771500062> | Membros: \`${client.users.cache.size}\`
  <a:Internet:829862361962905630> | Ping: \`${client.ws.ping}\`
  <a:black_ball:830201202033164299> | Uptime: \`${uptime}\`
  <:help:830415697679089684> | Comandos: \`m!help\`
  
  **Outras**
  <:repl:829861766707806258> | \`Editor de códigos\`: [Repl.it](https://replit.com/~)
  <:CPU:829862388782071908> | \`Host do bot\`: [UptimeRobot](https://uptimerobot.com/)

  **Links**
  🦁 [Caso queria me adicionar clique aqui](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2147483647) 
  <:Youtube_icon:830104248528273419> [Canal do youtube do Meu criador](https://www.youtube.com/channel/UC66NWcbj6J13PVXCBYSrI9g)
  [Meu servidor de suporte](https://discord.gg/qMJFC5VSM8)
  [Meu site](https://sites.google.com/view/melix21022011/melix-bot)
  
  >>> Sobre o bot Melix
  **Apenas um bot divertido para auxiliar seu servidor e ajudar a configurar ele!**`)
  .setThumbnail('https://i.pinimg.com/originals/2b/cb/b2/2bcbb2ce9ddba88d6c3d368f47983513.jpg')
  .setFooter(`Author: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
  await message.channel.send(embed)
}