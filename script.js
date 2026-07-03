document.addEventListener("DOMContentLoaded", () => {
    const dropZoneElement = document.getElementById("imageDropZone");
    const inputElement = document.getElementById("fileInput");
    const downloadBtn = document.getElementById("downloadBtn");
    const bannerElement = document.getElementById("banner");

    // Click to upload image
    dropZoneElement.addEventListener("click", () => { inputElement.click(); });
    inputElement.addEventListener("change", () => {
        if (inputElement.files.length) updateThumbnail(dropZoneElement, inputElement.files[0]);
    });

    // Drag & Drop event listeners
    dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone--over");
    });
    ["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, () => { dropZoneElement.classList.remove("drop-zone--over"); });
    });
    dropZoneElement.addEventListener("drop", (e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        }
        dropZoneElement.classList.remove("drop-zone--over");
    });

    // --- 1-CLICK IMAGE DOWNLOAD LOGIC ---
    downloadBtn.addEventListener("click", () => {
        // html2canvas banner div ko scan karke image data me badalta hai
        html2canvas(bannerElement, {
            useCORS: true,       // external images clear aane ke liye
            scale: 2,            // Image ko high quality (HD) rakhne ke liye
            backgroundColor: null // transparency maintain karne ke liye
        }).then(canvas => {
            // Canvas ko PNG url me convert kiya
            const imageURL = canvas.toDataURL("image/png");
            
            // Ek temporary anchor link banakar automatically click karwaya download ke liye
            const createLink = document.createElement("a");
            createLink.download = "custom-bhagwan-banner.png";
            createLink.href = imageURL;
            createLink.click();
        });
    });
});

function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone-thumb");
    if (dropZoneElement.querySelector(".drop-zone-prompt")) {
        dropZoneElement.querySelector(".drop-zone-prompt").remove();
    }
    if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.classList.add("drop-zone-thumb");
        dropZoneElement.appendChild(thumbnailElement);
    }
    if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = () => { thumbnailElement.style.backgroundImage = `url('${reader.result}')`; };
        reader.readAsDataURL(file);
    } else {
        thumbnailElement.style.backgroundImage = null;
    }
}
