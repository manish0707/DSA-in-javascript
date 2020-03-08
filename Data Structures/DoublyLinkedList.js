class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
    this.pre = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.pre = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }
  pop() {
    if (this.length == 0) return undefined;
    let popped = this.tail;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.pre;
      this.tail.next = null;
      popped.pre = null;
    }
    this.length--;
    return popped;
  }

  shift() {
    if (this.head == null) return undefined;
    else if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      let poped = this.head;
      this.head = poped.next;
      this.head.pre = null;
      poped.next = null;
      this.length--;
    }
  }
  unshift(value) {
    let newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.pre = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }
  get(index) {
    let middle = Math.floor(list.length / 2);
    if (index < 0 || index >= this.length) return undefined;
    else if (index == 0) return this.head;
    else if (index == this.length - 1) return this.tail;
    else {
      if (index <= middle) {
        let current = this.head;
        let counter = -1;
        for (let i = 0; i <= middle; i++) {
          counter++;
          if (index == counter) return current;
          current = current.next;
        }
      } else {
        let current = this.tail;
        let counter = this.length;
        for (let i = this.length; i > middle; i--) {
          counter--;
          if (counter == index) return current;
          current = current.pre;
        }
      }
    }
  }
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.data = value;
      return true;
    } else return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return undefined;
    else if (index == 0) this.unshift(value);
    else if (index == this.length) this.push(value);
    else {
      let newNode = new Node(value);
      let temp = this.get(index);
      newNode.pre = temp.pre;
      newNode.next = temp.pre.next;
      temp.pre = newNode;
      temp.pre.next = newNode;
    }
  }
  remove(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    else if (index == 0) this.shift();
    else if (index == this.length - 1) this.pop();
    else {
      let removed = this.get(index);
      removed.pre.next = removed.next;
      removed.next.pre = removed.pre;
      removed.next = null;
      removed.pre = null;
      this.length--;
      return removed;
    }
  }
  print() {
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let list = new DoublyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
list.push(60);
list.push(70);
list.push(80);
list.push(90);
list.set(0, 'Zero');
list.set(1, 'First');
list.set(2, 'Second');
list.remove(5);
list.print();
