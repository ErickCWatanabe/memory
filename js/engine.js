const emoji=[
"🦊",
"🦊",
"🦄",
"🦄",
"🐧",
"🐧",
"🐶",
"🐶",
"🦁",
"🦁",
"🐭",
"🐭",
"🐮",
"🐮",
"🐸",
"🐸",
]
let openCards=[]
let shuffle=emoji.sort(()=>(Math.random()>0.5?2:-1))
for (let index = 0; index < emoji.length; index++) {
    let box=document.createElement("div");
    box.className="item";
    box.innerHTML=shuffle[index];
    document.querySelector(".game").appendChild(box);
    box.onclick=cliquei
}
function cliquei() {
    playSound("flip")
    if (openCards.length<2) {
        this.classList.add("boxOpen");
        openCards.push(this)
} 
if (openCards.length===2) {
            setTimeout(checkM,500);
        }
}
function checkM() {
    if (openCards[0].innerHTML===openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
        playSound("card")

    }else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }
    openCards=[];
    if (document.querySelectorAll(".boxMatch").length===emoji.length) {
        playSound("won");
        playSound("won1")
        alert("Você venceu!");
    }
}
function playSound(audioName) {
    let audio = new Audio(`./sound/${audioName}.mp3`);
    audio.volume = 1.0;
    audio.play();
  }