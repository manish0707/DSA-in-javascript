class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value == current.value) return undefined;
        if (value < current.value) {
          if (current.left == null) {
            current.left = newNode;
            return this;
          } else {
            current.value > value;
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right == null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    if (this.root == null) return undefined;
    else {
      let current = this.root;
      while (true) {
        if (value == current.value) return true;
        else {
          if (value < current.value) {
            if (current.left == null) return false;
            else {
              current = current.left;
            }
          } else {
            if (current.right == null) return false;
            else {
              current = current.right;
            }
          }
        }
      }
    }
  }
  DFSpreorder() {
    let current = this.root;
    let data = [];
    function traversal(node) {
      data.push(node.value);
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
    }
    traversal(current);
    return data;
  }
  DFSpostorder() {
    let current = this.root;
    let data = [];
    function traversal(node) {
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
      data.push(node.value);
    }
    traversal(current);
    return data;
  }
  DFSinorder() {
    let current = this.root;
    let data = [];
    function traversal(node) {
      if (node.left) traversal(node.left);
      data.push(node.value);
      if (node.right) traversal(node.right);
    }
    traversal(current);
    return data;
  }
}

let tree = new BST();

tree.insert(20);
tree.insert(50);
tree.insert(10);
tree.insert(5);
console.log(tree.DFSinorder());
