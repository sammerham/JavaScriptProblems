class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    let oldTail = this.tail;
    oldTail.next = newNode;
    newNode.prev = oldTail;
    this.tail = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    let oldTail = this.tail;
    this.tail = oldTail.prev;
    oldTail.prev = null;
    this.tail.next = null;
    this.length--;
    return this;
  }
  print() {
    let str = '';
    let curr = this.head;
    while (curr) {
      str += curr.val;
      if (curr.next) str += ' ---> ';
      curr = curr.next;
    }
    console.log(str);
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    let oldHead = this.head;
    newNode.next = oldHead;
    oldHead.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  shift() {
    if (!this.length) {
      return undefined
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    let oldHead = this.head;
    this.head = oldHead.next;
    this.head.prev = null;
    oldHead.next = null;
    this.length--;
    return this;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    let curr, count;
    if (idx < this.length / 2) {
      count = 0;
      curr = this.head;
      while (count !== idx) {
        count++;
        curr = curr.next;
      }
    } else {
      curr = this.tail;
      count = this.length - 1;
      while (count !== idx) {
        count--;
        curr = curr.prev;
      }
    }
    return curr;
  }

  set(idx, val) {
    if (idx < 0 || idx >= this.length) return undefined;
    let target = this.get(idx);
    target.val = val;
    return this;
  }
  reverse() {
    if (!this.head) return undefined;
    if (this.length === 1) return this.head;
    let curr = this.head;
    this.head = this.tail;
    this.tail = curr;
    let prev = null;
    let next;
    while (curr) {
      let next = curr.next;
      curr.prev = next;
      curr.next = prev;

      prev = curr;
      curr = next;
    }
    return this;
  }
  insert(idx, val) {
    let newNode = new Node(val);
    if (idx < 0 || idx > this.length) return undefined;
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);
    let target = this.get(idx);
    let before = target.prev;
    before.next = newNode;
    newNode.next = target;
    this.length++;
    return this;
  }
  delete(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    let target = this.get(idx);
    let before = target.prev;
    let after = target.next;
    before.next = after;
    target.prev = null;
    target.next = null;
    this.length--;
    return this;
  }
}

const list = new DoublyLinkedList();
list.push('a');
list.push('b');
list.push('c');
list.push('d');
list.push('e');
// console.log(list.pop());
// console.log(list.unshift('H'));
// console.log(list.shift());
// console.log(list.get(1));
// console.log(list.insert(1, 'G'));
console.log(list.delete(0));
// list.reverse()
list.print()