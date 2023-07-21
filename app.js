

const clothing = {
    kurti: {
        name: 'Casual Kurti',
        colors: ['red', 'blue', 'green'],
        sizes: ['S', 'M', 'L'],
        price: 24.99,
    },
    shirt: {
        name: 'Cotton Shirt',
        colors: ['white', 'black', 'gray'],
        sizes: ['M', 'L', 'XL'],
        price: 29.99,
    },
    tshirt: {
        name: 'Plain T-Shirt',
        colors: ['black', 'white'],
        sizes: ['S', 'M', 'L'],
        price: 19.99,
    },
};

const displayClothingKeys = () => {
    const keysList = document.getElementById("clothingKeysList");
    Object.keys(clothing).forEach((key) => {
        const listItem = document.createElement("li");
        listItem.textContent = key;
        keysList.appendChild(listItem);
    });
};

const displayClothingProperties = (clothingObj) => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
      <p>Name: ${clothingObj.name}</p>
      <p>Colors: ${clothingObj.colors.join(", ")}</p>
      <p>Sizes: ${clothingObj.sizes.join(", ")}</p>
      <p>Price: $${clothingObj.price}</p>
    `;
};

displayClothingKeys(); // Call the displayClothingKeys function once when the page loads
let searchTimeout;

const delayedSearch = () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(search, 2000); // Adjust the delay (in milliseconds) as needed
};


const search = () => {
    const searchbox = document.getElementById("searchKey").value.trim().toLowerCase();
    const clothingObj = clothing[searchbox];

    if (clothingObj !== undefined) {
        console.log("Clothing found!");
        displayClothingProperties(clothingObj);
    } else {
        console.log("Clothing not found!");
    }
};
