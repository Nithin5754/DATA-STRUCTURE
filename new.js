


class TrieNode{
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
    return node.end
  }

  
}