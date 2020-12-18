const User = require('./User')
const GuildMember = require('./GuildMember')
const GuildChannel = require('./GuildChannel')

module.exports = class Message {
  constructor(client, raw_data) {
    this.client = client
    this.id = raw_data.d.msg_id
    this.content = raw_data.d.content
    this.createdAt = new Date(raw_data.d.msg_timestamp * 1000)
    this.createdTimestamp = raw_data.d.msg_timestamp
    this.author = new User(client, raw_data.d.extra.author)
    if (raw_data.d.channel_type === "GROUP") {
      this.channel = new GuildChannel(client, { id: raw_data.d.target_id, channel_name: raw_data.d.extra.channel_name })
      this.member = new GuildMember(client, raw_data.d.extra.author)
    } else {
      this.channel = new Channel(client, { id: raw_data.d.target_id, channel_name: raw_data.d.extra.channel_name })
    }
  }
}