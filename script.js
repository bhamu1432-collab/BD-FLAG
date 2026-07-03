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
