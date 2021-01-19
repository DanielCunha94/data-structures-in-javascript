/* A Priority Queue is a special type of Queue in which items may have additional information which specifies their priority. This could be simply represented with an integer. Item priority will override placement order in determining the sequence items are dequeued. If an item with a higher priority is enqueued after items with lower priority, the higher priority item will be dequeued before all the others.*/

//[value , priority value] -- high priority value:1

class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  // push an element to the tail
  enqueue(e) {
    if (
      Array.isArray(e) &&
      typeof e[1] === "number" &&
      e.length === 2 &&
      e[1] > 0
    ) {
      if (this.collection.length === 0) {
        this.collection.push(e);
      } else {
        let priority = e[1];
        let priorityIndex = this.collection.findIndex((x) => x[1] > priority);
        if (priorityIndex !== -1) {
          this.collection.splice(priorityIndex, 0, e);
        } else {
          this.collection.push(e);
        }
      }
    }
  }

  // remove and return the front element
  dequeue() {
    return this.collection.shift()[0];
  }

  // that lets us see the front element
  front() {
    return this.collection[0][0];
  }

  print() {
    console.log(this.collection);
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return this.collection.length === 0 ? true : false;
  }
}
