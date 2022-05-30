
let n = 12
let arr = [2, 0, 4, 9 ,2 ,0, 3, 5, 0 ,9, 8, 10]

competWithNeighour(n,arr)
function competWithNeighour(n,arr){
    let count =0
    for(let i=0;i<n;i++){
        
            
            if(i==0){
               if(arr[i]>arr[i+1]){
                   count++
               }
               }
               else if(i==n-1){
                      if (arr[i]>arr[i-1]){
                           count++
                       }
                   }
                   else if(arr[i]>arr[i+1]&&arr[i]>arr[i-1]){
                count++
            } 
                   }
               
            
        
    
    console.log(count)
}

