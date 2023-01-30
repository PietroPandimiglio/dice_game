function lancioDadi() {
  var randNum1 = Math.floor(Math.random() * 6) + 1;
  var randNum2 = Math.floor(Math.random() * 6) + 1;


  if (randNum1 == 1) {
    document.querySelector(".img1").src = "images/dice1.png"
  } else if (randNum1 == 2) {
    document.querySelector(".img1").src = "images/dice2.png"
  } else if (randNum1 == 3) {
    document.querySelector(".img1").src = "images/dice3.png"
  } else if (randNum1 == 4) {
    document.querySelector(".img1").src = "images/dice4.png"
  } else if (randNum1 == 5) {
    document.querySelector(".img1").src = "images/dice5.png"
  } else if (randNum1 == 6) {
    document.querySelector(".img1").src = "images/dice6.png"
  }

  if (randNum2 == 1) {
    document.querySelector(".img2").src = "images/dice1.png"
  } else if (randNum2 == 2) {
    document.querySelector(".img2").src = "images/dice2.png"
  } else if (randNum2 == 3) {
    document.querySelector(".img2").src = "images/dice3.png"
  } else if (randNum2 == 4) {
    document.querySelector(".img2").src = "images/dice4.png"
  } else if (randNum2 == 5) {
    document.querySelector(".img2").src = "images/dice5.png"
  } else if (randNum2 == 6) {
    document.querySelector(".img2").src = "images/dice6.png"
  }

  if(randNum1>randNum2) {
    document.querySelector(".heading").innerHTML = "🚩Player 1 WIN!"
  } else if(randNum1<randNum2) {
      document.querySelector(".heading").innerHTML = "Player 2 WIN!🚩"
  } else if(randNum1==randNum2) {
      document.querySelector(".heading").innerHTML = "🚩DRAW!!🚩"
  }

}
