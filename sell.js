const productsWrapper = document.querySelector(".products__wrapper");

const GET__PRODUCTS = "http://localhost:5000/products";

fetchProducts();

async function fetchProducts() {
  try {
    const res = await fetch(GET__PRODUCTS);
    const body = await res.json();

    if (!body.data) throw new Error("Mahsulotlar topilmadi.");

    const products = body.data;

    products.forEach((item) => {
      const el = document.createElement("div");
      el.classList.add("card");

      el.innerHTML = `
      
        <img src="${item.image || "default.jpg"}" alt="${item.name || "Mahsulot"}">
        <h3><a href="product.html?id=${item.id}"> ${item.name}</a></h3>

        
        
      `;

      productsWrapper.appendChild(el);
    });
  } catch (error) {
    console.error("Xatolik yuz berdi:", error.message);
  }
}
