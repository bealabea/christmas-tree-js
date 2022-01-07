// function createBox(stampHtml){
//     let box = document.createElement('div');
//     box.classList.add('box-style');
//     stampHtml.append(box);
//     return box;
// }

// function createGrid(x, y, row, column, style) {
//   let startIndex = x;
//   let endIndex = y;
//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < column; j++) {
//       let box = document.createElement("div");
//       box.classList.add("box-style");
//       outputHtml.append(box);
//       if (j >= startIndex && j <= endIndex) {
//         box.classList.add(style);
//         let boxInside = document.createElement("div");
//         box.append(boxInside);
//       }
//     }
//     startIndex--;
//     endIndex++;
//   }

//   boxInside.classList.add()
// }

let outputHtml = document.getElementById("output");

let starIndex = 5;
for (let k = 0; k < 1; k++) {
  for (let j = 0; j < 11; j++) {
    let box = document.createElement("div");
    box.classList.add("box-style");
    outputHtml.append(box);
    if (j === starIndex) {
      // Dichiaro boxInside, creando un elemento
      let boxInside = document.createElement("div");
      boxInside.classList.add("star-box");
      // Lo stampo dentro il box principale
      box.append(boxInside);
    }
  }
}

let startIndex = 5;
let endIndex = 5;
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 11; j++) {
    let box = document.createElement("div");
    box.classList.add("box-style");
    outputHtml.append(box);
    if (j >= startIndex && j <= endIndex) {
      box.classList.add("colored");
      let boxInside = document.createElement("div");
      boxInside.classList.add("balls-box");
      box.append(boxInside);
    }
  }
  startIndex--;
  endIndex++;
}

startIndex = 5;
endIndex = 5;
for (let k = 0; k < 2; k++) {
  for (let j = 0; j < 11; j++) {
    let box = document.createElement("div");
    box.classList.add("box-style");
    outputHtml.append(box);
    if (j === startIndex && j === endIndex) {
      box.classList.add("brown");
    }
  }
}


