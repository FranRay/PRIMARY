var k = 1;
function show3(){
  while (k == 1) {
  document.getElementById("hiddenOne").innerHTML += `
  ________________________________________
  <br><br>
  There is nothing quite like the shock I go through in that moment. For some reason, it makes me think of <a class="primo" href="../primo/primo-3.html">Primo</a>. Apparently, he’s made quite a success story for himself. What that boy did was terrible but I can’t help but think that if we somehow bumped into him too, the first thing I’d do is hug him tighter than I can manage.
  <br><br>
  Nuclear bomb… explosion… 
  <br><br>
  <a class="next" href="../rylie/rylie-4.html">…end of the world</a>, huh?
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
  “...the 67th United States President threatens nuclear war on the Republic of Zubrovkia for violating the Cyber Network Treaty that endangered billions of US citizens. 
  <br><br>
  The UN is unclear on whether to take this threat seriously and retreat to a Nuclear Warfare Protocol for countries around the globe. 
  <br><br>
  Currently the US owns over 50,000 nuclear warheads scattered in different territories around the world. If her threat is made true, it might just end the world as we know it. UK Prime Minister Yohan J...” 
  <br><br>
  For a bit, we both fall <button onclick="show3();">silent and confused</button>.
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
  “Oh I’m so sorry, I-- <a class="maddox" href="../maddox/maddox-3.html">Maddox</a>?” 
  <br><br>
  “RYLIE?!”
  <br><br>
  This week just couldn’t get any weirder. But my god, am I thrilled to see her. We catch up on everything. I tell her about South Africa, my art, and taking over the flower shop; they tell me about all their wacky adventures in all those different countries. 
  <br><br>
  I show her a vintage Flat Screen TV from the 21st century.
  <br>
  “I’ve been eyeing this one for a while.” I reveal to her. 
  <br>
  “Woah, this is super old. I didn’t even know you could convert holograms to 2D…”
  <br><br>
  The more I look at it, the more I realise it’s displaying something familiar, “Is it... <button onclick="show2();">playing the news</button>?” 
  <br><br>
  `;
  i++;
  }
}