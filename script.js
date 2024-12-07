// Product list
const products = [
    {
        name: "Red Wine Reserve",
        description: "A full-bodied wine with an intense flavor of red fruits.",
        price: "$25.00",
        image: "images/red-wine.jpg" 
    },
    {
        name: "Dry White Wine",
        description: "Refreshing and light, perfect for sunny days.",
        price: "$20.00",
        image: "images/white-wine.jpg"
    },
    {
        name: "Premium Opener Set",
        description: "A premium set to open and serve wine with ease.",
        price: "$15.00",
        image: "images/wine-opener.jpg"
    },
    {
        name: "Winery House Box",
        description: "Discover the ultimate gift set featuring a curated selection of our finest wines, paired with exclusive accessories for wine lovers.",
        price: "$120.00",
        image: "images/winery-box.jpg"
    }
];


const productList = document.getElementById('product-list');


products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>${product.price}</strong></p>
        <a href="#" class="btn">Buy Now</a>
    `;

    productList.appendChild(productCard);
});
