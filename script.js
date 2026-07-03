document.querySelectorAll(".card").forEach(card=>{
card.addEventListener("mouseenter",()=>{
card.style.transform="translateY(-8px) scale(1.03)";
});

card.addEventListener("mouseleave",()=>{
card.style.transform="translateY(0) scale(1)";
});
});

const product=document.querySelector(".product");

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.pageX)/40;
const y=(window.innerHeight/2-e.pageY)/40;

product.style.transform=`rotateY(${x}deg) rotateX(${y}deg)`;
});
