function runProgram(input) {
    input = input.split("\n")
	let tc= +input[0]
	let line = 1
	for(let i=0;i<tc;i++){
	    let [n,target] = input[line].trim().split(" ").map(Number)
	    line++
	    let arr = input[line].trim().split(" ").map(Number)
	    line++
	  let result= twosum(arr,target,n)
	  console.log(result)
	}
}
function twosum(arr,target,n){
    let left =0
    let right = n-1
    while(left<right){
        sum = arr[left]+arr[right]
        if(sum==target){
            return `${left} ${right}`
        }else if(sum>target){
            right--
        }else{
            left++
        }
    }
    return '-1 -1'
}


if (process.env.USERNAME === "Ujjawal Prakash") {
	runProgram(`3
    4 9
    2 7 11 15
    5 10
    1 2 3 5 5
    2 100
    48 49`);
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