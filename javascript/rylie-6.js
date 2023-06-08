var n = 1;
function show6(){
  while (n == 1) {
  document.getElementById("hiddenOne").innerHTML += `
  Primo and Maddox, they were with me.
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
  It’s funny, I (and everyone else) am taken out of the world and I still manage to leave it the same way I came in – with some sort of <button onclick="show6();">constant</button> with me.
  <br><br>
  `;
  m++;
  }
}

var l = 1;
function show4(){
  while (l == 1) {
  document.getElementById("hiddenOne").innerHTML += `
  I think the last thing I saw was the deer that was a few meters away from <button onclick="show5();">crossing the road</button>. 
  <br><br>
  `;
  l++;
  }
}

var k = 1;
function show3(){
  while (k == 1) {
  document.getElementById("hiddenOne").innerHTML += `
  ________________________________________
  <br><br>
  Somehow, I’m thankful that it happens in a quick flash of blinding white light covering the planet and subsequently <button onclick="show4();">destroying it</button>.
  <br><br>
  `;
  k++;
  }
}

var j = 1;
function show2(){
  while (j == 1) {
  document.getElementById("hiddenOne").innerHTML += `
  ________________________________________
  <br><br>
  I haven’t been right about many things in my life; I’ve always walked with uncertainty in almost every step I took.
  <br><br>
  I remember coming home that day after the news broke – there were a million and one theories in my head about how the world would end. If it would end. <button onclick="show3();">When it would end</button>.
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
  [PRESENT DAY - 2116]
  “Rylie, put some Phoebe on. You know the one.” Maddox breaks the silence in the car. We’re heading to the hilltops after our dinner at Frank’s.
  <br><br>
  ‘I Know the End’ by Phoebe Bridgers starts playing. And then I’m reminded of that end of the world thing from a week ago and ask, “Hey, what time is it? Isn’t it a few minutes to the end of the world?”
  <br><br>
  “It’s 6:23 pm.” Primo answers from the back.
  <br><br>
  “Ooooo, 2 minutes.” Maddox teases.
  <br><br>
  There was a moment in those 2 minutes that I felt everything slow down. I don’t know if they felt it, but I certainly did. 
  <br><br>
  (“Currently the US owns over 50,000 nuclear warheads scattered in different territories around the world. If her threat is made true, it might <button onclick="show2();">just end the world as we know it</button>.”)
  <br><br>
  `;
  i++;
  }
}