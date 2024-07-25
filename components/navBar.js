class NavBar {
    constructor() {
        this.navBar = document.createElement('nav');
        this.navBar.id = 'nav';
    }

    createNavBar() {
        const navBar = document.createElement('nav');
        navBar.className = 'navbar';

        const userMail = localStorage.getItem('email')        
        const userName = localStorage.getItem('name')
        const firstLetter = userMail.charAt(0).toUpperCase()
        
    
        const navBarContent = `
            <img src="../img/logo.png" class="logo" alt="Logo">
    
            <!-- links -->
            <ul class="links-container">
                <li class="link-items"><a href="index.html" class="links">Menu</a></li>
                <li class="link-items"><a href="ordering.html" class="links">Order</a></li>
                <li class="link-items"><a href="../views/restaurants.html" class="links">Restaurants</a></li>
                <li class="link-items"><a href="login.html" class="links">Login</a></li>
            </ul>
    
            <div class="nav-extras">            
                
                <div class="search">
                    <div class="avatar"> <p>${firstLetter}</p></div>
                   <div> <p>${userName}</p>
                    <p id="email">${userMail}</p>
                    </div>
                </div>
    
                <!-- cart icon -->
                <a href="ordering.html" class="cart"><i class="fa-solid fa-cart-shopping"></i></a>


    
                <div class="nav-toggler">
                   <div class="dropdown">
                    <button class="dropbtn">☰</button>
                    <div class="dropdown-content">
                        <a href="index.html">Home</a>
                        <a href="ordering.html">Order</a>
                        <a href="restaurants.html">Restaurants</a>
                        <a href="login.html">Login</a>
                    </div>
                    </div>
                    
                    <!-- links -->
                    <ul class="links-container">
                        <li class="link-items"><a href="#" class="links">menu</a></li>
                        <li class="link-items"><a href="#" class="links">order</a></li>
                        <li class="link-items"><a href="#" class="links">restaurants</a></li>
                        <li class="link-items"><a href="login.html" class="links">LOGIN</a></li>
                    </ul>
                </div>
            </div>
        `;
        
        navBar.innerHTML = navBarContent;
        this.navBar.appendChild(navBar);
    }

    render() {
        this.createNavBar();
        document.body.insertBefore(this.navBar, document.body.firstChild); // Insert navBar at the top of the body
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const navBar = new NavBar();
    navBar.render();
});
