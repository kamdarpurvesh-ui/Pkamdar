const PASSWORD="0708";

const input=document.getElementById("password");

const button=document.getElementById("unlockBtn");

const message=document.getElementById("message");

const login=document.querySelector(".login-box");

const welcome=document.getElementById("welcomeScreen");

const dashboard=document.getElementById("dashboard");

const music=new Audio("music.mp3");

music.loop=true;

button.onclick=()=>{

if(input.value===PASSWORD){

music.play().catch(()=>{});

login.style.display="none";

welcome.style.display="flex";

setTimeout(()=>{

welcome.style.display="none";

dashboard.style.display="block";

},2500);

}

else{

message.style.color="#ff8b8b";

message.innerHTML="Wrong Password ❤️";

input.value="";

navigator.vibrate?.(250);

}

};

/* ==========================
MEMORIES PAGE
========================== */

const memoriesCard =
document.getElementById("memoriesCard");

const memoriesPage =
document.getElementById("memoriesPage");

const backFromMemories =
document.getElementById("backFromMemories");

memoriesCard.onclick=()=>{

dashboard.style.display="none";

memoriesPage.style.display="block";

};

backFromMemories.onclick=()=>{

memoriesPage.style.display="none";

dashboard.style.display="block";

};

/* ==========================
PHOTO VIEWER
========================== */

const viewer =
document.getElementById("photoViewer");

const viewerImg =
document.getElementById("viewerImage");

const closeViewer =
document.getElementById("closeViewer");

document
.querySelectorAll(".gallery img")
.forEach(img=>{

img.onclick=()=>{

viewer.style.display="flex";

viewerImg.src=img.src;

};

});

closeViewer.onclick=()=>{

viewer.style.display="none";

};

viewer.onclick=(e)=>{

if(e.target===viewer){

viewer.style.display="none";

}

};

/* LETTER PAGE */

const letterCard =
document.getElementById("letterCard");

const letterPage =
document.getElementById("letterPage");

const backFromLetter =
document.getElementById("backFromLetter");

letterCard.onclick=()=>{

dashboard.style.display="none";

letterPage.style.display="block";

};

backFromLetter.onclick=()=>{

letterPage.style.display="none";

dashboard.style.display="block";

};

/* ==========================
ENVELOPE PAGE
========================== */

const envelopeCard =
document.getElementById("envelopeCard");

const envelopePage =
document.getElementById("envelopePage");

const backFromEnvelope =
document.getElementById("backFromEnvelope");

const envelopeBox =
document.getElementById("envelopeBox");

const flap =
document.getElementById("flap");

const letterCardInside =
document.getElementById("letterCardInside");

const memoryText =
document.getElementById("memoryText");

let opened=false;

envelopeCard.onclick=()=>{

dashboard.style.display="none";

envelopePage.style.display="block";

};

backFromEnvelope.onclick=()=>{

envelopePage.style.display="none";

dashboard.style.display="block";

};

envelopeBox.onclick=()=>{

if(opened)return;

opened=true;

flap.style.transform="rotateX(180deg)";

setTimeout(()=>{

letterCardInside.style.opacity="1";

letterCardInside.style.bottom="135px";

memoryText.innerHTML="❤️ One of my favourite memories ❤️";

},700);

};

/* HEART METER */

const heartCard =
document.getElementById("radioCard");

const heartPage =
document.getElementById("heartPage");

const backFromHeart =
document.getElementById("backFromHeart");

const startLove =
document.getElementById("startLove");

const percent =
document.getElementById("lovePercent");

const loveMessage =
document.getElementById("loveMessage");

const heart =
document.getElementById("bigHeart");

heartCard.onclick=()=>{

dashboard.style.display="none";

heartPage.style.display="block";

};

backFromHeart.onclick=()=>{

heartPage.style.display="none";

dashboard.style.display="block";

};

startLove.onclick=()=>{

let values=[
0,
8,
17,
29,
45,
67,
89,
100,
150,
500,
9999
];

let i=0;

let interval=setInterval(()=>{

percent.innerHTML=values[i]+"%";

if(values[i]>=100){

heart.innerHTML="❤️";

}

if(i==values.length-1){

clearInterval(interval);

percent.innerHTML="∞";

loveMessage.innerHTML="❤️ No meter can ever measure how much I love you. My love for you is Infinite. ❤️";

}

i++;

},600);

};

/* ==========================
FLOATING HEARTS
========================== */

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=

(4+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},600);

/* ==========================
SPARKLES
========================== */

for(let i=0;i<35;i++){

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.style.left=Math.random()*100+"vw";

sparkle.style.top=Math.random()*100+"vh";

sparkle.style.animationDelay=

Math.random()*2+"s";

document.body.appendChild(sparkle);

}

/* ==========================
CARD CLICK ANIMATION
========================== */

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("click",()=>{

card.style.transform="scale(.94)";

setTimeout(()=>{

card.style.transform="scale(1)";

},150);

});

});

/* ==========================
WELCOME EFFECT
========================== */

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="1s";

document.body.style.opacity="1";

},100);

});