'use strict'


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // FIFO first in first out
  // push
  enqueue(val) {  
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    let temp = this.last;
    this.last.next = newNode;
    this.last = newNode;
    return this.size++
  }
  // shift
  dequeu() {
    if (!this.first) return undefined;
    if (this.size === 1) {
      this.last = null;
    }
    let temp = this.first;
    this.first = temp.next;
    temp.next = null;
    this.size--;
    return temp;
  }
}

const queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('d');
queue.enqueue('r');
console.log(queue.dequeu());