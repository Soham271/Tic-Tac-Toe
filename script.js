let boxes=document.querySelectorAll(".box"); 
let reset=document.querySelector("#reset");
let newbutton=document.querySelector(".new-button");
let msgcontainer=document.querySelector(".msg-container ");
let msg=document.querySelector("#msg");
let turn0=true;
  let arr=[[1,2,3],[4,5,6],[7,8,9]];
  const winpatterns = {
    0: [0, 1, 2],
    1: [3, 4, 5],
    2: [6, 7, 8],
    3: [0, 3, 6],
    4: [1, 4, 7],
    5: [2, 5, 8],
    6: [0, 4, 8],
    7: [2, 4, 6],
};
const resetgame = () => {
  turn0 = true;
  enable();
  msgcontainer.classList.add("hide");
  msg.innerText = ""; // Clear the message text
  boxes.forEach(box => {
      box.innerText = ""; // Clear the text inside each box
  });
};
const disable=()=>{
  for( let box of boxes){
  box.disabled=true;
  boxes.innerText="";
  }
  };
const enable=()=>{
  for( let box of boxes){
  box.disabled=false;
  boxes.innerText="";
  }
  };
  const ShowDraw=()=>{
    msg.innerText="Match is Draw Noone is winner";
    msgcontainer.classList.remove("hide");
disable();
  }
const showWinner=(winner)=>{
msg.innerText="Winner"+"is"+"= > "+winner;
msgcontainer.classList.remove("hide");
disable();
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      if(turn0){//playero
            box.innerText="O";
            turn0=false;
      }
      else{//player x
        box.innerText="X";
        turn0=true;
      }
      box.disabled=true;
      checkwinner();
    })
})
const checkwinner=()=>{
    for(const[key,pattern] of Object.entries(winpatterns)){
        const[a,b,c]=pattern;
        if(                boxes[a].innerText!==""
            &&                 boxes[b].innerText!==""
            &&   boxes[c].innerText!==""
        ){
            if(
         
                boxes[a].innerText===boxes[b].innerText &&
                boxes[a].innerText===boxes[c].innerText
            )
            {
              showWinner(boxes[a].innerText);
            }
           
        }
       
    }
}
reset.addEventListener("click",resetgame);
newbutton.addEventListener("click",resetgame);