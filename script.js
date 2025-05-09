// Sample products data
const products = [
    {
        id: 1,
        name: "Cheese",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 5, // Set discard day for Cheese
    },
    {
        id: 2,
        name: "Chicken Topping",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 3, // Set discard day for Chicken Topping
    },
  {
        id: 4,
        name: "Pepperoni",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Ham",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Beef",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Pork",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Tomatoes",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Bacon",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Cheese Triangles",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Chicken Strips",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Spicy Chicken Strips",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Fries",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Potato Wedges",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Halloumi Fries",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Garlic Bread",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Nachos (Open Bag)",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Pre Portioned Nachos",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Cup n Crisp Pepperoni",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "BBQ Wings",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Nduja",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Cookie Dough (All Flavours)",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Garlic Bread",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Macaroni Cheese",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Donuts",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "String Cheese",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Goats Cheese",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Vegan Cheese",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Stretched & Sauced Dough",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Garlic Sprinkle",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Rice Cones In Tray",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Rice Cones In Container",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Salt Solution",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Cheese Sauce (Original Container)",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Cheese Sauce (Squeezy Bottle)",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Raspberry Sauce",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Chocolate Sauce",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Marshmallows",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Mushrooms",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Mixed Peppers",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Red Onion",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Jalapenos (Drained)",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Jalapenos (In Vinegar)",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Melts Sauces In Dip Pots",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Salsa",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Pineapple",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Tomato Sauce",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Roquito Slices (Drained)",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Roquito Slices (In Vinegar)",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Black Olives (Drained)",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Black Olives (In Vinegar)",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Sweetcorn",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "BBQ Sweet & Smokey",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Burger Sauce",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Tuna",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Gherkins (Drained)",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Gherkins (In Brine)",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Handcrafted Dough (Defrost)",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Handcrafted Dough (Proof Label)",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Stuffed Crust",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Deep Pan Dough",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
  {
        id: 4,
        name: "Melts Dough",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 4,
    },
    {
        id: 3,
        name: "Mozzarella",
        defrostDays: 0,
        readyDays: 1,
        discardDays: 7, // Set discard day for Mozzarella
    }
];

// Editable values for defrost time, ready time, and discard time
const defaultDefrostTime = 12; // 12:00 PM for defrost time

// Function to format the date in DD/MM format
function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return (day < 10 ? '0' + day : day) + '/' + (month < 10 ? '0' + month : month);
}

// Function to get defrost date (default to 12:00 PM today)
function getDefrostDate() {
    const today = new Date();
    today.setHours(defaultDefrostTime, 0, 0, 0);
    return today;
}

// Function to get ready date (24 hours after defrost)
function getReadyDate(defrostDate) {
    const readyDate = new Date(defrostDate);
    readyDate.setHours(readyDate.getHours() + 24); // Add 24 hours to defrost time
    return readyDate;
}

// Function to get discard date based on the product's discardDays
function getDiscardDate(defrostDate, discardDays) {
    const discardDate = new Date(defrostDate);
    discardDate.setDate(discardDate.getDate() + discardDays); // Add product's discard days
    discardDate.setHours(23, 0, 0, 0); // Set discard time to 23:00 (11:00 PM)
    return discardDate;
}

// Function to display product info in a card format
function displayProductInfo(product) {
    const defrostDate = getDefrostDate();
    const readyDate = getReadyDate(defrostDate);
    const discardDate = getDiscardDate(defrostDate, product.discardDays);

    return `
        <div class="product-card">
            <h3>${product.name}</h3>
            <p><span>Defrost Date:</span> ${formatDate(defrostDate)} ${defaultDefrostTime}:00</p>
            <p><span>Ready Date:</span> ${formatDate(readyDate)} ${readyDate.getHours()}:${readyDate.getMinutes() === 0 ? '00' : readyDate.getMinutes()}</p>
            <p><span>Discard Date:</span> ${formatDate(discardDate)} ${discardDate.getHours()}:${discardDate.getMinutes() === 0 ? '00' : discardDate.getMinutes()}</p>
        </div>
    `;
}

// Function to filter and display products based on search input
function filterAndDisplayProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    const productContainer = document.getElementById('product-container');

    // Clear existing product cards
    productContainer.innerHTML = '';

    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            productContainer.innerHTML += displayProductInfo(product);
        });
    } else {
        productContainer.innerHTML = '<p>No products found.</p>';
    }
}

// Call this function initially to display all products
window.onload = function() {
    filterAndDisplayProducts();
};

// Function to update the discard days for a specific product
function updateDiscardDays(productName, newDiscardDays) {
    const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase()); // Search case-insensitive
    if (product) {
        product.discardDays = newDiscardDays; // Update the discard days for that product
        filterAndDisplayProducts(); // Refresh products with updated discard date
    } else {
        console.error("Product not found");
    }
}

// Example of how to update the discard days for a product
// To update Cheese's discard days, just call:
// updateDiscardDays("Cheese", 6); // Update to 6 days for Cheese