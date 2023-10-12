let display= document.getElementById("result")
let btnreset=document.getElementById("reset")
let box=document.querySelectorAll(".cell")

let o="<img src='o_image.png'>"
let x="<img src='x_image.png'>"
let oo="<img src='oo_image.png'>"

let winpossibale=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let options=["","","","","","","","",""]
let firstpalyer=x;
let running=false;
let player="X"

function init(){

    box.forEach((box)=>{
        box.addEventListener("click",boxclick)
        running=true
        btnreset.addEventListener("click",resetgame)
        display.textContent=`${player} Your Turn`
    })
}
init()
function boxclick(){
    let index=this.dataset.cell 
    if(options[index]!=""||!running){
        return
    }
    updatebox(this,index)
    checkwinner()
}

function updatebox(box,index){
    options[index]=player;
    box.innerHTML=firstpalyer
}

function changerplayer(){
    player=(player=='X')?"O":"X";
    firstpalyer=(firstpalyer==x) ? o :x;
    display.textContent=`${player} Your Turn` 

}
function checkwinner(){
    let iswon=false
    for(let i=0;i<winpossibale.length;i++){
        const condition=winpossibale[i];
        const box1=options[condition[0]]
        const box2=options[condition[1]]
        const box3=options[condition[2]]

        if(box1=="" || box2=="" || box3==""){
            continue
        }
        if(box1==box2 && box2==box3){
            iswon=true
            box[condition[0]].classList.add('win')
            box[condition[1]].classList.add('win')
            box[condition[2]].classList.add('win')

        }

    }
    if(iswon){
        display.textContent=`${player} Won...`
        running=false
    }else if(!options.includes("")){
        display.textContent=`Game Draw ..!`
        running=false
    }else{
        changerplayer()
    }
}
function resetgame(){
 options=["","","","","","","","",""]
 firstpalyer=x;
 running=true;
 player="X"

 display.textContent=`${player} Your Turn` 
 box.forEach(box=>{
    box.innerHTML=""
    box.classList.remove('win')
    
 })

}

