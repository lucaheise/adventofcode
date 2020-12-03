const fs = require("fs");

let filename= "input";
let filecontent = fs.readFileSync(filename, "utf-8");
let fileArr = filecontent.split('\n');
fileArr.pop();

let valids = 0;

for(let line of fileArr) {
	console.log(line);

	let parts = line.split(' ');
	console.log(parts);

	let pos1 = parts[0].split('-')[0];
	let pos2 = parts[0].split('-')[1];
	let character = parts[1].replace(':', '');
	let passwd = parts[2];

	let char1 = passwd.substr(pos1-1, 1);
	let char2 = passwd.substr(pos2-1, 1);

	if( ((char1==character) && (char2!=character)) || ((char1!=character) && (char2==character)) ) {
		console.log("match");
		valids++;
	}

	console.log('-------------');
}

console.log("valids: " + valids);
