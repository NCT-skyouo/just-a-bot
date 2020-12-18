const HypixelAPI = require('hypixel-api')

const HypixelAPIClient = new HypixelAPI(process.env.hypixel_key)

var { Client, KMarkDown, KMarkDownBuilder } = require('./just-a-sdk/index')

var bot = new Client({ port: 3000 })

bot.on('message', async (msg) => {
  const prefix = '.'
  if (!msg.content.startsWith(prefix)) return
  const cmd = msg.content.slice(prefix.length).split(/ +/g)[0]
  const args = msg.content.split(/ +/g).slice(1)
  if (cmd === "hello") {
    msg.channel.send("你好!").then(console.log)
  } else if (cmd === "mdtest") {
    var MD = new KMarkDown()
    MD.setContent(args.join(" "))
    msg.channel.send(MD).catch(console.log)
  } else if (cmd === "hypixel") {
    console.log(args)
    switch (args[0]) {
      case "leaderboard":
      case "lb":
        var lbdata = await HypixelAPIClient.getLeaderboards()
        var MD = new KMarkDown()
        console.log(lbdata)
        MD.setContent("```json\n" + JSON.stringify(lbdata.leaderboards.ARENA[0], null, 2) + "```")
        msg.channel.send(MD).catch(console.log)
        break;
      default:
        msg.channel.send("[正在開發]");
        break
    }
  } else if (cmd === "kmdtest") {
    msg.channel.send(
      new KMarkDownBuilder()
      .bold("早安!")
      .next()
      .boldItalic("uwu")
      .toKMarkDown()
    )
  }
})

bot.login(process.env.token, process.env.verify_token)