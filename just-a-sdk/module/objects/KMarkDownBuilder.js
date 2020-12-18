const KMarkDown = require('./KMarkDown')

module.exports = class KMarkDownBuilder {

  constructor() {
    this.content = new String()
  }

  bold(content) {
    this.content += "**" + content + "**"
    return this
  }

  italic(content) {
    this.content += "*" + content + "*"
    return this
  }

  underline(content) {
    this.content += "(ins)" + content + "(ins)"
    return this
  }

  spoiler(content) {
    this.content += "(spl)" + content + "(spl)"
    return this
  }

  boldItalic(content) {
    this.content += "***" + content + "***"
    return this
  }

  hyperlink(link, text, hover) {
    this.content += hover ? `[${text}](${link} "${hover}")` : `[${text}](${link})`
    return this
  }

  thematicBreak() {
    this.content += "---"
    return this
  }

  blockquote(content) {
    this.content += "> " + content
    return this
  }

  emoji(emo) {
    this.content += ":" + emo + ":"
    return this
  }

  mentionChannel(id) {
    this.content += "(chn)" + id + "(chn)"
    return this
  }

  mentionAll() {
    this.content += "(met)all(met)"
    return this
  }

  mentionHere() {
    this.content += "(met)here(met)"
    return this
  }

  mentionUser(id) {
    this.content += "(met)" + id + "(met)"
    return this
  }

  mentionRole(id) {
    this.content += "(rol)" + id + "(rol)"
    return this
  }

  inlineCode(codes) {
    this.content += "`" + codes + "`"
    return this
  }

  codeBlock(lang, codes) {
    this.content += "```" + lang + "\n" + codes + "```"
    return this
  }

  next(times=1) {
    this.content += "\n".repeat(times)
    return this
  }

  tab(times=1) {
    this.content += "\t".repeat(times)
    return this
  }

  toKMD() {
    var kmdobj = new KMarkDown(this)
    return kmdobj
  }

  toKMarkDown() {
    return this.toKMD()
  }
}