## Continuous Integration, Continuous Delivery, cf Continuous Deployment
- frequent PRs, automatic tests/linting/Prettier/TypeScript
e.g. w pre-commit hooks w Husky
`npm install prettier --save-dev --save-exact`
`npm install pretty-quick husky --dev`
Then in package.json:
```json
{
  "scripts":{
    "precommit": "pretty-quick --staged"
  }
}
```
- acceptance tests, frequent deployments
- smoke tests e.g. Telerik TestStudio, monitoring eg New Relic

e.g. CircleCI, Travis CI (hosted servers), Jenkins (managed servers)

`.circleci` folder containing `config.yml` file at root level of project
  e.g.
  ```yaml
  version: 2
  jobs:
    build:
      docker:
        - image: circleci/node:8.9
      steps:
        - checkout
        - run: echo "npm installing"
        - run: npm install
        - run: CI=true npm run build
    test:
      docker:
        - image: circleci/node:8.9
      steps:
        - checkout
        - run: echo "testing"
        - run: npm install
        - run: npm test
    hello_world:
      docker:
        - image: circleci/node:8.9
      steps:
        - checkout
        - run: echo 'hello world'
  workflows:
    version: 2
    build_test:
      jobs:
        - build
        - hello_world
        <!-- ensure test run after hello_world has finished -->
        - test:
            requires:
            - hello_world

```
When pushed to github, runs workflow jobs
