// ===============================
// ELEMENTS
// ===============================

const logoBtn = document.getElementById("logoBtn");
const logoInput = document.getElementById("logoInput");
const logoImage = document.getElementById("logoImage");

const productBtn = document.getElementById("productBtn");
const productInput = document.getElementById("productInput");
const productImage = document.getElementById("productImage");

const downloadBtn = document.getElementById("downloadBtn");

// ===============================
// LOGO UPLOAD
// ===============================

logoBtn.onclick = () => logoInput.click();

logoInput.onchange = e => {

    const file = e.target.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onload = ev => {

        logoImage.src = ev.target.result;

    }

    reader.readAsDataURL(file);

};

// ===============================
// PRODUCT UPLOAD
// ===============================

productBtn.onclick = () => productInput.click();

productInput.onchange = e => {

    const file = e.target.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onload = ev => {

        productImage.src = ev.target.result;

    }

    reader.readAsDataURL(file);

};

// ===============================
// DOWNLOAD PNG
// ===============================

downloadBtn.onclick = () => {

html2canvas(document.getElementById("capture"),{

scale:4,
useCORS:true

}).then(canvas=>{

const a=document.createElement("a");

a.download="Catalogue.png";

a.href=canvas.toDataURL("image/png");

a.click();

});

};

// ===============================
// AUTO SAVE
// ===============================

document.querySelectorAll("[contenteditable]").forEach((el,i)=>{

const key="cat_"+i;

if(localStorage.getItem(key))
el.innerHTML=localStorage.getItem(key);

el.oninput=()=>{

localStorage.setItem(key,el.innerHTML);

}

});
