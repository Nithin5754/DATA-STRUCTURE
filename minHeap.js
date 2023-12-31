


class MinHeap{
  constructor(){
    this.heap=new Array()
  }

  insert(value){
      this.heap.push(value)

      let indexPos=this.heap.length-1

      while (true) {

        let parentPos=Math.floor((indexPos-1)/2)

        if(!this.heap[parentPos])break;
        if(this.heap[parentPos]<=this.heap[indexPos])break;

        [this.heap[parentPos],this.heap[indexPos]]=[this.heap[indexPos],this.heap[parentPos]]
        indexPos=parentPos
        
      }
      return this

  }

  extractMin(){
    let lastIndex=this.heap.length-1;

    [this.heap[0],this.heap[lastIndex]]=[this.heap[lastIndex],this.heap[0]]

    let smallest=this.heap.pop()

    let indexPos=0

    while (true) {
  let swapTo=indexPos
  
  let leftChild=(indexPos*2)+1
  let rightChild=(indexPos*2)+2

  if(leftChild<this.heap.length){
    if(this.heap[leftChild]<this.heap[swapTo]){
      swapTo=leftChild
    }
  }
  if(rightChild<this.heap.length){
    if(this.heap[rightChild]<this.heap[swapTo]){
      swapTo=rightChild
    }
  }
  if(swapTo===indexPos)break;

  [this.heap[swapTo],this.heap[indexPos]]=[this.heap[indexPos],this.heap[swapTo]]
  indexPos=swapTo
    }
    return smallest;
  }
}



function heapSort(array) {

  let sortMin=new MinHeap()

  for(let i=0;i<array.length;i++){
     sortMin.insert(array[i])
  }

  let sorted=[]

  while (sortMin.heap.length) {

    sorted.push(sortMin.extractMin())
    
  }

  return sorted
  
}


class PriorityQueue extends  MinHeap
  {
  enqueue(element, priority) {
    super.insert({ element, priority });
  }

  dequeue() {
    const maxElement = super.extractMin();
    return maxElement ? maxElement.element : null;
  }


}

// let array=[56,76,43,9,2,8,1,45]
// console.log(heapSort(array));


const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('Task 1', 3);
priorityQueue.enqueue('Task 2', 1);
priorityQueue.enqueue('Task 3', 2);

console.log(priorityQueue.dequeue()); // Output: Task 2 (highest priority)
console.log(priorityQueue.dequeue()); // Output: Task 3
console.log(priorityQueue.dequeue()); // Output: Task 1
