const fs = require("fs");

let filename= "input";
let filecontent = fs.readFileSync(filename, "utf-8");
let fileArr = filecontent.split('\n');
fileArr.pop();

for(let a of fileArr) {
	for(let b of fileArr) {
		for(let c of fileArr) {
			if( Number(a)+Number(b)+Number(c) == 2020) {
				console.log("matched " + a + "+" + b + "+" + c + ". Multiplied: " + (Number(a)*Number(b)*Number(c)) );
			}
		}
	} 
}
