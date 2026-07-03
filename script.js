document.addEventListener("DOMContentLoaded", () => {
    const imgBoxes = document.querySelectorAll(".product-img-box");

    imgBoxes.forEach((box) => {
        const fileInput = box.querySelector(".file-input");

        // Click karne par gallery/file manager open hoga
        box.addEventListener("click", () => {
            fileInput.click();
        });

        // Jab file input se select ho jaye
        fileInput.addEventListener("change", (e) => {
            handleFiles(e.target.files, box);
        });

        // Drag & Drop Events
        box.addEventListener("dragover", (e) => {
            e.preventDefault();
            box.classList.add("dragover");
        });

        box.addEventListener("dragleave", () => {
            box.classList.remove("dragover");
        });

        box.addEventListener("drop", (e) => {
            e.preventDefault();
            box.classList.remove("dragover");
            const files = e.dataTransfer.files;
            handleFiles(files, box);
        });
    });

    // File handling function to display the image
    function handleFiles(files, container) {
        if (files.length > 0) {
            const file = files[0];
            if (file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    // Box ke andar ka puraani text hatakar image lagana
                    container.innerHTML = `<img src="${e.target.result}" alt="Product Image">`;
                    // Dobara input tag add karna safety ke liye
                    const newInput = document.createElement("input");
                    newInput.type = "file";
                    newInput.accept = "image/*";
                    newInput.className = "file-input";
                    newInput.style.display = "none";
                    newInput.addEventListener("change", (event) => handleFiles(event.target.files, container));
                    container.appendChild(newInput);
                };
                reader.readAsDataURL(file);
            } else {
                alert("Kripya sirf Image file (.jpg, .png) hi use karein!");
            }
        }
    }
});
