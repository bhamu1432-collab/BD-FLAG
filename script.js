// =========================
// ELEMENTS
// =========================

const logoBtn = document.getElementById("logoBtn");
const logoInput = document.getElementById("logoInput");
const logoImage = document.getElementById("logoImage");

const productBtn = document.getElementById("productBtn");
const productInput = document.getElementById("productInput");
const productImage = document.getElementById("productImage");

const downloadBtn = document.getElementById("downloadBtn");


// =========================
// LOGO UPLOAD
// =========================

logoBtn.addEventListener("click", () => logoInput.click());

logoInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = e => {

        logoImage.src = e.target.result;

    };

    reader.readAsDataURL(file);

});


// =========================
// PRODUCT UPLOAD
// =========================

productBtn.addEventListener("click", () => productInput.click());

productInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = e => {

        productImage.src = e.target.result;

    };

    reader.readAsDataURL(file);

});


// =========================
// DOWNLOAD A4
// =========================

downloadBtn.addEventListener("click", () => {

    document.body.classList.add("download-mode");

    html2canvas(document.getElementById("capture"), {

        scale:4,
        useCORS:true,
        backgroundColor:null

    }).then(canvas => {

        const link = document.createElement("a");

        link.download = "Catalogue-A4.png";

        link.href = canvas.toDataURL("image/png");

        link.click();

        document.body.classList.remove("download-mode");

    });

});


// =========================
// AUTO SAVE TEXT
// =========================

const editable = document.querySelectorAll("[contenteditable='true']");

editable.forEach((el, i) => {

    const key = "catalogue_" + i;

    if (localStorage.getItem(key)) {

        el.innerHTML = localStorage.getItem(key);

    }

    el.addEventListener("input", () => {

        localStorage.setItem(key, el.innerHTML);

    });

});


// =========================
// DRAG PRODUCT IMAGE
// =========================

let dragging = false;
let offsetX = 0;
let offsetY = 0;

productImage.style.position = "relative";

productImage.addEventListener("mousedown", e => {

    dragging = true;

    offsetX = e.offsetX;

    offsetY = e.offsetY;

});

document.addEventListener("mousemove", e => {

    if (!dragging) return;

    productImage.style.position = "absolute";

    productImage.style.left =
        (e.pageX - productImage.parentElement.offsetLeft - offsetX) + "px";

    productImage.style.top =
        (e.pageY - productImage.parentElement.offsetTop - offsetY) + "px";

});

document.addEventListener("mouseup", () => {

    dragging = false;

});


// =========================
// PRINT
// =========================

window.addEventListener("keydown", e => {

    if (e.ctrlKey && e.key === "p") {

        e.preventDefault();

        window.print();

    }

});
