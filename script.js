// ==============================
// Premium Catalogue Script
// ==============================

const productImage = document.getElementById("productImage");
const zoomImage = document.getElementById("zoomImage");

const imageInput = document.getElementById("imageInput");
const changeImage = document.getElementById("changeImage");

const downloadBtn = document.getElementById("downloadBtn");

const catalogue = document.getElementById("catalogue");

//========================
// Change Image
//========================

changeImage.addEventListener("click", () => {
    imageInput.click();
});

imageInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        productImage.src = e.target.result;
        zoomImage.src = e.target.result;

        localStorage.setItem("productImage", e.target.result);

    };

    reader.readAsDataURL(file);

});

//========================
// Restore Image
//========================

window.addEventListener("load", () => {

    const img = localStorage.getItem("productImage");

    if (img) {

        productImage.src = img;
        zoomImage.src = img;

    }

});

//========================
// Save Editable Text
//========================

const editable = document.querySelectorAll("[contenteditable='true']");

editable.forEach((item, index) => {

    const key = "editable_" + index;

    const saved = localStorage.getItem(key);

    if (saved) {

        item.innerHTML = saved;

    }

    item.addEventListener("input", () => {

        localStorage.setItem(key, item.innerHTML);

    });

});

//========================
// Undo / Redo
//========================

document.addEventListener("keydown", function (e) {

    if (e.ctrlKey && e.key === "z") {

        e.preventDefault();
        document.execCommand("undo");

    }

    if (e.ctrlKey && e.key === "y") {

        e.preventDefault();
        document.execCommand("redo");

    }

});

//========================
// Download JPG
//========================

downloadBtn.addEventListener("click", () => {

    html2canvas(catalogue, {

        scale:3,
        useCORS:true,
        backgroundColor:null

    }).then(canvas => {

        const link = document.createElement("a");

        link.download = "Bhagwan-Catalogue.jpg";

        link.href = canvas.toDataURL("image/jpeg",1);

        link.click();

    });

});

//========================
// Double Click Image
//========================

productImage.addEventListener("dblclick", () => {

    imageInput.click();

});

//========================
// Zoom Sync
//========================

productImage.onload = () => {

    zoomImage.src = productImage.src;

};

//========================
// Drag Image
//========================

let isDragging = false;

let startX = 0;
let startY = 0;

let posX = 0;
let posY = 0;

productImage.style.position = "relative";

productImage.addEventListener("mousedown", e => {

    isDragging = true;

    startX = e.clientX - posX;
    startY = e.clientY - posY;

});

document.addEventListener("mousemove", e => {

    if (!isDragging) return;

    posX = e.clientX - startX;
    posY = e.clientY - startY;

    productImage.style.left = posX + "px";
    productImage.style.top = posY + "px";

});

document.addEventListener("mouseup", () => {

    isDragging = false;

});preview.style.borderColor="#d4af37";

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
