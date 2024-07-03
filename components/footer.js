class Footer {
    constructor() {
        this.footer = document.createElement('footer');
        this.footer.id = 'footer';
    }

    createCompanyInfo() {
        const companyInfo = document.createElement('div');
        companyInfo.className = 'company-info';
        const companyInfoContent = `
            <img src="../img/footer-logo.png" class="logo" alt="">
            <div class="social-links">
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-discord"></i></a>
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
            </div>
            <div class="download-btn-group">
                <a href="#" class="download-btn"><img src="../img/play-store.png" alt=""></a>
                <a href="#" class="download-btn"><img src="../img/app-store.png" alt=""></a>
            </div>
        `;
        companyInfo.innerHTML = companyInfoContent;
        this.footer.appendChild(companyInfo);
    }

    createFooterLinks() {
        const footerDiv = document.createElement('div');
        footerDiv.className = 'footer';
        const footerDivContent = `
            <div class="useful-links footer-links-container">
                <h5 class="footer-links-title">useful links</h5>
                <a href="#" class="footer-links">menu</a>
                <a href="#" class="footer-links">restaurants</a>
                <a href="#" class="footer-links">your orders</a>
                <a href="#" class="footer-links">track order</a>
                <a href="#" class="footer-links">support</a>
            </div>
            <div class="information footer-links-container">
                <h5 class="footer-links-title">information</h5>
                <a href="#" class="footer-links">about us</a>
                <a href="#" class="footer-links">privacy policy</a>
                <a href="#" class="footer-links">terms and conditions</a>
                <a href="#" class="footer-links">what info we collect?</a>
            </div>
        `;
        footerDiv.innerHTML = footerDivContent;
        this.footer.appendChild(footerDiv);
    }

    createContactInfo() {
        const footerLinks = document.createElement('div');
        footerLinks.className = 'footer-links';
        const footerLinksContents = `
            <div class="contact footer-links-container">
                <h5 class="footer-links-title">contact us</h5>
                <p class="footer-text">Our main restaurant is located on Street 231, NYC</p>
                <p class="footer-text">Phone - +233 24382805</p>
                <p class="footer-text">Email - stephensoscar603@gmail.com</p>
            </div>
        `;
        footerLinks.innerHTML = footerLinksContents;
        this.footer.appendChild(footerLinks);
    }

    createPaymentPartners() {
        const paymentDiv = document.createElement('div');
        paymentDiv.className = 'payment-partners';
        const paymentDivContents = `
            <div class="payment-partners">
                <img src="../img/visa.png" alt="">
                <img src="../img/master-card.png" alt="">
                <img src="../img/paypal.png" alt="">
                <img src="../img/stripe.png" alt="">
                <img src="../img/apple-pay.png" alt="">
                <img src="../img/google-pay.png" alt="">
            </div>
        `;
        paymentDiv.innerHTML = paymentDivContents;
        this.footer.appendChild(paymentDiv);
    }

    render() {
        this.createCompanyInfo();
        this.createFooterLinks();
        this.createContactInfo();
        this.createPaymentPartners();
        document.body.appendChild(this.footer); // Appends the footer to the body or another element
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const footer = new Footer();
    footer.render();
});