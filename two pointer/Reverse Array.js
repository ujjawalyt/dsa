function runProgram(input) {
	input = input.split("\n")
	let line =0
	let [n,k] = input[line].trim().split(" ").map(Number)
	line++
	let arr = input[line].trim().split(" ").map(Number)
	line++
// 	console.log(n,k,arr)
	ReverseArray(n,k,arr)
}

function ReverseArray(n,k,arr){
    let left = k
    let right = n-1;
    while(left<right){
        let temp = arr[right]
        arr[right] = arr[left]
        arr[left] = temp
        left++
        right--
    }
    console.log(arr.join(" "))
} 


if (process.env.USERNAME === "Ujjawal Prakash") {
	runProgram(`6 2
    1 2 3 4 5 6`);
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