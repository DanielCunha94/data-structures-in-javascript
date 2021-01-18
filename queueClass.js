class Queue {
  constructor(){
    this.collection=[]
  }

  // push an element to the tail
  enqueue(e){
    this.collection.unshift(e)
  }

  // remove and return the front element
  dequeue(){
    return this.collection.pop()
  }

  // that lets us see the front element
  front(){
    return this.collection[this.collection.length-1]
  }

  print () {
    console.log(this.collection);
  };

  size(){
    return this.collection.length
  }

  isEmpty(){
    return this.collection.length === 0 ? true : false;
  }
}
