const API_BASE = 'https://fakestoreapi.com';

fetch(`${API_BASE}/products`)
.then((response) => {
    return response.json();
})
.then((data) =>{
    console.log(data);
    renderProductCards(data);
})
.catch(error => {
    console.error('Error fetching products:', error);
  });

function createProductCard (product) {
  const { title, price, rating: { rate }, image } = product;

  const imgElem = createElement('img', ['product-img']);
  imgElem.src = image;
  imgElem.alt = title;

  const titleElem = createElement('h2', ['title'], title);
  const priceElem = createElement('p', ['price'], `$${price.toFixed(2)}`);
  const ratingElem = createElement('p', ['rating'], `${rate}`, createElement('span', ['star-icon'], '⭐'));

  const card = createElement('article', ['card'], imgElem, titleElem, priceElem, ratingElem);

  return card;
}

function createElement(type, classNames = [], ...children){
    const elem = document.createElement(type);
    elem.classList.add(...classNames);
    elem.append(...children);
    return elem;
}

function renderProductCards(products) {
    const productContainer = document.getElementById('product-container');
    products.forEach(product => {
      const productCard = createProductCard(product);
      productContainer.appendChild(productCard);
    });
  }


/*
category: "men's clothing"
description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
id: 1
image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
price: 109.95
rating: {rate: 3.9, count: 120}
title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
*/



