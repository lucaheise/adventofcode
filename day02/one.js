const fs = require("fs");

let filename= "input";
let filecontent = fs.readFileSync(filename, "utf-8");
let fileArr = filecontent.split('\n');
fileArr.pop();

let valids = 0;

for(let line of fileArr) {
	console.log(line);

	let parts = line.split(' ');

	let min = parts[0].split('-')[0];
	let max = parts[0].split('-')[1];
	let character = parts[1].replace(':', '');
	let passwd = parts[2];
	
	let characterCount = passwd.split(character).length-1;
	console.log("occur: " + characterCount);

	if( (min<=characterCount) && (characterCount<=max) ) {
		console.log("match");
		valids++;
	}

	console.log('-------------');
}

console.log("valids: " + valids);


