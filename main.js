// Task 1: Setup Product HTML Structure (in index.html) and Get Elements

const priceElement = document.getElementById("product-price")
const sizeSelector = document.getElementById("size-selector")
const purchaseButton = document.getElementById("purchase-button")

// Task 2: Add Event Listeners for Product Selection

sizeSelector.addEventListener("change", function(event) {
    const selectedPrice = event.target.value
    priceElement.textContent = `$${selectedPrice}`
})