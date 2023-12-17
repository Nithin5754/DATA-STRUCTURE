
class Node{
  constructor(value){
    this.value=value
    this.left=null
    this.right=null
  }
}




class bst{
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

    if(newNode<root.value){
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
   max(root){
    if(!root.right){
      return root.value
    }else{
      return this.max(root.right)
    }
   }

   search(root,value){
    if(root===null){
      return false
    }

    if(value <root.value){
      return this.search(root.left,value)
    }else if(value >root.value){
      return this.search(root.right,value)
    }else if(value===root.value){
      return true
    }
   }

   delete(value){
    return this.deleteHelper(this.root,value)
   }

   deleteHelper(root,value){
    if(root===null){
      return null
    }

    if(value<root.value){
      root.left=this.deleteHelper(root.left,value)
    }else if(value>root.value){
      root.right=this.deleteHelper(root.right,value)
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
      root.right=this.deleteHelper(root.value,root.right)
    }
    return root
   }

   preOrder(){
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
    dfs(this.root)
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

   levelOrder(){
    let data=[]
    let queue=[]
    queue.push(this.root)

    while (queue.length) {
      let current=queue.shift()
      data.push(current.value)


      current.left&&queue.push(current.left)
      current.right&&queue.push(current.right)
      
    }
    return data
   }


   closest(target){
    if(this.root===null){
      return null
    }else{
      return this.closestHelper(this.root,target,this.root.value)
    }
   }
   closestHelper(root,target,closest){
    if(root===null){
      return closest
    }

    if(Math.abs(target-root.value)<Math.abs(target-closest)){
      closest=root.value
    }

    if(target<root.value){
      return this.closestHelper(root.left,target.closest)
    }else if(target >root.value){
      return this.closestHelper(root.right,target.closest)
    }else{
      return closest
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
console.log(tree.search(tree.root,7),"got sucessfully");