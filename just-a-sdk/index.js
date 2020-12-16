const EventEmiiter = require("events")
const wbHd = require('./module/webhookHandler')

module.exports = class Client extends EventEmiiter {
  constructor(options={}) {
    super()
    this.token = new String()
    this.verify_token = new String()
    this.api = 'https://www.kaiheila.cn/api/v3'
    this.options = options
    this.NotImplemented = require('./module/errors/NotImplemented')
  }

  login(token, verify_token) {
    this.token = token
    this.verify_token = verify_token
    this._wbHD = new wbHd(this)
    return this._wbHD.register(this.options.port)
  }
}