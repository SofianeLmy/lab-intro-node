class SortedList {
  constructor(items,length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(x);
    this.length++;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (this.length < pos) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items == '') {
    throw new Error('EmptySortedList')
  }else {
    return this.items[this.items.length - 1];
  }
  }

  min() {
    if (this.items == '') {
    throw new Error('EmptySortedList')
  }else {
    return this.items[0];
  }
  }

  sum() {
    let sum = 0;
    or (let i= 0; i < this.items.length; i++){
      sum += this.items[i];
    }
    return sum;
  }

  avg() {
    let sum = 0;
    if (this.items == '') {
      throw new Error('EmptySortedList');
    } else {
    for (let i= 0; i < this.items.length; i++){
      sum += this.items[i];
    }
    return sum /= this.items.length;
  }
}

module.exports = SortedList;
