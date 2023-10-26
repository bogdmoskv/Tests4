describe('Second task', () => {
    describe('Navigation to all pages test', () => {
        describe('Categories test', () => {
            beforeEach(() => {
                cy.visit('http://demo-store.seleniumacademy.com/')
            });
            it('should navigate to women page', () => {
                cy.get('.nav-primary .level0.nav-1 > a').click();
                cy.get('.page-title.category-title h1').contains('Women')
            });
            it('should navigate to men page', () => {
                cy.get('.nav-primary .level0.nav-2 > a').click();
                cy.get('.page-title.category-title h1').contains('Men')
            });
            it('should navigate to accessories page', () => {
                cy.get('.nav-primary .level0.nav-3 > a').click();
                cy.get('.page-title.category-title h1').contains('Accessories')
            });
            it('should navigate to home & decor page', () => {
                cy.get('.nav-primary .level0.nav-4 > a').click();
                cy.get('.page-title.category-title h1').contains('Home & Decor')
            });
            it('should navigate to sale page', () => {
                cy.get('.nav-primary .level0.nav-5 > a').click();
                cy.get('.page-title.category-title h1').contains('Sale')
            });
            it('should navigate to vip page', () => {
                cy.get('.nav-primary .level0.nav-6 > a').click();
                cy.get('.page-title.category-title h1').contains('VIP')
            });
        });
        describe('Company pages test', () => {
            beforeEach(() => {
                cy.visit('http://demo-store.seleniumacademy.com/')
            });
            it('should navigate to About page', () => {
                cy.get('.footer .links:nth-child(2) ul li:nth-child(1) a').click();
                cy.get('.page-head h3').contains('OUR STORY')
            });
            it('should navigate to Contact us page', () => {
                cy.get('.footer .links:nth-child(2) ul li:nth-child(2) a').click();
                cy.get('.page-title h1').contains('Contact Us')
            });
            it('should navigate to Customer Service page', () => {
                cy.get('.footer .links:nth-child(2) ul li:nth-child(3) a').click();
                cy.get('.page-title h1').contains('Customer Service')
            });
            it('should navigate to Privacy Policy page', () => {
                cy.get('.footer .links:nth-child(2) ul li:nth-child(4) a').click();
                cy.get('.page-title h1').contains('Privacy Policy')
            });
        });
        describe('Company pages test', () => {
            beforeEach(() => {
                cy.visit('http://demo-store.seleniumacademy.com/')
            });
            it('should navigate to Site pam page', () => {
                cy.get('.footer .links:nth-child(3) ul li:nth-child(1) a').click();
                cy.get('.page-title h1').contains('Categories')
            });
            it('should navigate to Search terms page', () => {
                cy.get('.footer .links:nth-child(3) ul li:nth-child(2) a').click();
                cy.get('.page-title h1').contains('Popular Search Terms')
            });
            it('should navigate to Advanced search page', () => {
                cy.get('.footer .links:nth-child(3) ul li:nth-child(3) a').click();
                cy.get('.page-title h1').contains('Catalog Advanced Search')
            });
        });
        describe('Company pages test', () => {
            beforeEach(() => {
                cy.visit('http://demo-store.seleniumacademy.com/')
            });
            it('should navigate to Site pam page', () => {
                cy.get('.footer .links:nth-child(4) ul li:nth-child(1) a').click();
                cy.get('.page-title h1').contains('Login or Create an Account')
            });
            it('should navigate to Search terms page', () => {
                cy.get('.footer .links:nth-child(4) ul li:nth-child(2) a').click();
                cy.get('.page-title h1').contains('Orders and Returns')
            });
        });
    });
    describe('Registration test', () => {
        before(() => {
            cy.visit('http://demo-store.seleniumacademy.com/')
        })
        it('should register a user', () => {
            cy.get('.account-cart-wrapper > a').click().then(() => {
                cy.get('#header-account ul li:nth-child(5) a').click();
                cy.get('input#firstname').type('John');
                cy.get('input#middlename').type('_');
                cy.get('input#lastname').type('Doe');
                cy.get('input#email_address').type('johndoe@mail.com');
                cy.get('input#password').type('veryStrongPassword');
                cy.get('input#confirmation').type('veryStrongPassword');
                cy.get('button[title="Register"]').click();
            })
        });
    });
    describe('Find and add item to cart', () => {
        before(() => {
            cy.visit('http://demo-store.seleniumacademy.com/')
        })
        it('should find item and add it to cart', () => {
            cy.get('input#search').type('FRENCH CUFF COTTON TWILL OXFORD');
            cy.get('button[title="Search"]').click();
            cy.get('.item:nth-child(1) .actions > a').click();
            cy.get('.option-indigo .swatch-label:nth-child(1)').click();
            cy.get('#swatch62 > span.swatch-label').click();
            cy.get('button[title="Add to Cart"]:nth-child(1)').click();
            cy.get('.success-msg span').contains('The Essential Boot Cut Jean was added to your shopping cart.');
        });
    });
});