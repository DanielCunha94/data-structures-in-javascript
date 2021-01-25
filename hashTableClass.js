var hash = (string) => {
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};

class HashTable {
  constructor() {
    this.collection = {};
  }

  add(key, value) {
    let hashed = hash(key);
    if (!this.collection.hasOwnProperty(hashed)) {
      this.collection[hashed] = {};
    }
    this.collection[hashed][key] = value;
  }

  remove(key) {
    var hashedObj = this.collection[hash(key)];
    if (hashedObj.hasOwnProperty(key)) {
      delete hashedObj[key];
    }
    if (!Object.keys(hashedObj).length) {
      delete this.collection[hash(key)];
    }
  }

  lookup(key) {
    var theHash = hash(key);
    if (this.collection.hasOwnProperty(theHash)) {
      return this.collection[theHash][key];
    }
    return null;
  }
}
