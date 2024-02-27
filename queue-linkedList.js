

class Node{
  constructor(value){
    this.value=value
    this.next=null
  }
}


class QueueLL{
  constructor(){
    this.front=null
    this.rear=null
    this.size=0
  }

  isEmpty(){
    return this.size===0
  }

  enqueue(value){
let currentNode=new Node(value)
   if(this.isEmpty()){
    this.front=currentNode
    this.rear=this.front

   }else{
    this.rear.next=currentNode
    this.rear=currentNode

   }
   this.size++
  }

  dequeue(){
  
    if(this.isEmpty())return console.log("queue is empty");

    let removePointer=this.front
    this.front=this.front.next
    this.size--
    return removePointer
  }


  printQueue(){
    if(this.isEmpty())return console.log(("empty queue"));

    let currentNode=this.front

    while (currentNode !==null) {

          console.log(currentNode.value);

          currentNode=currentNode.next
    }
  }
}


let queue=new QueueLL()
queue.enqueue(20)
queue.enqueue(6)
queue.enqueue(16)
queue.dequeue()
queue.printQueue()