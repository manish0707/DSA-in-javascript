class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //Adds a node in the end of the queue
  enqueue(value) {
    let newNode = new Node(value);
    if (this.first == null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }
  //Removed the element from the start of the queue
  dequeue() {
    if (this.size == 0) return undefined;
    else if (this.first == this.last) {
      this.first = null;
      this.last = null;
    } else {
      let removed = this.first;
      this.first = removed.next;
    }
    this.size--;
  }
}

let q = new Queue();
q.enqueue(50);
q.enqueue(100);
q.enqueue(150);
q.enqueue(200);
q.enqueue(250);
q.dequeue();
q.dequeue();
q.dequeue();
console.log(q);
