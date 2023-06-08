function show2() {
  document.getElementById("hiddenOne").innerHTML = 
  `I decide to stay. I hug Primo so unbelievably tight that I think I constrict his breathing for a few seconds. <br><br>We pull away and Primo speaks up, “...have you heard the news?”<br><br>“We all have. Look, we don’t even know if it’s real. I mean, if the world really was ending, we probably wouldn’t be given a heads-up.” I replied (I think I definitely cried into Primo’s shirt). <br><br>“I don’t know, World Conspiracy News was pretty convincing on their Holo Gram post. 6:25 pm sounds like a reasonable time to wipe out all of humanity.” Riley jokes.<br><br>There’s a giggle shared between us. My god, I’ve missed these losers.<br><br>“<a class="next" href="../maddox/maddox-6.html">Come on, let’s head inside.</a>”`;
}

var i = 1;
function show(){
  while (i == 1) {
  document.getElementById("hiddenOne").innerHTML += `
  ________________________________________
  <br><br>
  primo❤ (Sent 4:56 PM): Hey… it’s been a while. I was in town and wondered if maybe you wanted to come meet me by our spot at Frank’s tomorrow? Cocoa’s on me.
  <br><br>
  That little bugger - disappears for 8 years and decides to come back the day the world’s supposed to end saying he wants to meet up over hot cocoa. I think I should be mad, but honestly, the shock and sudden feeling of nostalgia just washes over me. 
  <br><br>
  Well, that’s before I realise that I’d have to miss my flight that leaves… tonight. 
  <br><br>
  I consider my (very limited) set of options:
  <br>
  1. Be an idiot and <button onclick="show2()">go to Frank’s tomorrow</button> with Primo and <a class="rylie" href="../rylie/rylie-4.html">Rylie</a> and literally risk being stuck here for all of eternity.
  <br>
  2. Be an idiot and <a class="next" href="../maddox/maddox-5.html">prepare for my flight</a> and miss the reunion and probably never see my best friends ever again.
  <br>
  3. Be an idiot and-- well that’s it. There’s no other way out. What the hell am I gonna do.
  `;
  i++;
  }
}