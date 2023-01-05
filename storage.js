import {initProducts} from "./products.js"

const products = initProducts()

const itemIdVerify = document.querySelector("#itemId");
const removeProductInput = document.querySelector("#removeProductInput");
const productNameInput = document.querySelector("#productName");
const imgUrlInput = document.querySelector("#imgurl");

const drawHTML = () => {
  document.querySelector("#productsTable tbody").innerHTML = products
    .map((x, index) => {
      return `
<tr>
    <td>${index + 1}.</td>
    <td>${x.name}</td>
    <td>${x.price}</td>
    <td>${x.units}</td>
    <td><img height="120" src="${x.imgUrl}"></td>
    
</tr>`;
    })
    .join("");

  document.querySelector("#productToUpdate").innerHTML = "";
};

drawHTML();

document.querySelector("#addProduct").addEventListener("click", () => {
  products.push({
    id: products.length + 1, // automatic id added
    name: productNameInput.value,
    price: price.value, //dont need to take it from query cause its already hava a id in html
    units: units.value,
    imgUrl: imgUrlInput.value,
  });

  //local storage setItem

  localStorage.setItem("products", JSON.stringify(prodcuts));

  drawHTML();
  productNameInput.value = "";
  price.value = "";
  units.value = "";
  imgUrlInput.value = "";
});
//REMOVE PRODUCT FROM SHOP
document.querySelector("#removeProduct").addEventListener("click", () => {
  return removeProduct();
});

const removeProduct = () => {
  for (let i = 0; i < products.length; i++) {
    console.log(removeProductInput.value);
    if (i + 1 == removeProductInput.value) {
      products.splice(i, 1);
      localStorage.setItem("products", JSON.stringify(products));
      drawHTML();
      break;
    }
  }
};
/////////////////////////////////////////////////////////////////////
//VERIFY PRODUCT BEFORE PARCHASING
document.querySelector("#verifyProductButton").addEventListener("click", () => {
  return verifyProduct();
});
// //UPDATE PRODUCTS //
// //CHECK PRODUCT IDENTITY BY ID AND NAME
const verifyProduct = () => {
  console.log("item id verify value: " + itemIdVerify.value);

  let index = itemIdVerify.value - 1;
  if (products[index]) {
    document.querySelector("#updatingItemId").value = itemIdVerify.value;
    document.querySelector("#updateName").value = products[index].name;
    document.querySelector("#updatePrice").value = products[index].price;
    document.querySelector("#updateUnits").value = products[index].units;
    document.querySelector("#updateImgUrl").value = products[index].imgUrl;
    document.querySelector("#updateName").focus();
  } else {
    document.querySelector("#productToUpdate").innerHTML = "לא נמצא מוצר";
  }
};
////////////////////////////////////////////////////////////////////////////////////////

document.querySelector("#updateProductButton").addEventListener("click", () => {
  return updateProduct();
});
//  // UPDATE
const updateProduct = () => {
  let index = document.querySelector("#updatingItemId").value - 1; //find the item
  if (products[index]) {
    let update = {
      name: document.querySelector("#updateName").value,
      price: document.querySelector("#updatePrice").value,
      units: document.querySelector("#updateUnits").value,
      imgUrl: document.querySelector("#updateImgUrl").value,
    };

    products[index] = update;

    localStorage.setItem("products", JSON.stringify(products));
    drawHTML();
  } else {
    document.querySelector("#itemNotFound").innerHTML = "לא נמצא מוצר";
  }
  document.querySelector("#updateName").value = "";
  document.querySelector("#updatePrice").value = "";
  document.querySelector("#updateUnits").value = "";
  document.querySelector("#updateImgUrl").value = "";
};