const Discord = require('discord.js');
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");

module.exports = {
  name: "help",
   aliases: ["hlp"],
  run: async (client, message, args ) => {
      //--------------------------------------S T A R T---------------------------------------

    //--------------------EMBEDS------------------------

    const embed = new Discord.MessageEmbed()
    .setAuthor("SadSenpai")

    .setDescription(" Hi this all the commands listed and available. \n <a:YellowArrow:881126903652696074> Click the buttons below to click the help menu! \n \n `Admin` | `Automod` | `Economy` | `Fun` | `Games` | `Image` | `Moderation` | `Utility`")
    .setImage("https://i.ibb.co/fH4w8dz/standard-1.gif")
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("RANDOM");

    const embed1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle('<a:SA_green_check:881469557657710592> Admin, Moderation/automod & Economy <a:SA_green_check:881469557657710592>')
        .addField("ㅤ⠀⠀⠀ \n <a:SA_green_check:881469557657710592> **Admin** | <a:SA_green_check:881469557657710592> **ENABLED**",
          "`nuke` `react` `snipe` \n\n<a:SA_green_check:881469557657710592> **Moderation** | <a:yes:883112081614852156> **ENABLED** \n `addrole` `ban` `purge` `hackban` `kick` `lock` `mute` `removerole` `slowmode` `timedlockdown` `unlock` `unmute`\n\n<a:SA_green_check:881469557657710592>**AutoModeration** | <a:SA_green_check:881469557657710592> **ENABLED** \n `anti-alt` `autorole` `role-all`"
        )
      .setImage("https://i.ibb.co/1mndnvN/standard-2.gif")
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(message.client.user.username, message.client.user.avatarURL())

    const embed2 = new Discord.MessageEmbed()
    .setColor("RANDOM")
     .setTitle('<a:version:883111864568021072> Info & help <a:version:883111864568021072>')
      .addField("⠀⠀⠀ \n <a:SA_green_check:881469557657710592> **Info** | <a:SA_green_check:881469557657710592> **ENABLED**",
        "`badges` `botinfo` `roleinfo` `servericon` `serverinfo` `userinfo` `invite` `uptime` `avatar` \n\n<a:SA_green_check:881469557657710592> **Help** | <a:SA_green_check:881469557657710592> **ENABLED**\n `bug` `help` `invite`\n\n<a:SA_green_check:881469557657710592>**ECONOMY** | <a:SA_green_check:881469557657710592> **ENABLED** \n  `balance` `buy` `daily` `deposit` `give` `inventory` `leaderboard` `rob` `shop` `use` `weekly` `withdraw` `work`"
        )
      .setImage("https://i.ibb.co/1mndnvN/standard-2.gif")  
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(message.client.user.username, message.client.user.avatarURL())

    const embed3 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle('<a:SA_green_check:881469557657710592> Fun & Images <a:SA_green_check:881469557657710592>')
      .addField("ㅤ⠀⠀⠀ \n <:fun:883112388608544778> **Fun** | <a:SA_green_check:881469557657710592> **ENABLED**","`ascii` `coinflip` `drake` `emojify` `joke` `meme` `rps` `slap` `trumptweet` `idp`\n\n <a:SA_green_check:881469557657710592> **Image** | <a:SA_green_check:881469557657710592> **ENABLED** \n`achievement` `captcha` `hug` `gay` `meeting` `rip` `tweet` `300yr`",)
      .setImage("https://i.ibb.co/1mndnvN/standard-2.gif")
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(message.client.user.username, message.client.user.avatarURL())

    const embed4 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`<a:SA_green_check:881469557657710592> Ticket &Owner <a:SA_green_check:881469557657710592>`)
      .addField("ㅤ⠀⠀⠀ \n <a:animated_cross:881469660250394675>  **Ticket** | <a:animated_cross:881469660250394675>  **DISABLED (NEW TICKET COMMING)**",
        "`add` `close` `delete` `remove` `open` `rename` `setup`\n\n<a:SA_green_check:881469557657710592> **Owner** | <a:SA_green_check:881469557657710592> **ENABLED** \n`eval` `leaveserver` `serverlist` `status`\n\n<a:SA_green_check:881469557657710592>**MUSIC** | <a:SA_green_check:881469557657710592> **ENABLED** \n `play` `stop` `skip` `skipto` `pause` `shuffle` `prunning` `loop` `uptime` `ping` `playlist` `move` `queue` `remove` `volume <1-100>`\n\n<a:SA_green_check:881469557657710592>**UTILITY** | <a:SA_green_check:881469557657710592> **ENABLED** \n`vote` `advice` `findemoji` `members or membercount` `announce`\n\n<a:SA_green_check:881469557657710592>**GAMES** | <a:SA_green_check:881469557657710592> **ENABLED** \n`8ball`" //bro here 
        )
      .setImage("https://i.ibb.co/1mndnvN/standard-2.gif")  
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(message.client.user.username, message.client.user.avatarURL())

    //--------------------EMBEDS------------------------

    //--------------------Buttons------------------------

    let button1 = new MessageButton()
    .setLabel(`Admin , Auto/Moderation`)
    .setID(`help1`)
    .setEmoji(`881131453767884870`)
    .setStyle("green");

    let button2 = new MessageButton()
    .setLabel(`Info, Help & Economy`)
    .setID(`help2`)
    .setEmoji(`883112023293038593`)
    .setStyle("green");

    let button3 = new MessageButton()
    .setLabel(`Fun & Images`)
    .setID(`help3`)
    .setEmoji(`908999997461237770`)
    .setStyle("green");

    let button4 = new MessageButton()
    .setLabel(`Ticket , Owner, UTILITY, Games & Music`)
    .setID(`help4`)
    .setEmoji(`881130106259648534`)
    .setStyle("green");

    let row = new MessageActionRow()
    .addComponents(button1, button2, button3, button4);

    //--------------------Buttons------------------------

    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 120000 });

    collector.on('collect', async (b) => {

        if(b.id == "help1") {

            MESSAGE.edit(embed1, row);
            await b.reply.defer()

        }

        if(b.id == "help2") {
            
            MESSAGE.edit(embed2, row);
            await b.reply.defer()

        }

        if(b.id == "help3") {
            
            MESSAGE.edit(embed3, row);
            await b.reply.defer()

        }

        if(b.id == "help4") {
            
            MESSAGE.edit(embed4, row);
            await b.reply.defer()

        }


    })

    collector.on('end', (b) => {
        MESSAGE.edit(`This help menu is expired! Type the command again to view.`)
    })

    }
  };