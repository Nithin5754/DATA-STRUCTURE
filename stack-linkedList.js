
//IMPLEMENT STACK TO LINKED LIST



class Node{
  constructor(value){
    this.value=value
    this.next=null
  }
}

class StackLL{
  constructor(){
    this.top=null
    this.last=this.top
    this.size=0
  }
  isEmpty(){
    return this.size===0
  }

  push(value){
    let currentNode=new Node(value)
  if(this.isEmpty()){
 
    this.top=currentNode
    this.size++
  }else{

    let holdingPointer=this.top
    this.top=currentNode
    this.top.next=holdingPointer
    this.size++
  }
  }

  pop(){
    if(this.isEmpty())return console.log("stack is empty");

      let removePointer=this.top
      this.top=this.top.next
      this.size--
      return removePointer
  }

  printstack(){
    if(this.isEmpty())return console.log("empty stack");

    let currentNode=this.top

    while (currentNode!==null) {
      console.log(currentNode.value);
      currentNode=currentNode.next
      
    }
  }
}


let stack=new StackLL()
stack.push(10)
stack.push(4)
stack.push(7)
stack.printstack()

const remove=stack.pop()
console.log("remove",remove.value);

stack.printstack()
