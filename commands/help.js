const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setTitle(`<a:Engrenagem:821523104579715173> Central de comandos <a:Engrenagem:821523104579715173>`)
    .setDescription(`Quer me adicionar? [Me convide!](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2147483647)

    Entre no meu servidor de suporte! [Clique aqui](https://discord.gg/qMJFC5VSM8)
    
    
    <a:dwn_Simbolos:808744327958364240>  <a:dwn_setablue:801637346386640899> Moderação
    
    
    <a:dwn_Cristal:801574343213187113>  <a:dwn_setablue:801637346386640899> Diversão
    
    
    <a:dwn_Teclando:801573255009271858> <a:dwn_setablue:801637346386640899> Informação
    
    
    <a:dwn_pinguDance:801571921724440576>  <a:dwn_setablue:801637346386640899>  Utilidades
    
    
    <a:Seta_animada:829505028628021250>  <a:dwn_setablue:801637346386640899>  Voltar
    `)
    .setColor("RANDOM")
    
    message.channel.send(embed).then(msg => {
      msg.react("808744327958364240")
      msg.react("801574343213187113")
      msg.react("801573255009271858")
      msg.react("801571921724440576")
      msg.react("829505028628021250")

      let filtro1 = (r, u) => r.emoji.name === 'dwn_Simbolos' && u.id === message.author.id;
      let filtro2 = (r, u) => r.emoji.name === 'dwn_Cristal' && u.id === message.author.id;
      let filtro3 = (r, u) => r.emoji.name === 'dwn_Teclando' && u.id === message.author.id;
      let filtro4 = (r, u) => r.emoji.name === 'dwn_pinguDance' && u.id === message.author.id;
      let filtro5 = (r, u) => r.emoji.name === 'Seta_animada' && u.id === message.author.id;

      let coletor = msg.createReactionCollector(filtro1);
      let coletor2 = msg.createReactionCollector(filtro2);
      let coletor3 = msg.createReactionCollector(filtro3);
      let coletor4 = msg.createReactionCollector(filtro4);
      let coletor5 = msg.createReactionCollector(filtro5);

      coletor.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`<a:Engrenagem:821523104579715173> Comandos de moderação <a:Engrenagem:821523104579715173>`)
        .setDescription(`m!ban
        Para banir algum usuário!
        
        m!kick
        Para expulsar algum usuário!
        
        m!clear
        Para apagar mensagens!
        
        m!lock
        Para bloquar algum canal!
        
        m!unlock
        Para desbloquear algum canal que esteja bloqueado!
        
        m!nickname
        Para mudar o apelido de um usuário no servidor!
        
        m!resetar
        Para resetar o apelido dado a algum usuário no servidor!
        
        m!sorteio
        Para sortear algo no servidor!`)
        .setColor("RANDOM")
        
        msg.edit(embed)
      })

      coletor2.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos de diversão`)
        .setDescription(`m!kiss
      Para beijar um usuário!

      m!atacar
      Para atacar um usuário!

      m!tapa
      Para dar um tapa em um usuário!

      m!coinflip
      Escolha entre cara ou coroa e tente a sorte!
      
      m!say
      Para eu falar algo!
      
      m!abraço
      Para abraçar um usuário!
      
      m!cafuné
      Para fazer cafuné em um usuário!
      
      m!daily
      Colete seu prêmio diário!
      
      m!trabalhar
      Trabalhe a cada 30 minutos para receber dinheiro!
      
      m!pay
      Para doar dinheiro a um membro!
      
      m!depositar
      Para depositar seu dinheiro ao banco!
      
      m!sacar
      Para sacar seu dinheiro do banco!`)
        .setColor("RANDOM")

        msg.edit(embed)
      })

      coletor3.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`<a:Engrenagem:821523104579715173> Comandos de informação <a:Engrenagem:821523104579715173>`)
        .setDescription(`m!serverinfo
        Para ver as informações do servidor que foi utilizado o comando!
        
        m!userinfo
        Para ver as informações do usuário mencionado!
        
        m!botinfo
        Para ver minhas informações!`)
        .setColor("RANDOM")
        
        msg.edit(embed)
      })

      coletor4.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`<a:Engrenagem:821523104579715173> Comandos de utililidades <a:Engrenagem:821523104579715173>`)
        .setDescription(`m!idéia(Apenas no servidor privado do Detetive Pikachu#4680)
        Para dar uma idéia de comando para mim
        
        m!avatar
        Para ver seu avatar!
        
        m!clima
        Para ver o clima das cidades!
        
        m!ping
        Para ver o ping do bot e seu ping!`)
        .setColor("RANDOM")
        
        msg.edit(embed)
      })

     coletor5.on("collect", c => {
      let embed = new Discord.MessageEmbed()
      .setTitle(`<a:Engrenagem:821523104579715173> Comandos de utililidades <a:Engrenagem:821523104579715173>`)
      .setDescription(`Quer me adicionar? [Me convide!](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2147483647)

      Entre no meu servidor de suporte! [Clique aqui](https://discord.gg/qMJFC5VSM8)
    
    
      <a:dwn_Simbolos:808744327958364240>  <a:dwn_setablue:801637346386640899> Moderação
      
      
      <a:dwn_Cristal:801574343213187113>  <a:dwn_setablue:801637346386640899> Diversão
      
      
      <a:dwn_Teclando:801573255009271858> <a:dwn_setablue:801637346386640899> Informação
      
      
      <a:dwn_pinguDance:801571921724440576>  <a:dwn_setablue:801637346386640899>  Utilidades
      
      
      <a:Seta_animada:829505028628021250>  <a:dwn_setablue:801637346386640899> Voltar
      `)
      .setColor("RANDOM")
        
      msg.edit(embed)
    })
    })
  }