import formateCurrency from "../scripts/utils/money.js";

export function getProduct(productId) {
  let matchingProduct;
  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });
  return matchingProduct;
}

class Product {
  id;
  image;
  name;
  rating;
  priceCents;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
  }

  getStarsUrl() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }

  getPrice() {
    return `$${formateCurrency(this.priceCents)}`;
  }

  extraInfoHTML() {
    return "";
  }
}

class Clothing extends Product {
  sizeChartLink;

  constructor(productDetails) {
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }

  extraInfoHTML() {
    // super.extraInfoHTML();
    return `
    <a href ="${this.sizeChartLink}" target="_blank">Size Chart</a>
    `;
  }
}

/* const date = new Date();
console.log(date);

console.log(date.toLocaleTimeString()); */
/* 
console.log(this);

const object2 = {
  a: 2,
  b: this.a,
};
 */

/* function logThis() {
  console.log(this);
}
logThis();
logThis.call("hello");

this;
const object3 = {
  method: () => {
    console.log(this);
  },
};
object3.method();
 */

export let products = [];

function loadProductsFetch() {
  const promise = fetch("https://supersimplebackend.dev/products")
    .then((response) => {
      return response.json();
    })
    .then((productData) => {
      products = productData.map((productDetails) => {
        if (productDetails.type === "clothing") {
          return new Clothing(productDetails);
        }
        return new Product(productDetails);
      });
      console.log("load products");
    });
  return promise;
}
loadProductsFetch().then(() => {
  console.log("next stem");
});

export function loadProducts(fun) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", () => {
    products = JSON.parse(xhr.response).map((productDetails) => {
      if (productDetails.type === "clothing") {
        return new Clothing(productDetails);
      }
      return new Product(productDetails);
    });
    console.log("load products");

    fun();
  });

  xhr.open("GET", "https://supersimplebackend.dev/products");
  xhr.send();
}
