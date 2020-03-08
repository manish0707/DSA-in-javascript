//Class to create each node
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

// Class to create a list
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //   adds value to  the end of the list
  push(value) {
    let newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  //   Removes value from the end of the list
  pop() {
    if (this.head == null) return undefined;
    else {
      let current = this.head;
      let counter = 0;
      while (current != null) {
        counter++;
        if (counter == this.length - 1) {
          current.next = null;
          this.tail = current;
          this.length--;
        }
        current = current.next;
      }
    }
  }
  //   Removes the first value from the list
  shift() {
    if (this.length == 0) return undefined;
    else {
      let temp = this.head;
      this.head = temp.next;
      this.length--;
    }
  }
  //   Adds a value to the start of the list
  unshift(value) {
    if (this.length == 0) this.push(value);
    else {
      let newNode = new Node(value);
      let temp = this.head;
      newNode.next = temp;
      this.head = newNode;
      this.length++;
    }
  }
  //   Gives the value at the given index
  get(index) {
    if (index < 0 || index > this.length - 1) return null;
    else {
      let current = this.head;
      let counter = -1;
      while (current != null) {
        counter++;
        if (counter == index) {
          return current;
        }
        current = current.next;
      }
    }
  }
  set(index, value) {
    if (index < 0 || index > this.length) return undefined;
    else {
      let temp = this.get(index);
      temp.data = value;
    }
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return undefined;
    else if (index == 0) this.unshift(value);
    else if (index == this.length) this.push(value);
    else {
      let newNode = new Node(value);
      let temp = this.get(index - 1);
      newNode.next = temp.next;
      temp.next = newNode;
      this.length++;
    }
  }
  remove(index) {
    if (index == 0) this.shift();
    else if (index == this.length - 1) this.pop();
    else {
      let temp = this.get(index - 1);
      let temp2 = temp.next.next;
      temp.next = temp2;
      this.length--;
    }
  }

  print() {
    let current = this.head;
    if (current == null) {
      console.log('List is empty');
    } else {
      while (current != null) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
}

let list = new SinglyLinkedList();
list.push(50);
list.push(60);
list.push(70);
list.push(80);
list.push(90);
list.push(100);
list.insert(6, 'Third');
list.insert(7, 'Seventh');
list.insert(8, 'Eight');
list.remove(2);
list.remove(3);
list.insert(2, 'Second');
list.insert(3, 'Third');
list.push('Last');
list.print();
console.log(list.length);
