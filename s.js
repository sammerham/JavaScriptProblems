'use strict'


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // FILO first in last out 
  // abcd // unshift
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    let temp = this.first;
    this.first = newNode;
    this.first.next = temp;
    return this.size++;
  }
  // shift
  pop() {
    if (!this.first) return undefined;
    if (this.fist === this.last) {
      this.last = null;
    }
    let temp = this.first;
    this.first = temp.next;
    temp.next = null;
    this.size--;
    return temp;
  }
}

const stack = new Stack();
stack.push('a');
stack.push('b');
stack.push('v');
stack.push('c');
console.log(stack.pop());