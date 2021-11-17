class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
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
    let curr = this.head;
    let prev = null;
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    return this;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    let oldHead = this.head;
    this.head = newNode;
    this.head.next = oldHead;
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    let oldHead = this.head;
    this.head = oldHead.next;
    oldHead.mext = null;
    this.length--;
    return this;
  }
  print() {
    let str = '';
    let curr = this.head;
    while (curr) {
      str += curr.val 
      if (curr.next) str += ' ---->> ';
      curr = curr.next;
    }
    console.log(str);
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    let count = 0;
    let curr = this.head;
    while (curr) {
      count++;
      curr = curr.next;
    }
    return curr;
  }
  set(idx, val) {
    if (idx < 0 || idx >= this.length) return undefined;
    let target = this.get(idx);
    target.val = val;
    return this;
  }
  delete(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    let count = 0;
    let curr = this.head;
    let prev = null;
    while (count !== idx) {
      count++;
      prev = curr;
      curr = curr.next;
    }
    prev.next = curr.next;
    curr.next = null;
    this.length--;
    return this;
  }

  insert(idx, val) {
    let newNode = new Node(val);
    if (idx < 0 || idx > this.length) return undefined;
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);
    let count = 0;
    let curr = this.head;
    let prev = null;
    while (count !== idx) {
      count++;
      prev = curr;
      curr = curr.next;
    }
    prev.next = newNode;
    newNode.next = curr;
    this.length++;
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
      next = curr.next;
      curr.next = prev;

      prev = curr;
      curr = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
list.push('a');
list.push('b');
list.push('c');
list.push('d');
list.push('e');
// console.log(list.pop());
console.log(list.unshift('f'));
// console.log(list.shift());
// console.log(list.delete(3));
console.log(list.insert(3, 'l'));
console.log(list.reverse());
list.print();