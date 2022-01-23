var randomNumber1 = Math.round(Math.random()*5)+1;
var imageRandom = "images\\dice"+randomNumber1+".png";
document.querySelector("img.img1").setAttribute("src",imageRandom);
var randomNumber2 = Math.round(Math.random()*5)+1;
var imageRandom2 = "images\\dice"+randomNumber2+".png";
document.querySelector("img.img2").setAttribute("src",imageRandom2);

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else if (randomNumber1==randomNumber2){
  document.querySelector("h1").innerHTML="Draw!";
}
