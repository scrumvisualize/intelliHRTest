# Cypress UI tests:


## Getting Started

Cypress is an End to End UI testing tool.The below instructions will get you start working with this cypress UI tests.

### Prerequisites:

What software/ tools you need to install and their versions

```
Install npm and node.js  >>> v10.15.3
Install cypress 4.0.2 version  >>  command follows >> $ npm install cypress --save-dev
Install npm i for installing all the dependencies mentioned in package.json
Install Docker and all dependencies.

```

### Instructions:

A step by step process that tell you how to run the Cypress. 


### How to run in Docker container: 

Created a Docker account as a prerequisite.

```

1) Clone the github repo [ https://github.com/scrumvisualize/intelliHR.git ] to some location drive, example C:\Work\intelli
2) Install 'Docker' for Windows/Desktop machine.
3) Navigate to windows > Run > type cmd, open the CLI prompt
4) From the command prompt 'cd' to the folder directory, assume if the project is cloned to the following location C:\Work\intelli\intelliHR
    then 'cd C:\Work\intelli\intelliHR'
5) Now look for https://hub.docker.com/u/cypress
6) Run the following docker command from above cypress project folder location, Docker image with all dependencies and Cypress installed globally
   docker run -it -v %cd%:/e2e -w /e2e cypress/included:4.0.2 
7) Cypress UI test will start running the test in the docker container.

```


### How to run via NPM run command: 
note: Cypress run commands are written under scripts section in package.json file 

```

1) Clone the github repo [ https://github.com/scrumvisualize/intelliHR.git ] to some location drive, example C:\Work\intelli
2) Navigate to windows > Run > type cmd, open the CLI prompt
3) From the command prompt 'cd' to the folder directory, assume if the project is cloned to the following location C:\Work\intelli\intelliHR
   then cd C:\Work\intelli\intelliHR
   
4) Now type npm run cy:test-intelliHR in the command prompt to run in headless mode.
5) Cypress successfully starts running the tests in headless mode.

Now if the user need to open the Cypress test runner, follow the below command:

From the command prompt 
 >> Type  npm run cy:open-intelliHR 
 >> Cypress test runner will open successfully. Now you can click on spec files to run the tests.

```
 

### Break down the end to end tests into four spec files:

```
1. addCurrency.spec.js
2. editCurrency.spec.js
3. deleteCurrency.spec.js
4. listAndGroupCurrency.spec.js

```

```
1) Automation UI tests are created in App actions.

2) baseUrl is configured in cypress.json file.

3) App actions are written in 'commands.js' file, sits under cypress/support/ folder.

4) Added the require('cypress-plugin-retries') in the index.js file sits under cypress/support.

5) Cypress Run commands are written in package.json > under scripts section.

    cy:open-intelliHR  -->> this command will open the cypress test runner
	cy:test-intelliHR  -->> this command will run cypress in headless mode.

 b) You need to run the command as below from command prompt:
		$ npm run cy:test-intelliHR 
		$ npm run cy:open-intelliHR 

6. Videos will be created and available under cypress/videos folder for every 'cypress run'. 
   But cypress will not create videos while running using 'cypress open' command, ie running from test runner.

```

## Authors

* **Vinod Mathew**


### Note:

* For the time being cypress test run are not integrated into cypress dashboard. As it need a valid login email to cypress dashboard. 
* Once we have that email we can set it up.
* I have also added Cypress.env.json file, if we want to read variables from env files.

