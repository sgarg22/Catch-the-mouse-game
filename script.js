var gamebox = document.querySelector("#gamebox");

var attacker = document.createElementNS("http://www.w3.org/2000/svg", "rect");

var score = 0;
// set up the position of box (X axis)
var oldPositionX=0;
// set up the position of box (y axis)
var oldPositionY=0;
// set up the position of new box (X axis) after moving
var newPositionX=2;
// set up the position of  new box (y axis)
var newPositionY=2;


var scoreUpdated = document.querySelector("#score");

function updatescore() {
    scoreUpdated.innerHTML = score;

}
function spawnattacker() {
    attacker.setAttribute("width", 35);
    attacker.setAttribute("height", 35);
    attacker.setAttribute("fill", "red");
    attacker.setAttribute("x", newPositionX);
    attacker.setAttribute("y", newPositionY);
    gamebox.appendChild(attacker);
}

var target = document.createElementNS("http://www.w3.org/2000/svg", "rect");

function spawnvictim() {
    attacker.setAttribute("width", 20);
    attacker.setAttribute("height", 20);
    attacker.setAttribute("fill", "#");
    oldPositionX = 5 + Math.random() * 565;
    oldPositionY = 5 + Math.random() * 580;

    attacker.setAttribute("x", oldPositionX);
    attacker.setAttribute("y", oldPositionY);
    gamebox.appendChild(attacker);
}

var game = false;
function submit(){
    var name = document.querySelector("#name");
    if(name.value !== ""){
        var game = true;
       
    }
}
var pokodown=()=>setInterval(function(){
    
    if( game==true){
        if(direction=="down"){
        newPositionX=newPositionX;
        newPositionY+=1;
        createPoko();
        checkBorder(newPositionX,newPositionY);   
    }

    else if (direction=="up") {
        newPositionX=newPositionX;
        newPositionY-=1;
        createPoko();
        checkBorder(newPositionX,newPositionY);
        
    } 

    else if (direction=="left") {
        newPositionX-=1;
        newPositionY=newPositionY;
        createPoko();
        checkBorder(newPositionX,newPositionY);
    } 

    else if (direction=="right") {
        newPositionX+=1;
        newPositionY=newPositionY;
        createPoko();
        checkBorder(newPositionX,newPositionY);

    }
    else{
        newPositionX+=1;
        newPositionY=newPositionY;
        createPoko();
        checkBorder(newPositionX,newPositionY);

    }
    
    }},5);

var direction="";
function directionUp(){direction="up";}
function directionDown(){direction="down";}
function directionLeft(){direction="left";}
function directionRight(){direction="right";}

//adding the events to pokodown
document.addEventListener("DOMContentLoaded",pokodown);
// adding the events to directionUp
document.getElementById("up").addEventListener("mouseover",directionUp);
// adding the events to directiondown
document.getElementById("down").addEventListener("mouseover",directionDown);
// adding the events to directionleft
document.getElementById("left").addEventListener("mouseover",directionLeft);
// adding the events to directionRight
document.getElementById("right").addEventListener("mouseover",directionRight);
// adding the events to Restart
document.getElementById("restart").addEventListener("click",setRestart);

document.getElementById("Submit").addEventListener("click",SetSubmit);