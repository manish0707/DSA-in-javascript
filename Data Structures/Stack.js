class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.first == null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
  }
  pop() {
    if (this.first == null) return undefined;
    let temp = this.first;
    if (this.first == this.last) {
      this.last = null;
      this.first = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let stack = new Stack();

stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.pop();

console.log(stack);
