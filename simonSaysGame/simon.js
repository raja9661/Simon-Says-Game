// let doc=document;
// doc.addEventListener("keypress",function()
// {
//     let head=document.querySelector("h2");
//     head.innerText="Level 1";
// })
let gameSeq=[];
let userSeq=[];
let level=0;
let hscore=0;
let btncolor=["coral","darkgray","palegreen","palevioletred"];
let firstclick=false;
let head=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(firstclick==false)
    {
      console.log("Game is started");
      firstclick=true;
      levelup();
    }
})
function gameflash(btn)
{
  btn.classList.add("flash")
  setTimeout(function(){
    btn.classList.remove("flash");
  },120)
}
function userflash(btn)
{
  btn.classList.add("userflash")
  setTimeout(function(){
    btn.classList.remove("userflash");
  },120)
}
function levelup()
{
  userSeq=[];
    level++;
    hscore=level;
    head.innerHTML=`level ${level}`;
    let randomNo=Math.floor(Math.random()*3);
    let randomcolor=btncolor[randomNo];
    let randomButton=document.querySelector(`.${randomcolor}`);
    // console.log(randomNo);
    // console.log(randomcolor);
    // console.log(randomButton);
    gameSeq.push(randomcolor);
    console.log(gameSeq)
    gameflash(randomButton);
}
function matchbtn(index)
{
  // console.log("current level",level);
  if(userSeq[index]===gameSeq[index])
  {
    if(userSeq.length===gameSeq.length)
    {
      setTimeout(levelup,1000)

    }
  }else{
    head.innerHTML=`game over! your score was <b>${level}</b><br> press any key to start`;
    console.log(`Higest Score is ${hscore}`);
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";
    },120)
    reset()
  }
}
function btnclick()
{
  // console.log(this);
  let btn=this;
  userflash(btn);
  let usercolor=btn.getAttribute("id");
  userSeq.push(usercolor);
  console.log(userSeq);
  matchbtn(userSeq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn)
{
  btn.addEventListener("click",btnclick);
}
function reset()
{
  firstclick=false;
  gameSeq=[];
  userSeq=[];
  level=0;
}