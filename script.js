const noBtn=document.getElementById("noBtn");
const yesBtn=document.getElementById("yesBtn");
const message=document.getElementById("message");
const music=document.getElementById("music");
function moveNo(){
noBtn.style.left=Math.random()*200+"px";
noBtn.style.top=Math.random()*120+"px";}
noBtn.addEventListener("mouseover",moveNo);
noBtn.addEventListener("touchstart",moveNo);
yesBtn.addEventListener("click",()=>{
message.classList.remove("hidden");
music.play();});