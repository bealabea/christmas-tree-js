let outputHtml = document.getElementById('output');

let startIndex = 5
let endIndex = 5;
for (let i = 0; i < 6; i++) {
  for(let j =0; j < 11; j++) {
    let box = document.createElement('div');
    box.classList.add('box-style');
    outputHtml.append(box);
    if(j >= startIndex && j <= endIndex){
      box.classList.add('colored');
    }
  }
startIndex--
endIndex++
}