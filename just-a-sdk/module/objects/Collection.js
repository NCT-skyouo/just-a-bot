module.exports = class Collection extends Map {
  constructor(iterable) {
    super(iterable)
    this.object = new Map(iterable)
  }

  array() {
    return Array.from(this.object.values())
  }

  clone() {
    return new Collection(Object.assign(new Map(), this.object));
  }

  difference(other) {
    
  }
}