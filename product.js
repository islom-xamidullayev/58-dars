const id = window.location.href.split("=")[1];

console.log(id);

const title = document.querySelector(".title");
const prImg = document.querySelector(".product__img");
const pDesc = document.querySelector(".product__desc");

async function start() {
    const res = await fetch("http://localhost:5000/products/" + id);
    const body = await res.json();

    const product = body.data;

    title.innerText = product.name;
    pDesc.innerText = product.description
    
    prImg.setAttribute("src", product.image)

}   

start()

