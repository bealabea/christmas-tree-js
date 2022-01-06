function createBox(stampHtml){
    let box = document.createElement('div');
    box.classList.add('box-style');
    stampHtml.append(box);
    return box;
}

let outputHtml = document.getElementById('output');

let emptyArray = [];

for(let i = 0; i < 8; i++){
for (let j = 0; j < 11; j++) {
    emptyArray.push(createBox(outputHtml));
}
}

console.log(emptyArray);


// function drawTree(h) {
//     for (let i = 0; i <= h; i++) {
//       let coloredSquare = "";
//       //Changed to coloredSquaret high then decrease
//       for (let k = 1; k <= ((h - i) +1); k++) {
//         //shortened to one space
//         coloredSquare = createBox(outputHtml);
//       }
//       for (let j = 0; j <= i; j++) {
//         //Added space so there is an odd number
//         //of symbols and the coloredSquare above fits
//         //the space
//         coloredSquare = createBox(outputHtml);
//         coloredSquare.classList.add("colored");
//       }
//       //Moved into the loop
//       console.log(coloredSquare);
//     }
//   }
//   drawTree(5);

//   let n = 6;
// let coloredSquare = createBox(outputHtml);
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     coloredSquare = createBox(outputHtml);
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     coloredSquare = createBox(outputHtml);
//     coloredSquare.classList.add("colored");
//   }
//   coloredSquare = "\n";
// }
// console.log(string);