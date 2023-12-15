


class MaxHeap{
  constructor(){
    this.heap=new Array()
  }

  insert(value){
    this.heap.push(value)

    let indexPos=this.heap.length-1

    while (true) {

      let parentPos=Math.floor((indexPos-1)/2)

      if(!this.heap[parentPos])break
      if (this.heap[parentPos]>=this.heap[indexPos]) break;

      [this.heap[parentPos],this.heap[indexPos]]=[this.heap[indexPos],this.heap[parentPos]]
      indexPos=parentPos
      
    }
    return this
  }


  extract(){
    let lastIndex=this.heap.length-1;

    [this.heap[0],this.heap[lastIndex]]=[this.heap[lastIndex],this.heap[0]]

    let largest=this.heap.pop()
    let indexPos=0

    while (true) {
      let swapTo=indexPos;

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





let tree=new MaxHeap()
tree.insert(30)
tree.insert(2)
tree.insert(5)
tree.insert(74)
tree.insert(15)
tree.insert(700)



console.log(tree);

console.log(tree.extract());
console.log(tree.extract());
console.log(tree.extract());



