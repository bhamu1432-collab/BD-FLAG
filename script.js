// -----------------------------
// Product Image Upload
// -----------------------------

const imageDrop = document.getElementById("imageDrop");
const imageInput = document.getElementById("imageInput");
const productPreview = document.getElementById("productPreview");
const placeholder = document.querySelector(".placeholder");

imageDrop.addEventListener("click", () => {
    imageInput.click();
});

imageInput.addEventListener("change", function () {
    loadProduct(this.files[0]);
});

imageDrop.addEventListener("dragover", function (e) {
    e.preventDefault();
    imageDrop.style.borderColor = "#0b7cff";
});

imageDrop.addEventListener("dragleave", function () {
    imageDrop.style.borderColor = "gold";
});

imageDrop.addEventListener("drop", function (e) {

    e.preventDefault();

    imageDrop.style.borderColor = "gold";

    loadProduct(e.dataTransfer.files[0]);

});

function loadProduct(file){

if(!file) return;

const reader = new FileReader();

reader.onload=function(e){

productPreview.src=e.target.result;

productPreview.style.display="block";

placeholder.style.display="none";

}

reader.readAsDataURL(file);

}



// -----------------------------
// Logo Upload
// -----------------------------

const logoDrop=document.getElementById("logoDrop");

const logoInput=document.getElementById("logoInput");

const logoPreview=document.getElementById("logoPreview");

const logoText=logoDrop.querySelector("span");

logoDrop.onclick=()=>logoInput.click();

logoInput.onchange=()=>loadLogo(logoInput.files[0]);

logoDrop.addEventListener("dragover",e=>{

e.preventDefault();

logoDrop.style.borderColor="#0b7cff";

});

logoDrop.addEventListener("dragleave",()=>{

logoDrop.style.borderColor="gold";

});

logoDrop.addEventListener("drop",e=>{

e.preventDefault();

logoDrop.style.borderColor="gold";

loadLogo(e.dataTransfer.files[0]);

});

function loadLogo(file){

if(!file)return;

const reader=new FileReader();

reader.onload=function(e){

logoPreview.src=e.target.result;

logoPreview.style.display="block";

logoText.style.display="none";

}

reader.readAsDataURL(file);

}



// -----------------------------
// Download PNG
// -----------------------------

document.getElementById("downloadPNG").onclick=function(){

html2canvas(document.querySelector("#catalogue"),{

scale:3,

useCORS:true

}).then(canvas=>{

const link=document.createElement("a");

link.download="Catalogue.png";

link.href=canvas.toDataURL();

link.click();

});

}



// -----------------------------
// Download PDF
// -----------------------------

document.getElementById("downloadPDF").onclick=function(){

html2canvas(document.querySelector("#catalogue"),{

scale:3,

useCORS:true

}).then(canvas=>{

const img=canvas.toDataURL("image/png");

const { jsPDF } = window.jspdf;

const pdf=new jsPDF("p","mm","a4");

pdf.addImage(img,"PNG",0,0,210,297);

pdf.save("Catalogue.pdf");

});

}



// -----------------------------
// Editable Protection
// -----------------------------

document.querySelectorAll("[contenteditable]").forEach(el=>{

el.spellcheck=false;

});



// -----------------------------
// Gold Shine Animation
// -----------------------------

setInterval(()=>{

document.querySelectorAll(".badge,.toolbar button").forEach(el=>{

el.animate([

{filter:"brightness(1)"},

{filter:"brightness(1.35)"},

{filter:"brightness(1)"}

],{

duration:1800

});

});

},2500);
