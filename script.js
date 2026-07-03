// Product Image Upload

const uploadInput = document.getElementById("uploadImage");
const productImage = document.getElementById("productImage");

if (uploadInput && productImage) {
    uploadInput.addEventListener("change", function (e) {

        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (event) {
            productImage.src = event.target.result;
        };

        reader.readAsDataURL(file);

    });
}

// Make Enter key behave like normal text

document.querySelectorAll("[contenteditable]").forEach(el => {

    el.addEventListener("keydown", function (e) {

        if (e.key === "Enter") {

            e.preventDefault();

            document.execCommand("insertHTML", false, "<br>");

        }

    });

});

// Print Button

const printBtn = document.createElement("button");

printBtn.innerText = "🖨 Print";

printBtn.style.position = "fixed";
printBtn.style.right = "20px";
printBtn.style.bottom = "20px";
printBtn.style.padding = "12px 22px";
printBtn.style.border = "none";
printBtn.style.borderRadius = "8px";
printBtn.style.background = "#b88400";
printBtn.style.color = "#fff";
printBtn.style.fontSize = "16px";
printBtn.style.cursor = "pointer";
printBtn.style.zIndex = "9999";

document.body.appendChild(printBtn);

printBtn.onclick = () => window.print();
