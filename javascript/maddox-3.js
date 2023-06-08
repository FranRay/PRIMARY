var j = 1;
function show2(){
  while (j == 1) {
  document.getElementById("hiddenOne").innerHTML += `
  <br><br>
  ________________________________________
  <br><br>
  “The world’s ending at the hands of that vile woman? Couldn’t it have been an asteroid?!” I exclaim.
  <br><br>
  “Any word from Primo?” Rylie brings up. I’d say it was out of nowhere but considering the situation, I get why he’d ask.
  <br><br>
  “No,” I reply, “not since he disappeared into thin air. I think I <a class="primo" href="../primo/primo-2.html">saw him on the Fortune 500</a> list somewhere, actually.”
  <br><br>
  Rylie lets out a small, bitter laugh. <a class="next" href="../maddox/maddox-4.html">It’s a touchy subject for the both of us.</a>

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
  “...the 67th United States President threatens nuclear war on the Republic of Zubrovkia for violating the Cyber Network Treaty that endangered billions of US citizens. 
  <br><br>
  The UN is unclear on whether to take this threat seriously and retreat to a Nuclear Warfare Protocol for countries around the globe.
  <br><br>
  Currently the US owns over 50,000 nuclear warheads scattered in different territories around the world. If her threat is made true, it might just end the world as we know it. UK Prime Minister Yohan J...”
  <br><br>
  We both fall <button onclick="show2()">silent and confused</button> for a bit.
  `;
  i++;
  }
}