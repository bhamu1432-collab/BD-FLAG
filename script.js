
const productDrop=document.getElementById("imageDrop");
const productInput=document.getElementById("imageInput");
const productImg=document.getElementById("productPreview");
const placeholder=document.querySelector(".placeholder");

productDrop.onclick=()=>productInput.click();

productInput.onchange=e=>{
loadImage(e.target.files[0]);
};

productDrop.addEventListener("dragover",e=>{
e.preventDefault();
productDrop.style.borderColor="#0b7cff";
});

productDrop.addEventListener("dragleave",()=>{
productDrop.style.borderColor="#d4af37";
});

productDrop.addEventListener("drop",e=>{
e.preventDefault();
productDrop.style.borderColor="#d4af37";
loadImage(e.dataTransfer.files[0]);
});

function loadImage(file){

if(!file)return;

const reader=new FileReader();

reader.onload=e=>{

productImg.src=e.target.result;

productImg.style.display="block";

placeholder.style.display="none";

};

reader.readAsDataURL(file);

}


// Logo

const logoDrop=document.getElementById("logoDrop");
const logoInput=document.getElementById("logoInput");
const logoPreview=document.getElementById("logoPreview");
const logoText=document.querySelector(".drop-text");

logoDrop.onclick=()=>logoInput.click();

logoInput.onchange=e=>{

loadLogo(e.target.files[0]);

};

logoDrop.addEventListener("dragover",e=>{

e.preventDefault();

});

logoDrop.addEventListener("drop",e=>{

e.preventDefault();

loadLogo(e.dataTransfer.files[0]);

});

function loadLogo(file){

if(!file)return;

const reader=new FileReader();

reader.onload=e=>{

logoPreview.src=e.target.result;

logoPreview.style.display="block";

logoText.style.display="none";

};

reader.readAsDataURL(file);

}



// PNG Download

document.getElementById("downloadPNG").onclick=async()=>{

const canvas=await html2canvas(document.getElementById("catalogue"),{

scale:3,

backgroundColor:"#ffffff",

useCORS:true

});

const a=document.createElement("a");

a.download="Catalogue.png";

a.href=canvas.toDataURL("image/png");

a.click();

};


// PDF Download

document.getElementById("downloadPDF").onclick=async()=>{

const canvas=await html2canvas(document.getElementById("catalogue"),{

scale:3,

backgroundColor:"#ffffff",

useCORS:true

});

const img=canvas.toDataURL("image/png");

const {jsPDF}=window.jspdf;

const pdf=new jsPDF("p","mm","a4");

pdf.addImage(img,"PNG",0,0,210,297);

pdf.save("Catalogue.pdf");

};


// Disable spellcheck

document.querySelectorAll("[contenteditable]").forEach(el=>{

el.spellcheck=false;

});


// Gold glow animation

setInterval(()=>{

document.querySelectorAll(".toolbar button,.code").forEach(el=>{

el.animate([

{filter:"brightness(1)"},

{filter:"brightness(1.3)"},

{filter:"brightness(1)"}

],{

duration:1800

});

});

},2500);
