function runProgram(input) {
	input = input.split("\n")
	line = 0
	let [n, target] = input[line].trim().split(" ").map(Number)
	line++
	let arr = input[line].trim().split(" ").map(Number)
// 	console.log(n,target,arr)
   goingForward(n,target,arr)
}
function goingForward(n,target,arr){
    let count = 0
    for(let i=0;i<n;i++){
        if(arr[i]>=arr[target-1]&&arr[i]>0){
            count++
        }
    }
    console.log(count)
}



if (process.env.USERNAME === "Ujjawal Prakash") {
	runProgram(`8 5
    10 9 8 7 7 7 5 5`);
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