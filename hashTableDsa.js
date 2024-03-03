


class HashTable{
  constructor(size){
    this.table=new Array(size)
    this.size=size
  }
  Hash(key){
    let total=0

    for(let i=0;i<key.length;i++){
      total+=key.charCodeAt(i)
    }
    return total % this.size
  }
  SetData(key,value){
    let index=this.Hash(key)

 

 let bucket=this.table[index]
 if(!bucket){
  this.table[index]=[[key,value]]
 }else{
  let sameKeyItem=bucket.find((item)=>item[0]===key)
  if(sameKeyItem){
    sameKeyItem[1]=value
  }else{
    bucket.push([key,value])
  }
 }
   
  }
  GetData(key){
    let index=this.Hash(key)
    
    let bucket=this.table[index]
    if(bucket){
      let sameKeyItem=bucket.find((item)=>item[0]===key)
      if(sameKeyItem){
        return sameKeyItem[1]
      }
    }
    return undefined
  }

  removeData(key){

     let index=this.Hash(key)
  
    let bucket=this.table[index]
    if(bucket){

      let sameKeyItem=bucket.find((item)=>item[0]===key);
      if(sameKeyItem){
        bucket.slice(bucket.indexOf(sameKeyItem),1)
      }
    }
    
  }
  Display(){
    for(let i=0;i<this.table.length;i++){
      if(this.table[i]){
        console.log(this.table[i]);
      }
    }
  }
}



let hashList=new HashTable(50)

hashList.SetData("n","nithin")
hashList.SetData("n","niVIN")
hashList.SetData("age",24)
hashList.removeData("age")

hashList.Display()
// console.log(hashList.GetData("name"));
   
