// =========================
// BHAGWAN CATALOGUE PRO
// script.js
// =========================

const product = document.getElementById("product");
const zoomImage = document.getElementById("zoomImage");

const imageInput = document.getElementById("imageInput");
const changeBtn = document.getElementById("changeImageBtn");
const downloadBtn = document.getElementById("download");
const catalogue = document.getElementById("catalogue");

// --------------------------
// IMAGE CHANGE
// --------------------------

changeBtn.onclick = () => imageInput.click();

imageInput.onchange = function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        product.src = e.target.result;
        zoomImage.src = e.target.result;

        localStorage.setItem("productImage", e.target.result);

    };

    reader.readAsDataURL(file);

};

// --------------------------
// LOAD SAVED IMAGE
// --------------------------

window.onload = () => {

    const img = localStorage.getItem("productImage");

    if (img) {

        product.src = img;
        zoomImage.src = img;

    }

};

// --------------------------
// EDITABLE TEXT SAVE
// --------------------------

document.querySelectorAll("[contenteditable]").forEach((el, i) => {

    const key = "text_" + i;

    if (localStorage.getItem(key)) {

        el.innerHTML = localStorage.getItem(key);

    }

    el.addEventListener("input", () => {

        localStorage.setItem(key, el.innerHTML);

    });

});

// --------------------------
// DOWNLOAD JPG
// --------------------------

downloadBtn.onclick = () => {

    html2canvas(catalogue, {

        scale:3,

        useCORS:true,

        backgroundColor:"#ffffff"

    }).then(canvas => {

        const link = document.createElement("a");

        link.download = "Bhagwan-Catalogue.jpg";

        link.href = canvas.toDataURL("image/jpeg",1);

        link.click();

    });

};

// --------------------------
// UNDO REDO
// --------------------------

document.addEventListener("keydown", function(e){

    if(e.ctrlKey && e.key==="z"){

        e.preventDefault();

        document.execCommand("undo");

    }

    if(e.ctrlKey && e.key==="y"){

        e.preventDefault();

        document.execCommand("redo");

    }

});

// --------------------------
// IMAGE DRAG
// --------------------------

let dragging = false;

let startX,startY;

let left = 0;

let topPos = 0;

product.style.position="relative";

product.addEventListener("mousedown",(e)=>{

    dragging=true;

    startX=e.clientX-left;

    startY=e.clientY-topPos;

});

document.addEventListener("mousemove",(e)=>{

    if(!dragging) return;

    left=e.clientX-startX;

    topPos=e.clientY-startY;

    product.style.left=left+"px";

    product.style.top=topPos+"px";

});

document.addEventListener("mouseup",()=>{

    dragging=false;

});

// --------------------------
// DOUBLE CLICK CHANGE IMAGE
// --------------------------

product.ondblclick=()=>{

    imageInput.click();

};

// --------------------------
// ZOOM SYNC
// --------------------------

product.onload=()=>{

    zoomImage.src=product.src;

};
