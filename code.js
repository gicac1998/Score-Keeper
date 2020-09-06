var p1 = document.querySelector ("#p1");
var p2 = document.getElementById ("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector ("#p1Display");
var p2Display = document.querySelector ("#p2Display");
var numInput = document.querySelector ("input");
var newValue = document.querySelector("#newValue");
var p1Score  = 0;
var p2Score  = 0;
var gameOver = false;
var winningScore = 5;

p1.addEventListener ("click", function(){
  if (!gameOver){
    p1Score++;
    if (p1Score === winningScore){
      p1Display.classList.add("winner");
      gameOver = true;
      alert ("Game Over!! Player 1 Wins");
    }
    p1Display.textContent = p1Score;
  }
});
p2.addEventListener ("click", function(){
  if (!gameOver){
    p2Score++;
    if (p2Score === winningScore){
      p2Display.classList.add("winner");
      gameOver = true;
      alert ("Game Over!! Player 2 Wins");
    }
    p2Display.textContent = p2Score;
  }
});
resetButton.addEventListener ("click",function (){
  reset ();
});
function reset (){
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove ("winner");
  p2Display.classList.remove ("winner");
  gameOver = false;
}
numInput.addEventListener ("change", function(){
  newValue.textContent = this.value;
  winningScore = Number (this.value);
  reset();
});
