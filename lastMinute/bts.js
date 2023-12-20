

class trieNode{
  constructor(){
    this.children={}
    this.end=false
  }

}

class Trie{
  constructor(){
    this.root=new TrieNode()
  }

  insert(word){
    let node=this.root

    for(let i=0;i<word.length;i++){
      if(!node.children[word[i]]){
        node.children[word[i]]=new TrieNode()
      }
      node=node.children[word[i]]
    }
    node.end=true
  }
  search(word){
    let node=this.root

    for(let i=0;i<word.length;i++){
      if(node.children[word[i]]){
        node=node.children[word[i]]
      }else{
        return false
      }

    }
    return node.end

  }


  delete(word){
    if(this.root===null){
      return null
    }else{
      return this.deletehelper(this.root,word,0)
    }


  }
  deletehelper(node,word){
    if(index===word.length){
      return null
    }

    let chilNode=node.children[word[index]]

    if(chilNode){
      this.deletehelper(chilNode,word,index+1)
    }
    if(!chilNode.end&&Object.keys(chilNode.children).length===0){
      delete chilNode.children[word[index]]
    }
  }

  printWord(node,currentWord){
    if(node.end){
      return currentWord
    }

    for(let char in node.children){
      this.printWord(node.children[char],currentWord+char)
    }
  }

  startwith(prefix){
    let node=this.root;

    for(let i=0;i<prefix.length;i++){
if(node.children[prefix[i]]){
  node=node.children[prefix[i]]
}else{
  return false
}
    }
    this.printWord(node,prefix)
  }
}