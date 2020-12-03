const fs = require("fs");

let filename = "input";
let filecontent = fs.readFileSync(filename, "UTF-8");
let fileArr = filecontent.split('\n');

let x = 0;
let lineLength = fileArr[0].length;
let trees = 0;

for(let y = 0; y<fileArr.length-1; y++) {
  console.log("Line " + y);
  let selected = fileArr[y].substr(x, 1);
  console.log("Selected: (" + x + "|" + y + ") " + selected);
  x=x+3

  if(x>=lineLength) {
    x=x-lineLength;
  }

  if(selected == "#") {
    trees++;
    console.log("MATCH");
  }

  console.log("-----------------------------------");

}

console.log("trees: " + trees);
