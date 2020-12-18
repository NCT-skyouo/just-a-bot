module.exports = class Collection {
  constructor(iterable) {
    this.object = new Map(iterable)
  }

  array() {
    return Array.from(this.object.values())
  }

  clear() {
    return this.map.clear()
  }

  clone() {
    return new Collection(Object.assign(new Map(), this.object));
  }

  difference(other) {
    var res = []
    this.map.forEach(i => {
      if (other.has(i)) return
      res.push([i, this.map.get(i)])
    })
    return new Map(res)
  }

  delete(key) {
    return this.map.delete(key)
  }

  each(fn, ...thisArg) {
    this.map.forEach.apply(this.map, Array.form([fn]).concat(thisArg))
    return this
  }

  equals(obj) {
    return this.object === obj
  }

  every(filter) {
    return this.array().every(filter)
  }

  filter(fn) {
    
  }
}