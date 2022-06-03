function runProgram(input) {
	input = input.split("\n")
	let line = 0
	let n = +input[line]
	line++
	let arr = input[line].trim().split(" ").map(Number)
	line++
// 	console.log(n,arr)
	reverseArray(n,arr)
}
function reverseArray(n,arr){
    let left = 0
    let right = n-1
    while(left<right){
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right]= temp
        left++
        right--
    }
    console.log(arr.join(" "))
}


if (process.env.USERNAME === "Ujjawal Prakash") {
	runProgram(`5
    1 2 3 4 5`);
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