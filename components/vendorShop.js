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
        <a href = "../views/restaurantDetailsPage.html?name=${shop.name}&address=${shop.address}&contact=${shop.contact}&imgUrl=${shop.imgSrc}"><button class="viewShopButton" >View Shop</button></a>
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


    shopVendor.appendChild(shopDetails);
    shopVendor.appendChild(shopThumbnail);

    document.getElementById('shopContainer').appendChild(shopVendor);
}


const shops = [
    {
        name: 'Shalom Fast Food',
        address: '10th clise Dansoman Accra Greater Accra',
        cuisine: 'Ghanaian, African',
        contact: '0302907709',
        deliveryEst: 'not available',
        deliveryDistance: '50.0',
        deliveryFee: 'Free Delivery',
        imgSrc: "https://th.bing.com/th/id/OIP.VtipTb-Jt0wS1kO7o8yHpgHaFi?w=206&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7https://th.bing.com/th/id/OIP.VtipTb-Jt0wS1kO7o8yHpgHaFi?w=206&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
    },
    {
        name: 'Davi Ama',
        address: '10th clise Dansoman Takoradi Station',
        cuisine: 'Ghanaian, African',
        contact: '0508250183',
        deliveryEst: 'Available',
        deliveryDistance: '50.0',
        deliveryFee: 'Free Delivery',
        imgSrc: "https://th.bing.com/th/id/OIP.ECVTPG-nXpZfQp_MVJcf_wHaHa?w=154&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
    },
    {
        name: 'Ambrosia',
        address: 'Agona Nkwanta Zen Filling Station',
        cuisine: 'Ghanaian, African',
        contact: '0593528296',
        deliveryEst: 'not available',
        deliveryDistance: '50.0',
        deliveryFee: 'Free Delivery',
        imgSrc: "https://th.bing.com/th/id/OIP.GhRBHd2kHl2OyMvMR1O7JgHaE0?w=253&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
    },
    {
        name: 'Shalin',
        address: '10th La Bonita Agona Nkwanta',
        cuisine: 'Ghanaian, African',
        contact: '0302907709',
        deliveryEst: 'not available',
        deliveryDistance: '50.0',
        deliveryFee: 'Free Delivery',
        imgSrc: '../img/restaurant-4.png'
    },
    {
        name: 'Davi',
        address: 'Home Accra Greater Accra',
        cuisine: 'Ghanaian, African',
        contact: '0302907709',
        deliveryEst: 'not available',
        deliveryDistance: '50.0',
        deliveryFee: 'Free Delivery',
        imgSrc: '../img/restaurant-5.png'
    },
    {
        name: 'MargTee',
        address: 'Legon Accra Greater Accra',
        cuisine: 'Ghanaian, African',
        contact: '0554784452',
        deliveryEst: 'not available',
        deliveryDistance: '50.0',
        deliveryFee: 'Free Delivery',
        imgSrc: '../img/restaurant-6.png'
    },
    {
        name: 'MeLuvs',
        address: '10th clise Dansoman Accra Greater Accra',
        cuisine: 'Ghanaian, African',
        contact: '0302907709',
        deliveryEst: 'not available',
        deliveryDistance: '50.0',
        deliveryFee: 'Free Delivery',
        imgSrc: "https://th.bing.com/th/id/OIP.ItJJ4cW5Q0lu2saOLBS7ZwAAAA?pid=ImgDet&w=181&h=181&c=7&dpr=1.4"
    },
    {
        name: "Pat's hots kitchen",
        address: '10th clise Dansoman Accra Greater Accra',
        cuisine: 'Ghanaian, African',
        contact: '0302907709',
        deliveryEst: 'not available',
        deliveryDistance: '50.0',
        deliveryFee: 'Free Delivery',
        imgSrc: "https://th.bing.com/th/id/OIP.ItJJ4cW5Q0lu2saOLBS7ZwAAAA?pid=ImgDet&w=181&h=181&c=7&dpr=1.4"
    },

];

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById("searchRes");
    const restaurantsContainer = document.getElementById("shopContainer");
    let timeoutId;
  
  

    const displayAllShops = () => {
      shops.forEach(shop => createShopVendor(shop));
    };
  
    displayAllShops();
  

    searchInput.addEventListener('input', () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const searchValue = searchInput.value.toLowerCase();
        restaurantsContainer.innerHTML = ''; 
        shops.forEach(shop => {
          if (shop.name.toLowerCase().includes(searchValue)) {
            createShopVendor(shop);
          }
        });
      }, 500); 
    });
  });
  
