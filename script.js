// =============================
// ELEMENTS
// =============================

const page = document.getElementById("page");

const productImage = document.getElementById("productImage");
const logo = document.getElementById("logo");

const imageUpload = document.getElementById("imageUpload");
const logoUpload = document.getElementById("logoUpload");
const bgUpload = document.getElementById("bgUpload");

const downloadPNG = document.getElementById("downloadPNG");
const downloadPDF = document.getElementById("downloadPDF");


// =============================
// PRODUCT IMAGE CHANGE
// =============================

imageUpload.addEventListener("change", e => {

const file = e.target.files[0];

if(!file) return;

const reader = new FileReader();

reader.onload = function(ev){

productImage.src = ev.target.result;

}

reader.readAsDataURL(file);

});


// =============================
// LOGO CHANGE
// =============================

logoUpload.addEventListener("change", e => {

const file = e.target.files[0];

if(!file) return;

const reader = new FileReader();

reader.onload = function(ev){

logo.src = ev.target.result;

}

reader.readAsDataURL(file);

});


// =============================
// BACKGROUND CHANGE
// =============================

bgUpload.addEventListener("change", e=>{

const file = e.target.files[0];

if(!file) return;

const reader = new FileReader();

reader.onload = function(ev){

page.style.backgroundImage =
`url(${ev.target.result})`;

page.style.backgroundSize = "cover";

page.style.backgroundPosition = "center";

}

reader.readAsDataURL(file);

});


// =============================
// DRAG & DROP IMAGE
// =============================

const preview = document.getElementById("dropZone");

preview.addEventListener("dragover",(e)=>{

e.preventDefault();

preview.style.borderColor="#ff7a00";

});

preview.addEventListener("dragleave",()=>{

preview.style.borderColor="#d4af37";

});

preview.addEventListener("drop",(e)=>{

e.preventDefault();

preview.style.borderColor="#d4af37";

const file = e.dataTransfer.files[0];

if(!file) return;

const reader = new FileReader();

reader.onload=function(ev){

productImage.src=ev.target.result;

}

reader.readAsDataURL(file);

});
// ===============================
// DOWNLOAD PNG
// ===============================

downloadPNG.addEventListener("click", async () => {

const canvas = await html2canvas(page,{
scale:3,
useCORS:true,
backgroundColor:null
});

const link = document.createElement("a");

link.download="Catalogue.png";

link.href=canvas.toDataURL("image/png");

link.click();

});


// ===============================
// DOWNLOAD PDF
// ===============================

downloadPDF.addEventListener("click", async()=>{

const canvas = await html2canvas(page,{
scale:3,
useCORS:true
});

const img=canvas.toDataURL("image/png");

const { jsPDF }=window.jspdf;

const pdf=new jsPDF("p","mm","a4");

pdf.addImage(img,"PNG",0,0,210,297);

pdf.save("Catalogue.pdf");

});


// ===============================
// DRAG PRODUCT IMAGE
// ===============================

let dragging=false;

let startX=0;

let startY=0;

let x=0;

let y=0;

productImage.style.position="absolute";

productImage.style.left="50%";

productImage.style.top="50%";

productImage.style.transform="translate(-50%,-50%)";

productImage.addEventListener("mousedown",(e)=>{

dragging=true;

startX=e.clientX-x;

startY=e.clientY-y;

});

document.addEventListener("mousemove",(e)=>{

if(!dragging) return;

x=e.clientX-startX;

y=e.clientY-startY;

productImage.style.transform=`translate(${x}px,${y}px)`;

});

document.addEventListener("mouseup",()=>{

dragging=false;

});


// ===============================
// MOBILE TOUCH SUPPORT
// ===============================

productImage.addEventListener("touchstart",(e)=>{

dragging=true;

startX=e.touches[0].clientX-x;

startY=e.touches[0].clientY-y;

});

document.addEventListener("touchmove",(e)=>{

if(!dragging) return;

x=e.touches[0].clientX-startX;

y=e.touches[0].clientY-startY;

productImage.style.transform=`translate(${x}px,${y}px)`;

});

document.addEventListener("touchend",()=>{

dragging=false;

});


// ===============================
// IMAGE ZOOM
// ===============================

let scale=1;

productImage.addEventListener("wheel",(e)=>{

e.preventDefault();

if(e.deltaY<0){

scale+=0.05;

}else{

scale-=0.05;

}

if(scale<0.2) scale=0.2;

if(scale>4) scale=4;

productImage.style.scale=scale;

});
