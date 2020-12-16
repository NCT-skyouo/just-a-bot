const User = require('./User')

module.exports = class GuildMember extends User {
  constructor(client, data) {
    super(client, data)
    this.displayName = data.nickname
    this.roles = data.roles
  }

  displayAvatarURL() {
    return super.avatarURL()
  }
}