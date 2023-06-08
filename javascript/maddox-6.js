var m = 1;
function show5(){
  while (m == 1) {
  document.getElementById("hiddenOne").innerHTML += `
  That’s one more thing I won’t regret.
  <br><br>
  <h3>[FIN.]</h3>
  <h6>to play again, please close this tab.</h6>
  `;
  m++;
  }
}

var l = 1;
function show4(){
  while (l == 1) {
  document.getElementById("hiddenOne").innerHTML += `
  Huh…. I guess if anything, at least I got to spend my <button onclick="show5()">final moments</button> with them.
  <br><br>
  `;
  l++;
  }
}

var k = 1;
function show3(){
  while (k == 1) {
  document.getElementById("hiddenOne").innerHTML += `
  Well, shit. The woman really did <button onclick="show4()">push the button</button>.
  <br><br>
  `;
  k++;
  }
}

var j = 1;
function show2(){
  while (j == 1) {
  document.getElementById("hiddenOne").innerHTML += `
  Was that what that sound was? That <button onclick="show3()">distant boom</button> I caught before a flashing white light just came to consume everything in front of me?
  <br><br>
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
  Riley.
  <br><br>
  Riley is the last thing I think about, and the last thing I see before it all just… disappears. 
  <br><br>
  Wow, so I die and the world just ends and I’m not given a warning? 
  <br><br>
  Don’t be silly, the entire world was given a warning like a week ago. 
  <br><br>
  Well, how was I supposed to know it was actually <button onclick="show2()">going to happen?!</button>
  <br><br>
  `;
  i++;
  }
}