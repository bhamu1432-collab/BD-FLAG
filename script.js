// Premium Catalogue JS

console.log("Bhagwan Decoration Catalogue Loaded");

document.querySelectorAll(".product").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".35s";

});

});

function printCatalogue(){

window.print();

}
