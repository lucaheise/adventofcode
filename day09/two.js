const fs = require("fs");

let filename = "input";
let filecontent = fs.readFileSync(filename, "utf-8");
let fileArr = filecontent.split("\n");
fileArr.pop();

for(let i = 0; i<fileArr.length; i++) {
	fileArr[i] = Number(fileArr[i]);
}

preamble = 25;
let invalidNumber;

for(let i = preamble; i<fileArr.length; i++) {

	let previous = fileArr.slice(i-preamble, i);
	//console.log(previous);

	let current = fileArr[i];
	//console.log("Search for: " + current);

	let matched = false;
	for(let a of previous) {
		for(let b of previous) {
			if(a!=b && a+b == current) {
				matched = true;
			}
		}
	}

	if(!matched) {
		console.log("no match for " + current);
		invalidNumber = current;
		break;
	}

}


for(let i = 0; i<fileArr.length; i++) {
	let current = 0;
	let range = [];
	for(let n = i; n<fileArr.length; n++) {
		console.log("adding " + fileArr[n]);
		current += fileArr[n];
		range.push(fileArr[n]);
		if(current == invalidNumber) {
			console.log("Found It!");
			break;
		}
		console.log("Invalid: " + invalidNumber + " current: " + current);
	}
	if(current == invalidNumber) {

		let min = Math.min(...range);
		let max = Math.max(...range);

		console.log("min: " + min + " max: " + max + " sum: " + (min+max));
		break;
	}


}





