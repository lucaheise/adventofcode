const fs = require("fs");

let filename = "input";
let filecontent = fs.readFileSync(filename, "UTF-8");
let fileArr = filecontent.split('\n');

let lineLength = fileArr[0].length;

let slopeX = [1,3,5,7,1];
let slopeY = [1,1,1,1,2];

//Bäume zählen
let answers = [];
for(let n = 0; n<slopeX.length; n++) {
  answers.push(searchTrees(slopeX[n], slopeY[n]));
}
console.log(answers);


//Ergebnisse zusammenrechnen
let gesamt = 0;
answers.forEach((num) => {
  if(gesamt==0) {
    gesamt=num;
  } else {
    gesamt=gesamt*num;
  }
})
console.log(gesamt);


function searchTrees(right, down) {
  let trees = 0;
  let x = 0;

  for(let y = 0; y<fileArr.length-1; y=y+down) {
    let selected = fileArr[y].substr(x, 1);
    x=x+right;

    if(selected == "#") {
      trees++;
    }

    if(x>=lineLength) {
      x=x-lineLength;
    }

  }

  return trees;
}

