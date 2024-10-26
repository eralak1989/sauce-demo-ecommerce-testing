
import LoginPage from '../support/pageObjects/LoginPage';
import InventoryPage from '../support/pageObjects/InventoryPage';
import CartPage from '../support/pageObjects/CartPage';
import CheckoutPage from '../support/pageObjects/CheckoutPage';
import CheckoutCompletePage from '../support/pageObjects/CheckoutCompletePage';

describe('Sauce Demo Testing', () => {
    const username = 'standard_user';
    const password = 'secret_sauce';
    const productName = 'Sauce Labs Backpack';
    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage();
    const checkoutCompletePage = new CheckoutCompletePage();

    beforeEach(() => {
        loginPage.visit();              
        loginPage.fillCredentials(username, password); 
        loginPage.submit();              
        loginPage.verifyLoginSuccess();  
    });

    it('Log in with valid credentials', () => {
       
        loginPage.verifyLoginSuccess();  
    });

    it('Add products to the cart and complete the purchase', () => {
        inventoryPage.selectProduct(productName);

        let productPrice;
        let productDescription;

        inventoryPage.getProductPrice().then((price) => {
            productPrice = price;

            inventoryPage.getProductDescription().then((desc) => {
                productDescription = desc;

                inventoryPage.addToCart();
                inventoryPage.goToCart();

                cartPage.proceedToCheckout();

                checkoutPage.fillCheckoutForm('Eranga', 'Amarasinghe', '123123');
                checkoutPage.verifyOrderSummary(productName, productPrice, productDescription);
                checkoutPage.completePurchase();

                checkoutCompletePage.verifySuccessMessage();
            });
        });
    });
});