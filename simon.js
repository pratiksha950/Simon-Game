let gameSequence=[];
let UserSequence=[];
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250)
}
function levelUp(){  
    level++;
    h2.innerText=`level ${level}`;

    let randomIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randomIdx];
    let randomBtn=document.querySelector(`.${randomColor}`)
    console.log(randomIdx);
     console.log(randomColor);
     console.log(randomBtn);
     gameFlash(randomBtn);
        
}
function btnPress(){
    let btn=this;
    userFlash(btn);

}
let allBtns=document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
}


