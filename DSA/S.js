class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// FILO
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) { //unshift
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    let oldFirst = this.first;
    this.first = newNode;
    this.first.next = oldFirst;
    this.size++;
    return this;
  }
  pop() {//shift
    if (!this.first) return undefined;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }
    let oldFirst = this.first;
    this.first = oldFirst.next;
    oldFirst.next = null;
    this.size--;
    return this;
  }
}
const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
console.log(s.pop());