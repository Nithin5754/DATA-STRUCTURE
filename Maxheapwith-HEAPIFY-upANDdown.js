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




function Maxsorted(array) {
  let maxheap=new MaxHeap()
 for(let i=0;i<array.length;i++){
   maxheap.insert(array[i])
 }
 let sorted=[]

 while (maxheap.heap.length) {

   sorted.push(maxheap.extract())
   
 }

return sorted

}
let array=[4,5,6,3,7,8,9,12]
console.log(Maxsorted(array));
