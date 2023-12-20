class MaxHeap {
  constructor() {
    this.heap = new Array();
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
    return this;
  }

  extract() {
    if (this.isEmpty()) {
      return null;
    }

    const lastIndex = this.heap.length - 1;
    [this.heap[0], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[0]];
    const largest = this.heap.pop();
    this.heapifyDown();
    return largest;
  }

  heapifyUp() {
    let indexPos = this.heap.length - 1;

    while (indexPos > 0) {
      const parentPos = Math.floor((indexPos - 1) / 2);
      if(!this.heap[parentPos])break;
      if (this.heap[parentPos] >= this.heap[indexPos]) {
        break;
      }

      [this.heap[parentPos], this.heap[indexPos]] = [this.heap[indexPos], this.heap[parentPos]];
      indexPos = parentPos;
    }
  }

  heapifyDown() {
    let indexPos = 0;

    while (true) {
      let swapTo = indexPos;

      const leftChild = 2 * indexPos + 1;
      const rightChild = 2 * indexPos + 2;

      if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[swapTo]) {
        swapTo = leftChild;
      }

      if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[swapTo]) {
        swapTo = rightChild;
      }

      if (indexPos === swapTo) {
        break;
      }

      [this.heap[swapTo], this.heap[indexPos]] = [this.heap[indexPos], this.heap[swapTo]];
      indexPos = swapTo;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

class PriorityQueue extends MaxHeap{

  enqueue(element,priority){
    super.insert({element,priority})
  } 
  dequeue(){
    let maxelemnet=super.extract()

    return maxelemnet?maxelemnet.element:null
  }
  isEmpty(){
    return super.isEmpty()
  }

}

// Example usage:
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('Task 1', 3);
priorityQueue.enqueue('Task 2', 1);
priorityQueue.enqueue('Task 3', 2);

console.log(priorityQueue.dequeue()); 
console.log(priorityQueue.dequeue()); 
console.log(priorityQueue.dequeue()); 
console.log(priorityQueue.isEmpty());  // Output: true
