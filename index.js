import {renderProducts,initProducts} from "./products.js";
import {renderCart} from "./cart.js";

let customer = localStorage.getItem('customer')
customer = JSON.parse(customer || '{}') //if nall get empty obj

if (customer.firstName) {
  const welcome = document.getElementById('welcome')
  welcome.innerHTML +=
    `<h5>${customer.firstName}` + ' ' + `${customer.lastName}<h5>`
  welcome.style.display = 'block'

  document.getElementById('rcName').innerHTML =
    `<h5>${customer.firstName}` + ' ' + `${customer.lastName}<h5>`
}

initProducts()

renderCart();

renderProducts();