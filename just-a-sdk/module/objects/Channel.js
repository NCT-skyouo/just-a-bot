const fetch = require('node-fetch')

const KMarkDown = require('./KMarkDown')

module.exports = class Channel {
  constructor(client, data) {
    this.client = client
    this.id = data.id
    this.name = data.channel_name
  }

  send(content, options={}) {
    return new Promise(async (res, rej) => {
      try {
        var body = {
          object_name: content instanceof KMarkDown ? 9 : options.kmarkdown ? 9 : 1,
          channel_id: this.id,
          content: content instanceof KMarkDown ? content.content : options.kmarkdown ? content.content : content
        }
        var response = await fetch(this.client.api + "/channel/message", {
          method: 'post',
          body:    JSON.stringify(body),
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bot ${this.client.token}` 
          },
        }).catch(e => { throw e })
        console.log(response.headers.forEach(function(val, key) { console.log(key + ' -> ' + val); }))
        var result = await response.json().catch(e => { throw e })
        res(result)
      } catch (e) {
        rej(e)
      }
    })
  }
}