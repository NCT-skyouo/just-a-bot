const Channel = require('./Channel')

module.exports = class GuildChannel extends Channel {
  constructor(client, data) {
    super(client, data)
  }

  send(content, options={}) {
    return super.send(content, options);
  }

  _assignGuild(guild) {
    this.guild = guild
  }
}