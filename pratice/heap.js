


class MaxHeap{
  constructor(){
    this.heap=new Array()
  }
  insert(value){
    this.heap.push(value)
    let indexPos=this.heap.length-1

    while (true) {

      let parantPos=Math.floor((indexPos-1)/2)

      if(!this.heap[parantPos])break;
      if(this.heap[parantPos]>value)break;

      [this.heap[parantPos],this.heap[indexPos]]=[this.heap[indexPos],this.heap[parantPos]]
      indexPos=parantPos
      
    }
    return this
  }

   extract(){
    let lastIndex=this.heap.length-1;

    [this.heap[0],this.heap[lastIndex]]=[this.heap[lastIndex],this.heap[0]]
    let largest=this.heap.pop()
    let indexPos=0;
    while (true) {
       let swapTo=indexPos
       
       let leftChild=(indexPos*2)+1;
       let rightChild=(indexPos*2)+2;

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

       if(indexPos===swapTo)break;

       [this.heap[swapTo],this.heap[indexPos]]=[this.heap[indexPos],this.heap[swapTo]]
       indexPos=swapTo

    }
    return largest
   }
}



function minHeapSort(array) {
let minHeap=new MaxHeap()
  for(let i=0;i<array.length;i++){
    minHeap.insert(array[i])
  }
  let sortedArray=[]

  while (minHeap.heap.length) {
sortedArray.push(minHeap.extract())    
  }
  return sortedArray
} 

let array=[4,66,7,44,33,7,2,8,9]
console.log(minHeapSort(array));



    