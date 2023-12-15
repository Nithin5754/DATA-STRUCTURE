


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