const express = require("express")
const app = express()
const Message = require('./objects/Message')
var seemed = []

class Handler {

  constructor(client) {

    app.use(express.json())

    app.post('/', (req, res) => {
      client.emit('raw', req.body)
      if (req.body.d.verify_token !== client.verify_token) {
        client.emit('bad_request', req.body)
        return res.status(401).send(
          JSON.stringify({ 'error': 'Bad verifytoken.' })
        )
      }
      if (req.body.sn !== undefined) {
        if (seemed.includes(req.body.sn)) return
        else seemed.push(req.body.sn)
      }
      switch (req.body.d.channel_type) {
        case "WEBHOOK_CHALLENGE":

            client.emit("webhookLogin")
            client.emit("login")

            return res.status(200).send(JSON.stringify({ "challenge": req.body.d.challenge }))
          break
        case "GROUP":
          client.emit('message', new Message(client, req.body))
          return res.status(200)
        default:
          return res.status(200).send("ok") 
      }
    })
  }

  register(port) {
    return app.listen(port)
  }
}

module.exports = Handler;