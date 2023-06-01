import { menuArray } from "./data.js";

const menuContainer = document.getElementById("menu-container")
const orderElements = document.getElementById("order-elements")


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
    else if (e.target.classList.contains("order-btn")){
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
    totalElement.innerHTML = total
} 

function removeParent(element){
    element.parentElement.innerHTML = ""
    sumTotal()
}

function sendOrder(){
    
}

render()



function elements(){
    /*<div class="order-item">
        <h2>${FOOD NAME HERE}</h2>
        <button class="remove-btn">🗑️</button>
        <p class="order-price">${FOOD PRICE HERE}</p>
    </div>

    <div class="order-item">
    <h2>Pizza</h2>
    <button class="remove-btn">🗑️</button>
    <p class="order-price">$14</p>
    </div>

    <div class="order-item">
    <h2>Pizza</h2>
    <button class="remove-btn">🗑️</button>
    <p class="order-price">$14</p>
    </div>*/
}