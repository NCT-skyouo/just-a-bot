module.exports = class User {
  constructor(client, data) {
    this.discriminator = data.identify_num
    this.username = data.username
    this.avatarURL = () => data.avatar
    this.tag = `${data.username}#${data.identify_num}`
  }
}