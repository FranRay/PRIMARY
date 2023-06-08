function show2() {
  document.getElementById("hiddenOne").innerHTML = 
  `The whole way there, I have the weirdest mix of 70% nerves, 20% excitement, and 10% resentment. I shouldn’t have to explain why that is. 
  <br><br>
  When Maddox gets there, we both run into his arms and give him the biggest sandwich hug we can give. This feels like… I’m back to being 15 years old and we’re celebrating some incredibly stupid idea that had a chance of probably killing us. 
  <br><br>
  We pull away and Primo speaks up, “...have you heard the news?” 
  <br><br>
  “We all have. Look, we don’t even know if it’s real. I mean, if the world really was ending, we probably wouldn’t be given a heads-up.” Maddox replies. 
  <br><br>
  “I don’t know, World Conspiracy News was pretty convincing on their Holo Gram post. 6:25 pm sounds like a reasonable time to wipe out all of humanity.”, I joke.
  <br><br>
  “<a class="next" href="../rylie/rylie-6.html">Come on, let’s head inside.</a>”`;
}

var i = 1;
function show(){
  while (i == 1) {
  document.getElementById("hiddenOne").innerHTML += `
  <br><br>
  ________________________________________
  <br><br>
  :D preemo (Sent 4:56 PM): Hey… it’s been a while. I was in town and wondered if maybe you wanted to come meet me by our spot at Frank’s tomorrow? Cocoa’s on me.
  <br><br>
  I… don’t know what to say. What is anyone supposed to say in this situation? Am I meant to be angry? Flattered? Excited??
  <br><br>
  I’ve been staring at the screen for far too long. 
  <br><br>
  To: :D preemo
  RYLIE (typing…): woah hey! i’ll be there… can’t wait :) yeah, you’d better be treating us, Mr. fortune 500 
  <br><br>
  And now I’m staring for even longer. I send this text and I will probably get the biggest whiplash of my life. There is so much anxiety on my shoulders and the option of just <a class="next" href="../rylie/rylie-5.html">ignoring him</a> is winning over the option to <button onclick="show2();">hit send</button>.
  `;
  i++;
  }
}