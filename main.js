// Task 1: Setup Product HTML Structure (in index.html) and Get Elements

const priceElement = document.getElementById("product-price")
const sizeSelector = document.getElementById("size-selector")
const purchaseButton = document.getElementById("purchase-button")

// Task 2: Add Event Listeners for Product Selection

sizeSelector.addEventListener("change", function(event) {
    const selectedPrice = event.target.value
    priceElement.textContent = `$${selectedPrice}`

    // Task 3: Handle Stock Availability
    if (Number(stock) === 0) {
        purchaseButton.disabled = true
        purchaseButton.textContent = "Out of Stock"
    } 
    else {
        purchaseButton.disabled = false
        purchaseButton.textContent = "Purchase"
    }
})

// Task 4: Create a Checkout Event
purchaseButton.addEventListener("click", function(event) {
if(!purchaseButton.disabled) {
    alert("You purchased successfully!")
}
else {
    alert("Out of stock. Product cannot be purchased.")
}
})