/* ===========================
   ELEMENTS
=========================== */

const page = document.getElementById("page");

const productImage = document.getElementById("productImage");
const logo = document.getElementById("logo");

const imageUpload = document.getElementById("imageUpload");
const bgUpload = document.getElementById("bgUpload");
const logoUpload = document.getElementById("logoUpload");

const downloadPNG = document.getElementById("downloadPNG");
const downloadPDF = document.getElementById("downloadPDF");

const dropZone = document.getElementById("dropZone");


/* ===========================
   PRODUCT IMAGE CHANGE
=========================== */

imageUpload.addEventListener("change", function () {

const file = this.files[0];

if(!file) return;

const reader = new FileReader();

reader.onload = function(e){

productImage.src = e.target.result;

}

reader.readAsDataURL(file);

});


/* ===========================
   LOGO CHANGE
=========================== */

logoUpload.addEventListener("change", function () {

const file = this.files[0];

if(!file) return;

const reader = new FileReader();

reader.onload = function(e){

logo.src = e.target.result;

}

reader.readAsDataURL(file);

});


/* ===========================
   BACKGROUND CHANGE
=========================== */

bgUpload.addEventListener("change", function () {

const file = this.files[0];

if(!file) return;

const reader = new FileReader();

reader.onload = function(e){

page.style.backgroundImage =
`url(${e.target.result})`;

page.style.backgroundSize = "cover";
page.style.backgroundPosition = "center";

}

reader.readAsDataURL(file);

});


/* ===========================
   DRAG & DROP IMAGE
=========================== */

dropZone.addEventListener("dragover",function(e){

e.preventDefault();

dropZone.classList.add("dragover");

});

dropZone.addEventListener("dragleave",function(){

dropZone.classList.remove("dragover");

});

dropZone.addEventListener("drop",function(e){

e.preventDefault();

dropZone.classList.remove("dragover");

const file = e.dataTransfer.files[0];

if(!file) return;

const reader = new FileReader();

reader.onload=function(event){

productImage.src = event.target.result;

}

reader.readAsDataURL(file);

});
