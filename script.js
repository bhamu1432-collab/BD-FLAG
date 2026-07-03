document.addEventListener("DOMContentLoaded", () => {
    // Sabhi product items ko select karein
    const products = document.querySelectorAll(".product-container");

    products.forEach((product) => {
        const itemCodeElement = product.querySelector(".item-code");
        const imgBox = product.querySelector(".product-img-box");

        if (itemCodeElement && imgBox) {
            const itemCode = itemCodeElement.textContent.trim();

            // Image box par click karne ka event log
            imgBox.addEventListener("click", () => {
                alert(`Aapne select kiya hai: ${itemCode}\nYahan aap product image details ya gallery open kar sakte hain.`);
            });
        }
    });

    console.log("Bhagwan Decoration Catalogue Script Loaded Successfully.");
});
