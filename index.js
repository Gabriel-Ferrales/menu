import { menuArray } from "./data.js";

const menuContainer = document.getElementById("menu-container")
const orderElements = document.getElementById("order-elements")
const orderContainer = document.getElementById("order-container")

render()

function render(){
    let htmlString = ""
    menuArray.forEach(function(item){

        htmlString += `<div class="item">
                            <div class="inner-item">
                                <p class="icon">
                                    ${item.emoji}
                                </p>
                                <div class="inner-text">
                                    <h3 class="food-name">${item.name}</h3>
                                    <p class="ingredients">${item.ingredients}</p>
                                    <h4 class="price">$${item.price}</h4>
                                </div>
                                <button class="add-btn" data-id=${item.id}>+</button>
                            </div>
                        </div>`
    })
    menuContainer.innerHTML = htmlString
}

document.addEventListener("click", function(e){
    if (e.target.dataset.id){
        addToCart(e.target.dataset.id)
    } 
    else if (e.target.classList.contains("remove-btn")){
        removeParent(e.target)
    }
    else if (e.target.classList.contains("order-btn") && document.getElementById("total-price").innerHTML != "$0"){
        sendOrder()
    }
})

function addToCart(id){
    let foodItem = null
    for (let item of menuArray){
        if (item.id == id){
            foodItem = item
            break
        }
    }
    let orderItemString = `<div class="order-item">
                            <h2>${foodItem.name}</h2>
                            <button class="remove-btn">🗑️</button>
                            <p class="order-price">${foodItem.price}</p>
                            </div>`

    orderElements.innerHTML += orderItemString
    
    sumTotal()
}

function sumTotal(){
    let total = 0
    const totalElement = document.getElementById("total-price")
    let items = document.getElementsByClassName("order-price")
    for (let item of items){
        total += Number(item.textContent)
    }
    totalElement.innerHTML = `$${total}`
} 

function removeParent(element){
    element.parentElement.remove()
    sumTotal()
}

function sendOrder(){
    let paymentModal = document.getElementById("payment-modal")
    paymentModal.classList.remove("hidden")
    document.getElementById("send-order").addEventListener("click", function(){
        paymentModal.classList.add("hidden") 
    })
    orderContainer.innerHTML = `<div class="order-succesful">
                                    <h2>Thanks James, your order is on its way!</h2>
                                </div>`

}
