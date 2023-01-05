const fName = document.querySelector('#fName')
const lName = document.querySelector('#lName')
const idNumber = document.querySelector('#idNumber')
const city = document.querySelector('#city')

class Customer {
  #firstName
  #lastName
  #idNumber
  city

  constructor (firstName, lastName, idNumber, city) {
    this.#firstName = firstName
    this.#lastName = lastName
    this.#idNumber = idNumber
    this.city = city
  }

  allInfo () {
    return {
      firstName: this.#firstName,
      lastName: this.#lastName,
      idNumber: this.#idNumber
    }
  }
}

function addCustomer () {
  const btn = document.querySelector('#addUser')

  btn.addEventListener('click', () => {
    let newCustomer = new Customer(    //local
      fName.value,
      lName.value,
      idNumber.value,
      city.value
    )

    localStorage.setItem('customer', JSON.stringify(newCustomer.allInfo()))
    location.href = location.pathname.replace('customers.html', '')
    drawCastomersToHtml()
  })
}

addCustomer()

function drawCastomersToHtml () {
  document.body.innerHTML += `${fName.value}<br>`
  document.body.innerHTML += `${lName.value}<br>`
  document.body.innerHTML += `${idNumber.value}<br>`
  document.body.innerHTML += `${city.value}<br>`
}