function replace() {
  document.getElementById("hiddenOne").innerHTML = `
  To: Maddox :) and ☼ Rylie 
  PRIMO (Sent 4:56 PM): Hey… it’s been a while. I was in town and wondered if maybe you wanted to come meet me by our spot at Frank’s tomorrow? 
  <button onclick="show();">Cocoa’s on me</button>.
  `;
}

var i = 1;
function show(){
  while (i == 1) {
  document.getElementById("hiddenOne").innerHTML += `
  <br><br>
  I see their figures come into view by the distance. Oh my god, it’s really them. They’re really here. Is that... are they running towards me? Do I… run to them as well..?
  <br><br>
  Before I knew it, I was engulfed in the tightest way a human could be hugged by two people. A barrage of two distinct smells hit my nose. There’s <a class = "rylie" href = "../rylie/rylie-4.html">lavender</a> - of sweetness and of delicacy. It feels like Rylie, like a weighted feather: a perfect balance. Then there is a sharp <a class = "maddox" href = "../maddox/maddox-4.html">vanilla musk</a> - it hits me right where I didn’t expect but it doesn’t feel like an attack. It’s Maddox, in all their whimsical glory.
  <br><br> 
  And then, I hear sobbing. I can’t tell if it’s coming from me or from my friends that are still hugging me as tight as ever. This moment feels like joy - it feels like home.
  <br><br>
  We pull away and I finally speak up, “...have you heard the news?”.
  <br><br>
  “We all have. Look, we don’t even know if it’s real. I mean, if the world really was ending, we probably wouldn’t be given a heads-up,” Maddox replies.
  <br><br>
  “I don’t know, World Conspiracy News was pretty convincing on their Hologram post. 6:25 pm sounds like a reasonable time to wipe out all of humanity.” Riley jokes.
  <br><br>
  There’s a giggle shared between us. My god, I’ve missed them.
  <br><br>
  “<a class="next" href="../primo/primo-6.html">Come on, let’s head inside.</a>”
  `;
  i++;
  }
}