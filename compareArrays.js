function compareArrays(arr1, arr2){
    var results=[]
    for(var i=0; i< arr1.length; i++){
        if(arr1[i]==arr2[i]){
            results.push(arr2[i])
        }
    }
    return results;
}

var array1=[2,1,6,12,8,5,9];
var array2=[2,1,7,3,16,4,0];

console.log(compareArrays(array1, array2))


// const prompt = require("prompt-sync")();
//  let x = prompt("enter a number");
 

/*function addSum(num){
    
    for(var i=num; i>=1; i++) {
        var sum = num + i
    }
    return sum;
 }

 num = 5
var output = addSum(num)
console.log(output)*/