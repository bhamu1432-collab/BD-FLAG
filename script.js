document.addEventListener("DOMContentLoaded", () => {
    const imgBoxes = document.querySelectorAll(".product-img-box");

    // Aapki provided remove.bg API Key yahan set ho gayi hai
    const REMOVE_BG_API_KEY = "2frV76yRm1SKXMH4DxH5E6h3"; 

    imgBoxes.forEach((box) => {
        const fileInput = box.querySelector(".file-input");

        box.addEventListener("click", () => {
            fileInput.click();
        });

        fileInput.addEventListener("change", (e) => {
            handleFiles(e.target.files, box);
        });

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
            handleFiles(e.dataTransfer.files, box);
        });
    });

    function handleFiles(files, container) {
        if (files.length > 0) {
            const file = files[0];
            if (file.type.startsWith("image/")) {
                
                // Processing loading indicator
                container.innerHTML = `<span class="upload-text" style="color: #E66A00; font-weight: bold; font-size: 7.5pt;">Removing BG...</span>`;

                const formData = new FormData();
                formData.append("image_file", file);
                formData.append("size", "auto");

                fetch("https://api.remove.bg/v1.0/removebg", {
                    method: "POST",
                    headers: {
                        "X-Api-Key": REMOVE_BG_API_KEY
                    },
                    body: formData
                })
                .then(response => {
                    if (response.ok) return response.blob();
                    throw new Error("BG Removal Failed or Credits Exhausted.");
                })
                .then(blob => {
                    const url = URL.createObjectURL(blob);
                    displayImage(url, container);
                })
                .catch(error => {
                    console.log(error.message);
                    // Agar API fail ho ya credits khatam ho jayein, toh safely normal image bina crash kiye load ho jayegi
                    const reader = new FileReader();
                    reader.onload = (e) => displayImage(e.target.result, container);
                    reader.readAsDataURL(file);
                });

            } else {
                alert("Kripya sirf Image file (.jpg, .png) use karein!");
            }
        }
    }

    function displayImage(imageSrc, container) {
        container.innerHTML = `<img src="${imageSrc}" alt="Product Image">`;
        
        const newInput = document.createElement("input");
        newInput.type = "file";
        newInput.accept = "image/*";
        newInput.className = "file-input";
        newInput.style.display = "none";
        newInput.addEventListener("change", (event) => handleFiles(event.target.files, container));
        container.appendChild(newInput);
    }
});
