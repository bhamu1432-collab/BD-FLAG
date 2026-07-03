let products = [];
let current = 0;

fetch("products.json")
.then(res => res.json())
.then(data => {
    products = data;
    showProduct(0);
});

function showProduct(index){

    const p = products[index];

    document.getElementById("productName").innerHTML = p.name;
    document.getElementById("itemCode").innerHTML = p.code;
    document.getElementById("length").innerHTML = p.length;
    document.getElementById("packing").innerHTML = p.packing;
    document.getElementById("category").innerHTML = p.category;
    document.getElementById("carton").innerHTML = p.carton;

    document.getElementById("productImage").src = p.image;
}

function nextProduct(){

    current++;

    if(current>=products.length){
        current=0;
    }

    showProduct(current);
}

function previousProduct(){

    current--;

    if(current<0){
        current=products.length-1;
    }

    showProduct(current);
}