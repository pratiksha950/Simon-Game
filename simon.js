let gameSequence=[];
let userSequence=[];
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

    let randomIdx=Math.floor(Math.random()*btns.length);
    let randomColor=btns[randomIdx];
    let randomBtn=document.querySelector(`.${randomColor}`);
    // console.log(randomIdx);
    // console.log(randomColor);
    // console.log(randomBtn);
    gameSequence.push(randomColor);
    console.log(gameSequence);
    gameFlash(randomBtn);
}
    function checkAns(){
        // console.log("current level:",level);
        let idx=level-1;
        if(userSequence[idx]==gameSequence[idx]){
            if(userSequence.length==gameSequence.length){
                levelUp();
            }
            
            console.log("same value");
        }else{
            // h2.innerText=`Game over ${level}`
            h2.innerText="Game over! press any key";
        }
    }


function btnPress(){
    let btn=this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    userSequence.push(userColor);
    console.log(userColor);
    checkAns();

}
let allBtns=document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
}


