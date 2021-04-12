const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Recebi ping as ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos
const db = require('quick.db');

client.on("guildMemberAdd", async (member) => {

  let guild = client.guilds.cache.get("807229150690672671");
  let channel = client.channels.cache.get("807236253896409108");
 
  if (guild != member.guild) {
    return console.log('Sai daki saco pela! Você não é do meu servidor.');
  } else {

    let embed = new Discord.MessageEmbed()
    .setColor("#ee003d")
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTitle('Novo Membro no servidor!')
    .setImage('https://images-ext-2.discordapp.net/external/ZqfrV0tNWEBe7NnoBju021cizmnOO4hxfStHJfwNXjw/https/images-ext-1.discordapp.net/external/bMuZrk3ifl0UrtrFTRemwUzgBNA4Xd4M5XMN3qD-nDY/https/rockntech.com.br/wp-content/uploads/2014/12/gifs-de-esteiras.gif')
    .setDescription(`Bem vindo ao servidor ${guild.name} ${member.user}! Agora temos ${member.guild.memberCount} membros no servidor!
    
    Leia nossas <#814864239436496937> para ficar atento e não ser banido!`)
  .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024}))
  .setFooter('ID do usuário: ' + member.user.id)
  .setTimestamp();

  await channel.send(embed)
 }

})

client.on("guildMemberRemove", async (member) => {

  let guild = client.guilds.cache.get("807229150690672671");
  let channel = client.channels.cache.get("807236352000524308");
  
  if (guild != member.guild) {
    return console.log('Sai daki saco pela! Você não saiu do meu servidor!');
  } else {

    let embed = new Discord.MessageEmbed()
    .setColor("#ee003d")
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTitle('Perdemos 1 membro!')
    .setImage('https://images-ext-1.discordapp.net/external/TWrlcq_uvu6IQPFNpODUgACp9DxZeXMGvxTnIx4SfIg/https/media3.giphy.com/media/EQ6iPqus1nESMTTQEV/giphy.gif')
    .setDescription(`Infelizmente perdemos um membro em nosso servidor! Ficamos com ${member.guild.memberCount} membros!`)
  .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024}))
  .setFooter('ID do usuário: ' + member.user.id)
  .setTimestamp();

  await channel.send(embed)
 }

})

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
    let embed = new Discord.MessageEmbed()
    .setColor('#ff0053')

    .setThumbnail(client.user.avatarURL())

    .setAuthor(client.user.username, client.user.avatarURL())

    .setDescription(`<a:errado:830046889315532801> | O comando **\`${command}\`**  não existe, digite **\`m!help\`** para saber meus **comandos!**`)
   
    if (message.content === `<@!${client.user.id}>` || message.content === `<@${client.user.id}>`)

    return message.channel.send(embed);

    message.channel.send(embed).then(msg => {
    msg.delete({ timeout: 30000 })
    })
    
  }
});

client.login(process.env.TOKEN);

client.on("message", message => {
if (message.author.bot) return;
if (message.channel.type == 'dm')
return
if(message.content == '<@804479792585375744>' || message.content == '<@!804479792585375744>') {
const embed = new Discord.MessageEmbed()
.setColor(`WHITE`)
.setDescription(`Olá ${message.author} meu nome é Melix, Um bot para divertir e auxiliar seu servidor, Melhorando ele com meus comandos!

Meu prefixo:
\`${config.prefix}\`

Servidor de suporte: [Clique aqui para entrar](https://discord.gg/EXSgnwEyUP)
`)

return message.channel.send(embed)
}
});


client.on("ready", () => {
  let activities = [
      `Utilize ${config.prefix}help para obter ajuda`,
      `${client.channels.cache.size} canais!`,
      `Sou apenas um bot em busca de divertir você!`,
      `Será que um dia serei verificado 🤔`,
      `Se você quer um comando em mim mande para meu dono Detetive Pikachu#4680`,
      `Preciso de sua ajuda para crescer, se gostou de mim me adicione eu seu servidor! https://discord.com/oauth2/authorize?client_id=804479792585375744&permissions=8&scope=bot`,
      `Minha comida preferida é batata frita 😋😋 Ainda melhor quando tem aquela coquinha 😎`,
      `${client.guilds.cache.size} Servidores!`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }), 200 * 60); 
  client.user
      .setStatus("Um bot para divertir você!")
      .catch(console.error);
console.log("Estou Online!")
});

client.on("ready", () => {
  let activities = [
      `Em busca de divertir pessoas!`,
      `Me adicione em seu servidor! Isso ajuda demais!`,
      `Se tiver dúvidas mande para meu criador Detetive Pikachu#4680`,
      `Tô comendo ticolé!`,
      `Use ${config.prefix}help para ter informações dos meus comandos!`,
      `Uma pizza agora caíria bem não acha?`,
      `Agora eu tenho comandos de economia!`,
      `Estou em ${client.guilds.cache.size} Servidores!`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "PLAYING"
      }), 200 * 60); 
  client.user
      .setStatus("Um bot para divertir você!")
      .catch(console.error);
console.log("Estou Online!")
});

client.on("ready", bot => {
    console.log('Bot is Online!')
}); 