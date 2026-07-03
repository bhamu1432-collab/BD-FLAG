// ============================
// PRODUCT IMAGE UPLOAD
// ============================

const uploadBtn = document.getElementById("uploadProduct");
const productInput = document.getElementById("productInput");
const productImage = document.getElementById("productImage");

uploadBtn.addEventListener("click", () => {
    productInput.click();
});

productInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        productImage.src = e.target.result;

    };

    reader.readAsDataURL(file);

});


// ============================
// DOWNLOAD A4 PNG
// ============================

document.getElementById("downloadBtn").addEventListener("click", () => {

    const page = document.getElementById("capture");

    html2canvas(page, {

        scale:4,
        useCORS:true,
        backgroundColor:null

    }).then(canvas=>{

        const link=document.createElement("a");

        link.download="Catalogue-A4.png";

        link.href=canvas.toDataURL("image/png");

        link.click();

    });

});


// ============================
// AUTO SAVE TEXT
// ============================

const inputs=document.querySelectorAll("input");

inputs.forEach((input,index)=>{

    const key="catalogue_"+index;

    if(localStorage.getItem(key)){

        input.value=localStorage.getItem(key);

    }

    input.addEventListener("input",()=>{

        localStorage.setItem(key,input.value);

    });

});


// ============================
// CTRL + P PRINT
// ============================

document.addEventListener("keydown",(e)=>{

    if(e.ctrlKey && e.key==="p"){

        e.preventDefault();

        window.print();

    }

});
