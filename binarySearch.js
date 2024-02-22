function binarySearch(arr,value) {


  let left=0
  let right=arr.length-1

  while (left<=right) {
    let mid=Math.floor((left+right)/2);
if(value===arr[mid])return mid;

    if(value<arr[mid]){
      right=right-1
    }else{
      left=left+1
    }
    

  
  }
  return -1
  
}



//USING RECURSION

function binarySearch(arr,target,left,right) {
  if(left>right)return console.log("not found");

while (left<=right) {
  let mid=Math.floor((left+right)/2)
  if(arr[mid]===target)return mid

  if(target<arr[mid]){
  return  binarySearch(arr,target,left,mid-1)

  }else{
 return   binarySearch(arr,target,mid+1,right)
  }


  
}

return -1

  
}

let arr=[1,2,3,4,5,6,7,8,90]
const bs= binarySearch(arr,10,0,arr.length-1)
if(bs)console.log(bs);

