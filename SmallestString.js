//function highestCommonDivisor()




function smallestString(arr){
    let elementWithSmallestChars = arr[0]
    let currentCharSize = arr[0]. length
    for(let i=1; i< arr.length; i++){
        let element = arr[i]
        let numberOfChars=element.length
        if (numberOfChars<currentCharSize){
            currentCharSize = numberOfChars
            elementWithSmallestChars = element
        }
    }
    return elementWithSmallestChars;
}
function smallestString2(arr){
    let elementWithSmallestChars = arr[0]
    let currentCharSize = arr[0].length
    for (let element of arr){
        let numberOfChars= element.length
        if(numberOfChars<currentCharSize){
            currentCharSize= numberOfChars
            elementWithSmallestChars=element
        }
    }
    return elementWithSmallestChars;
}

 let arrOfStrings = ["madam", "dad", "el","sithing"]
 let result= smallestString(arrOfStrings)
 console.log(result)