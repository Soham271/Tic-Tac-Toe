let userScore=document.querySelector("#user-score");
let use=0;
let comp=0;
let Compscore=document.querySelector("#computer-score");
let msg=document.querySelector("#change");
let choices=document.querySelectorAll(".choice");
const showWin=(userwin)=>{
    if(userwin){
      msg.innerText="Hurry You won!"
      msg.style.backgroundColor="green"
      msg.style.color="white"
     use++;
     userScore.innerText=use;
    }
    else{
        msg.innerText="Sad You Loose!"
        msg.style.backgroundColor="#980C0C";
        msg.style.color="white"
        comp++;
        Compscore.innerText=comp;
    }
}
const gencompchoice=()=>{
    const option=["rock","paper","scissor"];
   const randidx=Math.floor(Math.random()*3);
return option[randidx];
}
const playgame=(userchoice)=>{

    console.log("the user choice is",userchoice);
    const Compchoice=gencompchoice();
    console.log("the Comp choice is",Compchoice);
   
    if(userchoice===Compchoice){
            drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=Compchoice==="paper"?false:true;
        }
        if(userchoice==="paper"){
            userwin=Compchoice==="scissor"?false:true;
        }
        else{
            userwin=Compchoice==="rock"?false:true;
        }
        showWin(userwin);
    }
}
const drawgame=()=>{
    msg.innerText="Both Choice are Same";
    
   
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    
   const userchoice=choice.getAttribute("id");
  
   playgame(userchoice);
    });
});