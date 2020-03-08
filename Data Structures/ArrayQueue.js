class Queue {
  constructor() {
    this.arr = [];
    this.lenght = 0;
  }
  enqueue(value) {
    this.arr.push(value);
    this.lenght++;
  }
  dequeue() {
    this.arr.shift();
    this.lenght--;
  }
  print() {
    this.arr.forEach(element => {
      console.log(element);
    });
  }
}

let q = new Queue();
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);
q.dequeue();
q.dequeue();
q.print();
