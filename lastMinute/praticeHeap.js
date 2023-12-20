


class MaxHeap{
  constructor(){
    this.heap=new Array()
  }

  insert(value){
    this.heap.push(value)
    this.heapify()

    return this
  }
  heapify(){
    let indexpos=this.heap.length-1

    while (indexpos>0) {
      let parentPos=Math.floor((indexpos-1)/2)

      if(!this.heap[parentPos])break;
      if(this.heap[parentPos]>this.heap[indexpos])break;

      [this.heap[parentPos],this.heap[indexpos]]=[this.heap[indexpos],this.heap[parentPos]]
      indexpos=parentPos
      
    }
  }

  isEmpty(){
    return this.heap===0
  }
  extract(){
    let lastIndex=this.heap.length-1;

    [this.heap[0],this.heap[lastIndex]]=[this.heap[lastIndex],this.heap[0]]
    let largest=this.heap.pop()
    this.heapifyDown()
    return largest
  }

  heapifyDown(){
    if(this.isEmpty()){
      return null
    }
    let indexpos=0
    while (true) {
      let swapTo=indexpos

      let leftChild=(indexpos*2)+1;
      let rightChild=(indexpos*2)+2;

      if(leftChild<this.heap.length){
         if(this.heap[leftChild]>this.heap[swapTo]){
          swapTo=leftChild
         }
      }

      if(rightChild<this.heap.length){
        if(this.heap[rightChild]>this.heap[swapTo]){
         swapTo=rightChild
        }
     }

     if(indexpos===swapTo)break;

     [this.heap[swapTo],this.heap[indexpos]]=[this.heap[indexpos],this.heap[swapTo]]
     indexpos=swapTo
    }
  }
}


const maxHeap = new MaxHeap();
maxHeap.insert(4).insert(10).insert(8).insert(5).insert(1);
console.log(maxHeap.heap); // Output: [10, 5, 8, 4, 1]

console.log(maxHeap.extract()); // Output: 10
console.log(maxHeap.heap); // Output: [8, 5, 1, 4]