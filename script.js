function addNumbers(a, b) {
  return a + b;

}

function multiplyNumbers(a, b) {
  return a * b;
}

console.log(addNumbers(5, 10)); // Output: 15
console.log(addNumbers(3, 7)); // Output: 10
console.log(addNumbers(-2, 4)); // Output: 2

console.log(multiplyNumbers(5, 10)); // Output: 50
console.log(multiplyNumbers(3, 7)); // Output: 21
console.log(multiplyNumbers(-2, 4)); // Output: -8

// Get the form and total display element
const form = document.getElementById("pizza-order-form");
const totalDisplay = document.getElementById("total");

// Function to calculate total pizza cost
function calculatePizzaTotal(basePrice, toppingCount, toppingPrice) {
  // Multiply number of toppings by price per topping
  const toppingsCost = toppingCount * toppingPrice;

  // Add base price to toppings cost
  return basePrice + toppingsCost;
}

// Listen for form submission
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Stop page from refreshing

  const basePrice = 10;      // Base pizza price
  const toppingPrice = 2;    // Price per topping

  // Get all checked topping checkboxes
  const selectedToppings = document.querySelectorAll(
    'input[name="topping"]:checked'
  );

  const toppingCount = selectedToppings.length; // Count selected toppings

  const isDelivery = deliveryCheckbox.checked; // true or false

  // Call our function to calculate total
  const totalCost = calculatePizzaTotal(
    basePrice,
    toppingCount,
    toppingPrice,
    isDelivery
  );

  // Update the page with the total cost
  totalDisplay.textContent = `Total: $${totalCost.toFixed(2)}`;
});

