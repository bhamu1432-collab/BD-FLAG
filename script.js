// ==========================
// BHAGWAN DECORATION
// Premium Catalogue JS
// ==========================

let products = [];

// Load Products
async function loadProducts() {

    try {

        const response = await fetch("products.json");

        products = await response.json();

        renderProducts();

    } catch (err) {

        console.log(err);

    }

}

// Render Products

function renderProducts() {

    const catalogue = document.getElementById("catalogue");

    catalogue.innerHTML = "";

    products.forEach(product => {

        catalogue.innerHTML += `

<div class="product">

<div class="left">

<div class="badge">

PREMIUM QUALITY

</div>

<h3>${product.name}</h3>

<div class="code">

${product.id}

</div>

<ul>

<li>${product.size}</li>

<li>${product.pack}</li>

<li>${product.quality}</li>

</ul>

<div class="price">

₹${product.price}

</div>

</div>

<div class="right">

<div class="sticker">

BEST SELLER

</div>

<img src="${product.image}">

</div>

</div>

`;

    });

}

// Print Catalogue

function printCatalogue(){

window.print();

}

// Search Product

function searchProduct(){

let value=document.getElementById("search").value.toLowerCase();

let cards=document.querySelectorAll(".product");

cards.forEach(card=>{

let title=card.querySelector("h3").innerText.toLowerCase();

if(title.includes(value))

card.style.display="flex";

else

card.style.display="none";

});

}

// Live Shop Name

function updateShopName(){

let value=document.getElementById("shopInput").value;

document.getElementById("shopName").innerHTML=value;

}

// Upload Product Image

function uploadImage(input,index){

let file=input.files[0];

if(!file)return;

let reader=new FileReader();

reader.onload=function(e){

products[index].image=e.target.result;

renderProducts();

}

reader.readAsDataURL(file);

}

loadProducts();
