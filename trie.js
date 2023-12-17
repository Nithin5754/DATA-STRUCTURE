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


  startWith(prefix){
    let node=this.root

    for(let i=0;i<prefix.length;i++){
       if(node.children[prefix[i]]){
        node=node.children[prefix[i]]
       }else{
        return false
       }
    }
    this.printWord(node,prefix)
  }

  remove(word){
    return this.removeHelper(this.root,word,0)
  }
removeHelper(node,word,index){
  if(index===word.length){
    return null
  }
  let childNode=node.children[word[index]]
  if(childNode){
     this.removeHelper(childNode,word,index+1)
  }
  if(!childNode.end && Object.keys(childNode.children).length===0){
    delete node.children[word[index]]
  }
}
 
  print(){

    return this.printWord(this.root," ")
  }

  printWord(node,currentWord){

    if(node.end){
     console.log(currentWord);
    }
      for(let char in node.children){
        this.printWord(node.children[char],currentWord+char)
      }

  }
}



const tries=new Trie()

tries.insert("Cat");
tries.insert("nithi");
tries.insert("nithin");
console.log(tries.search("nithi"));
tries.remove("nithin")
console.log("Words starting with 'n':");
tries.startWith("C");
// tries.print()