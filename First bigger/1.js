function runProgram(input) {
	input = input.split("\n")
   let line = 0
	let n = +input[line]
	line++
	
	let arr = input[line].split(" ").map(Number)
	line++
	let testCase = +input[line]
	line++
	for(let i=0;i<testCase;i++){
	    target = +input[line]
	    line++
	    
// 	 console.log(arr,target)
firstBiggest(arr,target)
	  }

	   
	
}


function firstBiggest(arr,target){
//  1st method
    let firstMax = -1
  arr = arr.sort(function(a,b){return a-b})
     for(let i=0;i<arr.length;i++){
                if(arr[i]>target ){
                   
                    firstMax = arr[i]
                    break;
                }
     }
     console.log(firstMax)

    //  2 nd method

// let arr1 = []
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>target){
//         arr1.push(arr[i])
//     }
// }

// let ans = -1
//     let min = Infinity
// for(let i=0;i<arr1.length;i++){
//     if(arr1[i]<min){
//         min = arr1[i]
//         ans = arr1[i]
//     }
      
    
// }

// console.log(ans)
}

    


if (process.env.USERNAME === "Ujjawal Prakash") {
	runProgram(`10
    13 89 81 66 81 63 71 76 73 81
    2
    65
    15`);
} else {
	process.stdin.resume();
	process.stdin.setEncoding("ascii");
	let read = "";
	process.stdin.on("data", function (input) {
		read += input;
	});
	process.stdin.on("end", function () {
		read = read.replace(/\n$/, "");
		read = read.replace(/\n$/, "");
		runProgram(read);
	});
	process.on("SIGINT", function () {
		read = read.replace(/\n$/, "");
		runProgram(read);
		process.exit(0);
	});
}