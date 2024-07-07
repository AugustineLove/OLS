
function dishFun (dishes){
    const dish = document.createElement('div');
    dish.className = 'dishes';

    const aDish = document.createElement('div');
    aDish.className = 'dish';
    

    const aDishContent = `
                <img src="../img/${dishes.imageUrl}" alt="hero-pizza">
                <h3>${dishes.header}</h3>
                <p>GH₵ ${dishes.price} ★</p>
                <p>${dishes.name}</p>
                <button id="addToCart" class="add-to-cart-btn">Add to Cart</button>
    `;
    aDish.innerHTML = aDishContent;
    dish.appendChild(aDish);
    document.getElementById("dish").appendChild(dish);
    const bTn = document.getElementById("addToCart")
    bTn.addEventListener('click', () => {
        console.log('Clicked')
    })
}



function category (categoryItem) {

    const nav = document.createElement("nav");
    nav.className ="category-nav";

    const categoryBtn = document.createElement("button");
    categoryBtn.className = "category-btn active";
    
    const categoryBtnContent = `
    <img src="../img/${categoryItem.imageUrl}" alt="All">
        ${categoryItem.label}
    `;
    categoryBtn.innerHTML = categoryBtnContent;

    nav.appendChild(categoryBtn);
    document.getElementById("nav").appendChild(nav);
}

const dishes = [
{
    imageUrl: "hero-pizza.png",
    header: "hero-pizza",
    price: "95",
    name: "Restaurant A"
},
{
    imageUrl: "hero-pizza.png",
    header: "Kivo",
    price: "5",
    name: "Variety Store"
},
{
    imageUrl: "hero-pizza.png",
    header: "hero-pizza",
    price: "95",
    name: "Restaurant A"
},
{
    imageUrl: "hero-pizza.png",
    header: "Kivo",
    price: "5",
    name: "Variety Store"
},
{
    imageUrl: "hero-pizza.png",
    header: "hero-pizza",
    price: "95",
    name: "Restaurant A"
},
{
    imageUrl: "hero-pizza.png",
    header: "Kivo",
    price: "5",
    name: "Variety Store"
},
{
    imageUrl: "hero-pizza.png",
    header: "hero-pizza",
    price: "95",
    name: "Restaurant A"
},
{
    imageUrl: "hero-pizza.png",
    header: "Kivo",
    price: "5",
    name: "Variety Store"
},
];

const categories = [
    {
        imageUrl: "food-2.png",
        label: "All"
    },
    {
        imageUrl: "pizza-pan.png",
        label: "Pizza"
    },
    {
        imageUrl: "hero-burger.png",
        label: "Burger"
    },
    {
        imageUrl: "food-1.png",
        label: "Noddles"
    },
]

document.addEventListener('DOMContentLoaded', () => {
    categories.forEach(cat => category(cat));
    dishes.forEach(dish => dishFun(dish));
});