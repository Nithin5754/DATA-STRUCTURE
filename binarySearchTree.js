


class Node{
  constructor(value){
    this.value=value
    this.left=null
    this.right=null
  }
}


class BinarySearchTree{
  constructor(){
    this.root=null
  }

  insert(value){
    let newNode=new Node(value)

    if(this.root===null){
      this.root=newNode
    }else{
      return this.insertNode(this.root,newNode)
    }
  }
  insertNode(root,newNode){
    if(newNode.value<root.value){
      if(!root.left){
        root.left=newNode
      }else{
        return this.insertNode(root.left,newNode)
      }
    }else{
      if(!root.right){
        root.right=newNode
      }else{
        return this.insertNode(root.right,newNode)
      }
    }
  }

  min(root){
    if(!root.left){
      return root.value
    }else{
      return this.min(root.left)
    }
  }


delete(value){
  if(this.root===null){
    return null
  }else{
    return this.deleteNode(this.root,value)
  }
}

deleteNode(root,value){
  if(root===null){
    return root
  }
  if(value<root.value){
    root.left=this.deleteNode(root.left,value)
  }else if(value>root.value){
    root.right=this.deleteNode(root.right,value)
  }else{
    if(!root.left&&!root.right){
      return null
    }
    if(!root.left){
      return root.right
    }
    if(!root.right){
      return root.left
    }

    root.value=this.min(root.right)
    root.right=this.deleteNode(root.value,root.right)
  }
  return root
}



//BREADTH FIRST SEARCH

  BFS(){
    let data=[]
    let queue=[]
    queue.push(this.root)

    while(queue.length) {

      let current=queue.shift()

      data.push(current.value)

      current.left&&queue.push(current.left)
      current.right&&queue.push(current.right)
      
    }
    return data
  }

  //DEPTH FIRST SEARCH

  //---->preOrder

  perOrder(){
   let data=[]

    function dfs(node) {
      if(node){
       data.push(node.value)
        dfs(node.left)
        dfs(node.right)
      }

      
    }

    dfs(this.root)
    return data
    

  }

  postOrder(){
    let data=[]
    function dfs(node) {

      if(node){
        dfs(node.left)
        data.push(node.value)
        dfs(node.right)
      }
      
    }
    dfs(node.right)
    return data
  }

  inOrder(){
    let data=[]

    function dfs(node) {

      if(node){
        dfs(node.left)
      dfs(node.right)
      data.push(node.value)
      }
      
    }
    dfs(this.root)
    return data
  }


  closest(target){
    if(this.root===null){
      return false
    }else{
      return this.closerHelper(this.root,target,this.root.value)
    }
  }

  closerHelper(root,target,closer){
    if(root===null){
      return closer
    }
    if(Math.abs(target-root.value)<Math.abs(target-closer)){
      closer=root.value
    }

    if(target<root.value){
      return this.closerHelper(root.left,target,closer)
    }else if(target>root.value){
      return this.closerHelper(root.right,target,closer)
    }else{
      return closer
    }


  }

}


let tree=new BinarySearchTree()
tree.insert(30)
tree.insert(2)
tree.insert(5)
tree.insert(74)
tree.insert(15)
tree.insert(7)

tree.delete(30)

console.log(tree);
console.log(tree.perOrder());

console.log(tree.closest(8));