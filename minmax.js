function minMax(arr){
        let small=[]
        for(let i=0; i<arr.length; i++){
            let value=arr[i]
            let value1=arr[i+1]
            if(value<=value1 ){
                small.push(value)
            }
        }
        return small;
    }
    
    let arr=[1,2,-1]
    let result=minMax(arr)
    console.log(result)
    
    
    
    // //comparing for minimum
    // function minMax(arr){
    //     let stack=[]
    //     for(let i=0; i<arr.length; i++){
    //         let value1=arr[i]
    //         stack.push(value1)
        
    //     }
    //     for(let i=0; i<arr.length; i++){
    //         let value=arr[i]
    //          let compare=stack.pop()
    //         if(value<compare){
    //            console.log(value)
    //         }else{
    
    //         }
            
    //     }
    
    // }
    // let myArr=[3,2,1]
    // let result=minMax(myArr)
    // console.log(result)
    
    // // //comparing for maximum
    // function minMax1(arr){
    //     let stack=[]
    //     for(let i=0; i<arr.length; i++){
    //         let value1=arr[i]
    //         stack.push(value1)
        
    //     }
    //     for(let i=0; i<arr.length; i++){
    //         let value=arr[i]
    //          let compare=stack.pop()
    //         if(value>compare){
    //            console.log(value)
    //         }else{
    
    //         }
            
    //     }
    
    // }
    // let arr=[3,2,15]
    // let finalResult=minMax1(arr)
    // console.log(finalResult)
    
    // function max(arr){
    //     let maximum=[0]
    //     for(let i=0; i<arr.length; i++){
    //         let value=arr[i]
    //         if(value>maximum){
    //             maximum=value
    //         } 
    //     }
    //     return maximum;
    // }
    
    // let arr=[15,2,9,20]
    // let solution=max(arr)
    // console.log(solution)