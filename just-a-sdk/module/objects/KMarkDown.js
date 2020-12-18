// const KMarkDownBuilder = require('./KMarkDownBuilder')

module.exports = class KMarkDown {
  constructor(object) {
    if (object.content) this.content = object.content
  }

  getContent() {
    return this.content
  }

  setContent(kmd) {
    this.content = kmd
  }
}