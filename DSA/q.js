class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// FIFO
class Queue{
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    let oldlast = this.last;
    oldlast.next = newNode;
    this.last = newNode;
    this.size++;
    return this;
  }
  dequeue() {
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
const q = new Queue();
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
console.log(q.dequeue());