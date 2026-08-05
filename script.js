const startBtn = document.getElementById("startBtn");
const welcome = document.getElementById("welcome");
const heartContainer = document.getElementById("heartContainer");

const particles = [];
const TOTAL = 90;

const SCALE = Math.min(window.innerWidth, window.innerHeight) / 45;

function heartPoint(t){

    const x = 16 * Math.pow(Math.sin(t),3);

    const y =
        13 * Math.cos(t)
        -5 * Math.cos(2*t)
        -2 * Math.cos(3*t)
        -Math.cos(4*t);

    return{
        x:x*SCALE,
        y:-y*SCALE
    };

}

function random(min,max){

    return Math.random()*(max-min)+min;

}

function createParticles(){

    for(let i=0;i<TOTAL;i++){

        const span=document.createElement("span");

        span.className="loveWord";

        span.innerHTML="i love you";

        heartContainer.appendChild(span);

        const angle=(Math.PI*2/TOTAL)*i;

        const target=heartPoint(angle);

        particles.push({

            el:span,

            x:random(0,window.innerWidth),

            y:random(0,window.innerHeight),

            tx:window.innerWidth/2+target.x,

            ty:window.innerHeight/2+target.y,

            size:random(12,22)

        });

        span.style.fontSize = "20px";


    }

}

function animate(){

    particles.forEach(p=>{

        p.x+=(p.tx-p.x)*0.025;

        p.y+=(p.ty-p.y)*0.025;

        p.el.style.left=p.x+"px";

        p.el.style.top=p.y+"px";

    });

    requestAnimationFrame(animate);

}

startBtn.onclick=()=>{

    welcome.style.opacity="0";

    setTimeout(()=>{

        welcome.style.display="none";

        createParticles();

        animate();

    },700);

};
