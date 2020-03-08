class Stack {
  constructor() {
    this.arr = [];
    this.length = 0;
  }
  push(value) {
    this.arr.push(value);
    this.length++;
  }
  pop() {
    this.arr.pop();
    this.length--;
  }
  print() {
    this.arr.forEach(element => {
      console.log(element);
    });
  }
}

let stack = new Stack();
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.pop();
stack.print();
