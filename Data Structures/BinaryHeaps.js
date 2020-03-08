class BinaryHeap {
  constructor() {
    this.date = [];
  }
  insert(value) {
    this.date.push(value);
    this.bubbleup();
  }
}
