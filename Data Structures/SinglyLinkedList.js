class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.head == null) {
      return undefined;
    } else {
      let current = this.head;
      let pre = current;
      while (current.next != null) {
        pre = current;
        current = current.next;
      }
      this.tail = pre;
      this.tail.next = null;
      this.length--;
      return current;
    }
  }

  shift() {
    if (this.head == null) return undefined;
    let temp = this.head;
    this.head = temp.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return newNode;
  }

  get(location) {
    if (location > this.length || location < 0) return null;
    let temp = this.head;
    let counter = -1;
    while (temp != null) {
      counter++;
      if (counter == location) {
        return temp;
      }
      temp = temp.next;
    }
  }
  set(location, value) {
    let foundNode = this.get(location);
    if (foundNode) {
      foundNode.data = value;
      return true;
    }
    return false;
  }
  insert(position, value) {
    if (this.length < position || position < 0) return null;
    else if (position == 0) this.unshift(value);
    else if (this.length == position) this.push(value);
    else {
      let temp = this.get(position - 1);
      let newNode = new Node(value);
      newNode.next = temp.next;
      temp.next = newNode;
      this.length++;
    }
  }

  remove(location) {
    if (location >= this.length || location < 0) return null;
    else if (location == 0) return this.shift();
    else if (location == this.length - 1) return this.pop();
    else {
      let pre = this.get(location - 1);
      let removed = pre.next;
      pre.next = removed.next;
      this.length--;
      return removed;
    }
  }

  print() {
    let current = this.head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let list = new SinglyLinkedList();

list.push('Manish');
list.push('Kumar');
list.push('Sharma');
list.push(500);
list.push('Another Value');
list.push(1000);
list.push(2000);
list.remove(3);
list.remove();
list.print();
console.log('The length of the list is ', list.length);
// the best place to
