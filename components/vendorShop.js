
function createShopVendor(shop) {
    // Create the main shopVendor div
    const shopVendor = document.createElement('div');
    shopVendor.className = 'shopVendor';

    // Create the shopDetails div
    const shopDetails = document.createElement('div');
    shopDetails.className = 'shopDetails';

    // Create the shop details content
    const shopContent = `
        <div>
            <h1 class="shopName">${shop.name}</h1>
            <p>${shop.address}</p>
            <p>${shop.cuisine}</p>
            <p>Contact number : ${shop.contact}</p>
            <p>Delivery Est: ${shop.deliveryEst}</p>
            <p>Delivery Distance : ${shop.deliveryDistance}</p>
            <p>Delivery Fee: ${shop.deliveryFee}</p>
        </div>
        <button class="viewShopButton">View Shop</button>
    `;

    shopDetails.innerHTML = shopContent;

    // Create the shopThumbnail div
    const shopThumbnail = document.createElement('div');
    shopThumbnail.className = 'shopThumbnail';
    const img = document.createElement('img');
    img.src = shop.imgSrc;
    img.className = 'restaurant-img';
    img.alt = '';
    shopThumbnail.appendChild(img);

    // Append shopDetails and shopThumbnail to shopVendor
    shopVendor.appendChild(shopDetails);
    shopVendor.appendChild(shopThumbnail);

    // Append shopVendor to the container
    document.getElementById('shopContainer').appendChild(shopVendor);
}

