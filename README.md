# Cypress base project

## Run tests from scratch

1. [Install Cypress to your system](https://docs.cypress.io/guides/getting-started/installing-cypress.html)
1. For test configuration change envrionment variables in cypress.env.json (create this file in root directory your git repo with tests)
```json
{
    "BASE_URL": "http://zero.webappsecurity.com",
    "LOGIN": "",
    "PASSWORD": ""
}
```
1. Use followed commands to run your test
    ```shell
    npm run installDependencies
    npm run test
    npm run visualizeReport
    ```
1. For add new tests or edit existing go to cypress/integration directory



## Docker
if you have installed docker in your system, you can use the next commands for run tests via docker

### Run tests

```shell
./cy-run.sh installDependencies
./cy-run.sh test # running all test
./cy-run.sh visualizeReport # generating allure report http://localhost:8999 or cypress/allure/report
./cy-run.sh clean
# other in scripts section of your package.json
```

### Cypress open

```shell
$ ./cy-open.sh
```

## Allure, use this example for enrich your test report
```js
before(() => {
    const allure = Cypress.Allure.reporter.getInterface();
    const today = new Date();
    const currentHour = today.getHours();

    allure.writeExecutorInfo({
        name: 'somename',
        type: 'type', // jenkins, bamboo, teamcity
        url: 'https://google.com.ua',
        buildOrder: currentHour, // in case buildOrder are same - it will count as retry
        buildName: 'basic',
        buildUrl: 'https://path-to-ci',
        reportUrl: 'https://path-to-report',
        reportName: 'reportName'
    });

    allure.writeEnvironmentInfo({
        someEnvInfo: 'envInfo'
    });

    allure.writeCategoriesDefinitions([{
        name: 'Not to have class tests',
        messageRegex: /.*not to have class.*/,
        matchedStatuses: ['failed']
    }]);
});

it('should work in synchronous mode', () => {
    const allure = Cypress.Allure.reporter.getInterface();
    allure.description('some description');
    allure.attachment('sample', 'sample attachment', 'text/plain');
    allure.epic('Allure API');
    allure.feature('Synchronous');
    allure.owner('Oleksandr Shevtsov');
    allure.parameter('param', 42);
    allure.severity('critical');
    allure.step('custom step');
    allure.story('Synchronous api should work');
    allure.suite('Allure API Suite');
    allure.issue('bug', 'issueUrl');
    allure.tms('test case', 'tmsUrl');
    allure.tag('customTag');
});

cy.allure().tms('docs', 'https://on.cypress.io/blur');
```

### Additional info
[Latest Cypress docker](https://hub.docker.com/r/cypress/included/tags)
[Latest Cypress docker github](https://github.com/cypress-io/cypress-docker-images)

https://www.cypress.io/blog/2019/05/02/run-cypress-with-a-single-docker-command