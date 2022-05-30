function runProgram(input) {
	input = input.split("\n")
	let testCase = +input[0]
	let line = 1
	for(let i=0;i<testCase;i++){
	    let n = +input[line]
	    line++
	    let arr = input[line].trim().split(" ").map(Number)
	    line++
	    let k = +input[line]
	    line++;
	    pairlessthanK(arr,k)
	}
	
}
function pairlessthanK(arr, target){
     let max = -1;
     for(let i=0;i<arr.length;i++){
         let sum =0;
         for(let j=i;j<arr.length;j++){
             sum  = arr[i] + arr[j]
             if(sum < target && max < sum && i !== j){
                 max = sum;
             }
         }
     }
     console.log(max)
}


if (process.env.USERNAME === "Ujjawal Prakash") {
	runProgram(`2
    5
    1 2 3 4 5
    7
    3
    30 10 20
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