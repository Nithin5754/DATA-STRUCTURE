

class Node{
  constructor(value){
    this.value=value
    this.next=null
  }
}


class Linked{
  constructor(){
    this.head=null,
    this.tail=this.head
    this.size=0
  }
  isEmpty(){
    return this.size===0
  }


  addToEmptyList(value){
  this.head=value
  this.tail=this.head
  this.size++
  }


  append(value){
    let newNode=new Node(value)
    if(this.isEmpty()){
      return this.addToEmptyList(newNode)
    }
    this.tail.next=newNode
    this.tail=newNode
    this.size++
    return this
  }

  prepend(value){
    let newNode=new Node(value)
    if(this.isEmpty())return this.addToEmptyList(newNode)
    newNode.next=this.head
    this.head=newNode
    this.size++
    return this
  }

  insertByIndex(index,value){
    let newNode=new Node(value)
    if(this.isEmpty())return this.addToEmptyList(newNode)
    if(index>this.size)return this.append(value)
    if(index==0)return this.prepend(value)
    let leader=this.traverseToIndex(index-1)
   let holdingPointer=leader.next;
   leader.next=newNode
   newNode.next=holdingPointer
   this.size++

  }

  traverseToIndex(index){
    let currentNode=this.head
    let counter=0

    while (counter !==index) {
      currentNode=currentNode.next
      counter++
      
    }
    return currentNode
  }
  removeByValue(value){
    if(this.isEmpty())return null
    if(this.head.value===value){
      this.head=this.head.next
      this.size--
      return this
    }else{
      let currentNode=this.head

      while (currentNode.next&&currentNode.next.value!==value) {
        currentNode=currentNode.next
        
      }

      if(currentNode.next){
        currentNode.next=currentNode.next.next
        this.size--
        return this
      }
    }
  }
  removeByIndex(index){
    if(!index)return null
    if(index>this.size)return null
    if(index===0){
      this.head=this.head.next
      this.size--
      return this
    }
    let leader=this.traverseToIndex(index-1)
    leader.next=leader.next.next
    this.size--
    return this
  }


  removeDuplicates(){
    if(this.isEmpty())return console.log("no data");

    let currentNode=this.head

    while (currentNode) {
   let runner=currentNode
   while (runner.next) {
    if(runner.next.value===currentNode.value){
      runner.next=runner.next.next
      this.size--
    }else{
      runner=runner.next
    }
    
   }
   currentNode=currentNode.next
      
    }
  }

  printfull(){
    let array=[]
let currentNode=this.head
    while (currentNode !==null) {
      array.push(currentNode.value)
      currentNode=currentNode.next
      
    }
    return array
  }

}



const linkedList=new Linked()
let arr=[3,4,8,3,5,3,8,9,3]

arr.map((ar)=>linkedList.prepend(ar))
linkedList.prepend(33)
linkedList.insertByIndex(10,99)


linkedList.removeDuplicates()
console.log(linkedList.size);


const print= linkedList.printfull()

console.log(print);