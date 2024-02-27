
//QUS : CHUCK ARRAY INTO SUBARRAY OF N ELEMENT


const arr=[1,2,3,4,5,6,7,8]

function chunArrays(arr,size){
    let chunckArray=[]
    for(let i=0;i<arr.length;i+=size){
        let subArr=arr.slice(i,i+size)
        chunckArray.push(subArr)
    }
    return chunckArray
}

const chunk=chunArrays(arr,5)
console.log(chunk)