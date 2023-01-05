
let cart = [];

export function renderCart() {
  let productsJSON = localStorage.getItem("products");
  let products = JSON.parse(productsJSON);

  const cartEl = document.getElementById("cart");
  const totalPriceEl = document.getElementById("totalPrice");
  const totalItemsEl = document.getElementById("totalItems");
  cartEl.innerHTML = "";
  let totalPrice = 0;
  let totalItems = 0;

  cart.forEach((product, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.setAttribute("id", "itemDiv");

    totalItems = totalItems + product.quantity;
    totalPrice = totalPrice + product.price * product.quantity;

    const name = document.createElement("h3");
    name.setAttribute("id", "name");
    name.textContent = product.name + " (" + product.quantity + ")";

    const image = document.createElement("img");
    image.setAttribute("src", product.imgUrl);
    image.setAttribute("width", "100");

    const price = document.createElement("p");
    price.setAttribute("id", "price");
    price.textContent = product.price + "$";

    const button = document.createElement("button");
    button.style.backgroundColor = "red";
    button.setAttribute("class", "rmv-btn");
    button.textContent = "Remove from cart";

    button.onclick = () => {
      const cartBtn = document.getElementById("product-btn-" + product.id);

      cartBtn.removeAttribute("disabled");
      removeFromCart(index);
      renderCart();
    };

    cartEl.append(name);
    cartEl.append(image);
    cartEl.append(price);
    cartEl.append(button);
    cartEl.append(itemDiv);

    //Buy
    buy.onclick = () => {
      localStorage.setItem("products", JSON.stringify(products));
      let container = document.getElementById("rcpro");
      let cart = document.getElementById("cartAndTotal");
      container.innerHTML = cart.innerHTML; //change content;
      document.getElementById("reciept").style.display = "block";
    };
  });
  const discount = totalPrice > 300 ? 0.1 : 0; ///ternery (if). ? == true,  : = if not ;
  totalPriceEl.textContent = totalPrice - discount * totalPrice; //10% discount above 300
  if (discount) {
    document.getElementById("discount").textContent =
      discount * 100 + "%" + " " + " הנחה";
  }
  totalItemsEl.textContent = totalItems;
}

export function addToCart(product) {
  const foundItem = cart.find((cartItems) => {
    return cartItems.name === product.name;
  });

  if (foundItem) {
    foundItem.quantity++;
    foundItem.units--;
    console.log(foundItem.units);
  } else {
    //first time button pushing
    cart.push(product);
    product.quantity = 1;
    product.units--;
    console.log(product.units);
  }
}

 function removeFromCart(productIndex) {
  let newCart = [];

  cart.forEach((cartItem, index) => {
    if (productIndex === index) {
      if (cartItem) {
        return (cartItem.units = cartItem.units);
      }
      console.log(cartItem.units);
    } else {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
}