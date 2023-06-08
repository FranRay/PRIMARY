var j = 1;
function show2(){
  while (j == 1) {
  document.getElementById("hiddenOne").innerHTML += `
  ________________________________________
  <br><br>
  Remember when I said I wanted to keep doing things so that I could forget about feeling regret?
  <br><br>
  I think I failed that mission.
  <br><br>
  So, the world didn’t physically end. But I think mine ended when I decided to take that flight to Florida.
  <br><br>
  Yeah, that’s another one to add to the regret pile.
  <br><br>
  <h3>[FIN.]</h3>
  <h6>to play again, please close this tab.</h6>
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
  That’s not what I’m mad about, though. I mean yeah sure, there probably was a big possibility of the world actually ending and the entire planet just exploding into thin air or whatever. I’m mad about how easy it was for me to just turn my back on the two people I love the most in this planet-that-was-supposed-to-explode. 
  <br><br>
  For a week, my mind was just filled with what-if’s. At some point I just got tired of the voice in my head telling me I should’ve stayed, that it just drove me insane and I had the urge to just <button onclick="show2()">jump off the surfboard</button> while I was practicing. 
  <br><br>
  `;
  i++;
  }
}