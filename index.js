var Client = require('./just-a-sdk/index')

var bot = new Client({ port: 3000 })

bot.on('message', (msg) => {
  const prefix = '.'
  if (!msg.content.startsWith(prefix)) return
  const cmd = msg.content.slice(prefix.length).split(/ +/g)[0]
  const args = msg.content.split(/ +/g).slice(1)
  console.log(cmd)
  if (cmd === "hello") {
    msg.channel.send("你好!").then(console.log)
  }
})

bot.login(process.env.token, process.env.verify_token)