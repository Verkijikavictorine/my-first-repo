// function compareStrings(str){
//         let lastPosition=str.length-1
//              let rightLetter=str[lastPosition-1]
//              if(leftLetter!==rightLetter){
//                  return false
        
//             }return true
//        }
//     let myStr=("madame")
//     let res=compareStrings(myStr)
//     console.log(res)
    // creat an empty array
    // push all the elements in the array(stack)
    // loop through the array and compare with the stack
    // if any dismatch then its not a stack 
    function isPalindrome(str){
        let stack=[]
        for(let i=0; i<str.length; i++){
            let value1=str[i]
            stack.push(value1)
        
        }
        for(let i=0; i<str.length; i++){
            let value3=str[i]
             let stackTop=stack.pop()
            if(value3!==stackTop){
               return false
            }
            
        }
    return true
    }
    let myString=("madam")
    let result=isPalindrome(myString)
    console.log(result)
    
    // abbbc
    // abbc
    
//     function is_Palindrome2(str){
//         let fullLength = str.length;
//         let leftPointer;
//         let rightPointer
//         if(fullLength % 2 ===0){
//             leftPointer = fullLength/2 -1
//             rightPointer = leftPointer + 1
//         }else{
//             leftPointer = parseInt(fullLength/2)-1
//             rightPointer = leftPointer + 2
//         }
    
//         while(leftPointer>=0){
//             let leftChar = str[leftPointer]
//             let rightChar = str[rightPointer]
//             if(leftChar !== rightChar){
//                 return false
//             }
//             leftPointer--
//             rightPointer++
//         }
//         return true;
//     }
    
//     const myStr = 'abbaabba';
//     const result = is_Palindrome2(myStr)
    
//     console.log(result)
// }







// function sum(array){
//     let result=[]
//     let target= 8
//                 for(let i=0;i<array.length;i++){
//                     let value1 = array[i]
//                     for(j=0;j<array.length;j++){
//                         let value2 = array[j]
//                         if(value1+ value2=== target){
//                             result.push([value1 ,value2]);
//                         }
                        
//                     }
//                 }
//                 return result
//             }
// let arr=[1,2,3,4,5,6];
// let expectedValues= sum(arr)
// console.log(expectedValues);
