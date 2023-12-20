






class Node{
  constructor(value){
    this.value=value
    this.left=null
    this.right=null
  }
}

class BinaryST{
  constructor(){
    this.root=null
  }
  insert(value){
    let newNode=new Node(value)

    if(this.root===null){
      this.root=newNode
    }else{
      this.insertHelper(this.root,newNode)
    }
  }
  insertHelper(root,newNode){
    if(newNode.value<root.value){
      if(!root.left){
        root.left=newNode
      }else{
        this.insertHelper(root.left,newNode)
      }
    }else{
      if(!root.right){
        root.right=newNode
      }else{
        this.insertHelper(root.right,newNode)
      }
    }
  }

  search(root,value){
    if(root===null){
      return false
    }

    if(value===root.value){
      return root.value
    }else if(value<root.left){
      this.search(root.left,value)
    }else if(value>root.right){
      this.search(root.right,value)
    }
    return false
  }


  delete(value){
    if(this.root===null){
      return false
    }else{
      this.deleteHelper(this.root,value)
    }
    
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
        return false
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
min(root){
  if(!root){
    return false
  }

  if(!root.left){
    return root.value
  }
}

max(root){
  if(!root){
    return false
  }
  if(!root.right){
    return root.value
  }
}


inOrder(){
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

preOrder(){
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

postOrder(){
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

//Breadth first search

bfs(){
  let result=[]
  let queue=[]

  queue.push(this.root)

  while (queue.length) {
        let current=queue.shift()
        result.push(current.value)

        current.left&&queue.push(current.left)
        current.right&&queue.push(current.right)
  }
  return result
}

closest(target){
  if(this.root===null){
    return false
  }else{
   return this.closerHelper(this.root,target,this.root.value)
  }
}

closerHelper(root,target,closest){
  if(root===null){
    return closest
  }
  if(Math.abs(target-root.value)<Math.abs(target-closest)){
    closest=root.value
  }

  if(target<root.value){
   return this.closerHelper(root.left,target,closest)
  }else if(target>root.value){
  return  this.closerHelper(root.right,target,closest)
  }else{
    return closest
  }
}
kthSmallestElement(k){
  let data=[]

  function dfs(node) {

    if(node){
      dfs(node.left)
      data.push(node.value)
      dfs(node.right)
    }
    
  }
  dfs(this.root)
  return k>0&&data.length?data[k-1]:null
}

isBst(){
  let data=[]

  function dsf(node) {
    if(node){
      dsf(node.left)
      data.push(node.value)
      dsf(node.right)
    }
    
  }
  dsf(this.root)
    for(let i=0;i<data.length;i++){
      if(data[i]<data[i-1]){
        return false
      }
    }
    return true
}

}



let tree=new BinaryST()

tree.insert(34)
tree.insert(67)
tree.insert(45)
tree.insert(3)
tree.insert(15)
let output=tree.preOrder()
console.log(output);

console.log(tree.closest(90),"closest element");

console.log(tree.kthSmallestElement(3),'kth samllest element');


console.log("is bst",tree.isBst());



















// class Node{
//   constructor(value){
//     this.value=value
//     this.left=null
//     this.right=null
//   }
// }


// class BinarySearchTree{
//   constructor(){
//     this.root=null
//   }

//   insert(value){
//     let newNode=new Node(value)

//     if(this.root===null){
//       this.root=newNode
//     }else{
//       return this.insertNode(this.root,newNode)
//     }
//   }
//   insertNode(root,newNode){
//     if(newNode.value<root.value){
//       if(!root.left){
//         root.left=newNode
//       }else{
//         return this.insertNode(root.left,newNode)
//       }
//     }else{
//       if(!root.right){
//         root.right=newNode
//       }else{
//         return this.insertNode(root.right,newNode)
//       }
//     }
//   }

//   min(root){
//     if(!root.left){
//       return root.value
//     }else{
//       return this.min(root.left)
//     }
//   }


// delete(value){
//   if(this.root===null){
//     return null
//   }else{
//     return this.deleteNode(this.root,value)
//   }
// }

// deleteNode(root,value){
//   if(root===null){
//     return root
//   }
//   if(value<root.value){
//     root.left=this.deleteNode(root.left,value)
//   }else if(value>root.value){
//     root.right=this.deleteNode(root.right,value)
//   }else{
//     if(!root.left&&!root.right){
//       return null
//     }
//     if(!root.left){
//       return root.right
//     }
//     if(!root.right){
//       return root.left
//     }

//     root.value=this.min(root.right)
//     root.right=this.deleteNode(root.right,root.value)
//   }
//   return root
// }

// kthSmallest(k){
//   let result=[]

//   function kthHelper(node) {
//     if(!node)return
//     kthHelper(node.left)
//     result.push(node.value)
//     kthHelper(node.right)
//   }
//   kthHelper(this.root)

//   return result[k-1]
// }










































// //BREADTH FIRST SEARCH

//   BFS(){
//     let data=[]
//     let queue=[]
//     queue.push(this.root)

//     while(queue.length) {

//       let current=queue.shift()

//       data.push(current.value)

//       current.left&&queue.push(current.left)
//       current.right&&queue.push(current.right)
      
//     }
//     return data
//   }

//   //DEPTH FIRST SEARCH

//   //---->preOrder

//   perOrder(){
//    let data=[]

//     function dfs(node) {
//       if(node){
//        data.push(node.value)
//         dfs(node.left)
//         dfs(node.right)
//       }

      
//     }

//     dfs(this.root)
//     return data
    

//   }

//   postOrder(){
//     let data=[]
//     function dfs(node) {

//       if(node){
//         dfs(node.left)
//         data.push(node.value)
//         dfs(node.right)
//       }
      
//     }
//     dfs(node.right)
//     return data
//   }

//   inOrder(){
//     let data=[]

//     function dfs(node) {

//       if(node){
//         dfs(node.left)
//       dfs(node.right)
//       data.push(node.value)
//       }
      
//     }
//     dfs(this.root)
//     return data
//   }


//   closest(target){
//     if(this.root===null){
//       return false
//     }else{
//       return this.closerHelper(this.root,target,this.root.value)
//     }
//   }
//   //closest helper

//   closerHelper(root,target,closer){
//     if(root===null){
//       return closer
//     }
//     if(Math.abs(target-root.value)<Math.abs(target-closer)){
//       closer=root.value
//     }

//     if(target<root.value){
//       return this.closerHelper(root.left,target,closer)
//     }else if(target>root.value){
//       return this.closerHelper(root.right,target,closer)
//     }else{
//       return closer
//     }


//   }

//   search(root,value){
//     if(!root){
//       return false
//     }
//     if(value<root.value){
//      return this.search(root.left,value)
//     }else if(value>root.value){
//       return this.search(root.right,value)
//     }else if(value===root.value){
//       return true
//     }
//   }

//   height(node){
//     if(node===null){
//       return null
//     }
//     let leftHeight=this.height(node.left)
//     let rightHeigth=this.height(node.right)

//     return Math.max(leftHeight,rightHeigth)+1
//   }

//   treeHeight(){
//     return this.height(this.root)
//   }


// }


// let tree=new BinarySearchTree()
// tree.insert(30)
// tree.insert(2)
// tree.insert(50)
// tree.insert(74)
// tree.insert(10)
// tree.insert(7)

// tree.delete(30)

// console.log(tree);
// console.log(tree.inOrder());

// console.log(tree.closest(8));
// console.log(tree.search(tree.root,10),"got sucessfull");


// console.log(tree.kthSmallest(2,"smallest"));
  

// console.log(tree.treeHeight(),"height of a tree");

