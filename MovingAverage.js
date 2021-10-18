'use strict'
/*
Implement a class that tracks moving average of some measurements.
The interface should look like this (in pseudocode):

Instantiate a class instance.
The argument to the constructor specifies window size.
ma = MovingAverage(5)

Add measurements.
ma.add(1)
ma.add(2)
ma.add(3)

Get current moving average.
ma.get_average() == 2
ma.add(4)
ma.add(5)
ma.get_average() == 3
ma.add(6)
ma.get_average() == 4

*/


class MovingAverage {
  constructor(max) {
    this.max = max;
    this.queue = [];
  }

  add(n) {
    // check if less than window max
    if (this.queue.length < this.max) {
      this.queue.push(n);
    } else {
      this.queue.shift();
      this.queue.push(n);
    }
  }

  get_average() {
    const max = this.queue.reduce((acc, el) => {
      return acc + el;
    }, 0);
    return max / this.queue.length;
  }
}

const ma = new MovingAverage(5);
// Add measurements.
ma.add(1)
ma.add(2)
ma.add(3)

// Get current moving average.
console.log(ma.get_average())// == 2
ma.add(4)
ma.add(5)
console.log(ma.get_average())// == 3
ma.add(6)
console.log(ma.get_average())// == 4