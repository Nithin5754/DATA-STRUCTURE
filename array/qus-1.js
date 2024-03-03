
//QUS : CHUCK ARRAY INTO SUBARRAY OF N ELEMENT

const http = require("http");


let obj={
    apple:'hello',
    zee:'hai',
    joyu:'mmm',
    elephant:'huii'
    
}



function remove(obj) {
    let vowels=/[AEIOUaeiou]$/
    for(let key in obj){
        if(vowels.test(key)){
           delete obj[key]
        }
    }

    return obj
    
}

const updateObj=remove(obj)

console.log(updateObj);

let array=[2,3,4,5,6,78,7,6,5,4,4,6,9,10,34,12]


function chunkArrays(arr,target) {

    let chunk=[]
    for (let i = 0; i < arr.length; i+=target) {
        chunk.push(arr.slice(i,i+target))
    }

    return chunk
    
}


const result=chunkArrays(array,2)
console.log(result);








function isPalindrome(str) {
    
    let i=0

    while (i<str.length/2) {

        if(str[i]!==str[str.length-1-i])return console.log("not palindrome");
        i++
        
    }

    return console.log("is palindrome");

}

isPalindrome("malayalam")


const server=http.createServer((req,res)=>{
    res.write("hello")
    res.end()
},

)


server.listen(5000,()=>console.log("server started"))


