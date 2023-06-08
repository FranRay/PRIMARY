var n = 1;
function show6(){
 while (n == 1) {
  document.getElementById("hiddenOne").innerHTML += `
  <br><br>
  I guess I’m glad I sent that text, then.
  <br><br>
  <h3>[FIN.]</h3>
  <h6>to play again, please close this tab.</h6>
  `;
  n++;
 }
}

var m = 1;
function show5(){
 while (m == 1) {
  document.getElementById("hiddenOne").innerHTML += `
  <br><br>
  The world really did <button onclick="show6()">end</button>.
  `;
  m++;
 }
}

var l = 1;
function show4(){
 while (l == 1) {
  document.getElementById("hiddenOne").innerHTML += `
  <br><br>
  The news outlets were right to be <button onclick="show5()">scared</button>.
  `;
  l++;
 }
}

var k = 1;
function show3(){
 while (k == 1) {
  document.getElementById("hiddenOne").innerHTML += `
  <br><br>
  The billboards said “The End is Near” and <button onclick="show4()">near, it was</button>.
  `;
  k++;
 }
}

var j = 1;
function show2(){
 while (j == 1) {
  document.getElementById("hiddenOne").innerHTML += `
  <br><br>
  ________________________________________
  <br><br>
  So,... 
  <br><br>
  ...the bomb really did <button onclick="show3()">go off</button>. 
  `;
  j++;
 }
}

var i = 1;
function show(){
  while (i == 1) {
  document.getElementById("hiddenOne").innerHTML += `
  ________________________________________
  <br><br>
  It’s a blinding white light that appears in-front of my face. And then, a feeling of calm. The last thing I probably saw before that was the dice dangling below Rylie’s front mirror. I don’t even remember hearing anything, the sound was probably too slow to reach my ears before I…
  <br><br>
  ...died?
  <br><br>
  <button onclick="show2()">Huh.</button>
  `;
  i++;
  }
}