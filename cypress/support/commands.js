import { cyan } from "color-name"

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

let LOCAL_STORAGE_MEMORY = {};
const urlExtension = "/dashboard";
var today = new Date();
var currentDate = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

Cypress.Commands.add('loginTointelliHr', () => {
    cy.visit('/');
    cy.get('#username').type("vinod.mathew");
    cy.get('#password').type("Test1234!");
    cy.get('button[type="submit"]').contains("Sign In").click(); 
})

Cypress.Commands.add('createPerson', () => {
    cy.get('a[href="https://vinod-demo.intellihrdev.net/people"]').click();
    cy.get('a[title="Create New Person"]').click();
    cy.wait(4000);
    cy.get('#react-select-3--value > div').last().click({force:true});
    cy.get('#titleId').type("Mr{enter}");
    //cy.get('#react-select-14--value > div ').type("Male{enter}");
    cy.get('.Select-control > div > div > span').last().click();
    cy.get('#genderId').type("Male")
    cy.get('.Select-menu-outer > .Select-menu > div').contains("Male").click();
    cy.get('#dateOfBirth').click();
    cy.get('.CalendarDay__today_3')
    .each(($td) => {
      cy.wrap($td).click();
    })  
    cy.get('#workRightExpiryDate').click();
    cy.get('.CalendarDay__today_3')
    .each(($td) => {
      cy.wrap($td).click();
    })        
    cy.get('#firstName').type('AAAA-Automation');
    cy.get('#lastName').type('Test-1');
    //cy.get('span > button[type="submit"]').contains("Continue to Create Job").click().scrollIntoView();
    cy.get('span > button[type="submit"]').contains("Create Person Only").click().scrollIntoView();
})

Cypress.Commands.add('deleteAutomationPerson', () => {
    cy.visit('/');
    cy.get('#username').type("vinod");
    cy.get('#password').type("Test1234!");
    cy.get('button[type="submit"]').contains("Sign In").click(); 
    cy.get('a[href="https://vinod-demo.intellihrdev.net/people"]').click();
   // cy.get('#DataTables_Table_0 > tbody > tr > td')
 
})

Cypress.Commands.add('forgotPassword', () => {
  cy.visit('/');
  cy.get('[[href="/forgot_password"]').click();
  cy.get('#email').type("vinod.mathew");
  cy.get('button[type="submit"] > span').contains("Submit").click();
})

Cypress.Commands.add('logoutintelliHr', () => {
    cy.get('.avatar-inner-container.with-hover').last().click({force:true});
    cy.get('[data-component-type="popover"] > span > div > ul > li > a').contains("Log Out").click();
  })


Cypress.Commands.add('createJob', () => {
    cy.get('#startDate').type('10/03/2020');
    cy.get('#name').type('Tester');
})

Cypress.Commands.add('loadTokens', () => {
    //cy.clearLocalStorage();
    return cy.fixture('tokenData.json').then(data => {
        const keys = Object.keys(data);
        keys.forEach(key => {
            window.localStorage.setItem(key, data[key]);
        });
    });
});

Cypress.Commands.add("restoreLocalStorage", () => {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
      localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
    });
  });

Cypress.Commands.add('loginRequest', () => {
  const accessToken = localStorage.getItem('tokens');
    var cookieValue = document.cookie.split(';');
    cy.request({
      method: 'GET',
      url: '/dashboard',
      headers: {
        'accept': '*/*',
        'content-type': 'text/html',
        'authorization':`bearer ${accessToken}`,
        'cookie':`${cookieValue}`
      },
      body:{
        username: 'vinod.mathew',
        password:'Test1234!'
      }
    })
  })