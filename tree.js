'use strict'

class Node{
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BST{
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    }
    let curr = this.root;
    while (true) {
      if (val === curr.val) return undefined;
      if (val > curr.val) {
        // check if there is a right
        if (!curr.right) {
          curr.right = newNode;
        }
        // else traverse right
        curr = curr.right;
      } else {
        if (!curr.left) {
          curr.left = newNode;
        }
        curr = curr.left;
      }
    }
  }

  find(val) {
    if (!this.root) return undefined;
    let curr = this.root, found = false;
    while (curr && !found) {
      if (val > curr.val) {
        curr = curr.right;
      } else if (val < curr.val) {
        curr = curr.left;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return curr;
  }

  contains(val) {
    if (!this.root) return undefined;
    let curr = this.root, found = false;
    while (curr && !found) {
      if (val > curr.val) {
        curr = curr.right;
      } else if (val < curr.val) {
        curr = curr.left;
      } else {
        return true;
      }
    }
    return false;
  }

  BFS() {
    let visited = [];
    let queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      visited.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }

  DFSPreOrder() {
    let visitted = [];
    let curr = this.root;

    const traverse = node => {
      visitted.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(curr);
    return visitted;
  }

  DFSInOrder() {
    let visitted = [];
    let curr = this.root;
    const traverse = node => {
      if (node.left) traverse(node.left);
      visitted.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(curr);
    return visitted;
  }
  DFSPostOrder() {
    let visitted = [];
    let curr = this.root;
    const traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visitted.push(node.val);
    }
    traverse(curr);
    return visitted;
  }
}


const tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS())
console.log(tree.DFSPreOrder())
console.log(tree.DFSInOrder())
console.log(tree.DFSPostOrder())
console.log(tree.find(15))
console.log(tree.contains(15))