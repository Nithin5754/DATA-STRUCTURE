


class HeapMax{
  constructor(){
    this.Heap=new Array()
  }

  insert(value){
    this.Heap.push(value)
    let indespos=this.Heap.length-1

    while (true) {
       
      let parentPos=Math.floor((indespos-1)/2)

      if(!this.Heap[parentPos])break;
      if(this.Heap[parentPos]>=this.Heap[indespos])break;

      [this.Heap[parentPos],this.Heap[indespos]]=[this.Heap[indespos],this.Heap[parentPos]]
      indespos=parentPos
    }
    return this
  }

  extract(){
    let lastIndex=this.Heap.length-1;
    [this.Heap[0],this.Heap[lastIndex]]=[this.Heap[lastIndex],this.Heap[0]]

    let largest=this.Heap.pop()

    let indexpos=0

    while(true){
      let swapTo=indexpos

     let leftChild=(indexpos*2)+1;
     let rightChild=(indexpos*2)+2

     if(leftChild<this.Heap.length){
      if(this.Heap[leftChild]>this.Heap[swapTo]){
           swapTo=leftChild
      }
     }


     if(rightChild<this.Heap.length){
      if(this.Heap[rightChild]>this.Heap[swapTo]){
           swapTo=rightChild
      }
     }
     if(indexpos===swapTo)break;

     [this.Heap[swapTo],this.Heap[indexpos]]=[this.Heap[indexpos],this.Heap[swapTo]]
     indexpos=swapTo
    }
    return largest
  }
  
}


function heapSort(array) {
  let max=new HeapMax()

  for(let i=0;i<array.length;i++){
    max.insert(array[i])
  }

  let sorted=[]

  while(max.Heap.length) {
    sorted.push(max.extract())
    
  }
  return sorted
}


let array=[7,45,6,78,2,5,45,87,21,14]

let output=heapSort(array)
console.log(output);