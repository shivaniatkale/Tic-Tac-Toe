let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
let count=0;// to track draw

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


const resetGame =() =>{
    turnO =true;
    enableBoxes();
    msgcontainer.classList.add("hide");

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

const gameDraw=()=>{
    msg.innerText=`Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes =() =>{
    for(let box of boxes){
        box.disabled =true;
    }
};

const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText="";
    }
};

const showWinner = (winner) =>{
    msg.innerText=`Congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner=()=>{
    for(let pattern of winPatterns){
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;
    
    if(pos1val != "" && pos2val != "" && pos3val != "" ){
        if(pos1val===pos2val && pos2val===pos3val){
          
            showWinner(pos1val);
        }
    }
    }
};

newgamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


