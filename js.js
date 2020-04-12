hem();


function hem(params) {
    var randomNumber1 = Math.floor(Math.random()*6)+1;
var source1= "dice"+randomNumber1+".png";
var setter1 = document.querySelectorAll("img")[0];
setter1.setAttribute("src",source1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var source2= "dice"+randomNumber2+".png";
var setter2 = document.querySelectorAll("img")[1];
setter2.setAttribute("src",source2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🎊Player 1 Wins";

}
else if(randomNumber2>randomNumber1) {

     document.querySelector("h1").innerHTML="🎊Player 2 Wins";
} else {
    document.querySelector("h1").innerHTML="🎊 Draw";
}
    
}
