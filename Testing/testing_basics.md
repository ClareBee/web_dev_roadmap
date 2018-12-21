## Unit testing
- testing individual functions/classes
- esp pure functions (no side effects, deterministic)

## Integration testing
- testing how pieces of code work together
- often using stubs/mocks/spies
- usu brittle...

## Automation testing
- UI tests, real-life scenarios on the browser
- simulates user behaviour


## Testing Libraries & Tools
JSDOM(https://github.com/jsdom/jsdom)
>a JavaScript based headless browser that can be used to create a realistic testing environment.

[Puppeteer](https://pptr.dev/)
  >
Puppeteer => Node library which provides high-level API to control headless Chrome or Chromium over DevTools Protocol. Also configurable to use full (non-headless) Chrome or Chromium.
e.g.
    + Generate screenshots and PDFs of pages.
    + Crawl a SPA (Single-Page Application) and generate pre-rendered content (i.e. "SSR" (Server-Side Rendering)).
    + Automate form submission, UI testing, keyboard input, etc.
    + Create an up-to-date, automated testing environment. Run your tests directly in the latest version of Chrome using the latest JavaScript and browser features.
    + Capture a timeline trace of your site to help diagnose performance issues.

[Enzyme](https://airbnb.io/enzyme/) - suited for React components
scaffolding - Jasmine/Jest/Mocha
assertions - Jasmine/Jest/Chai (BDD, usu paired w Mocha)
test-runner - Jasmine/Jest/Mocha/KarmaJS
mocks/spies/stubs - Jasmine/Jest/Sinon.js
coverage - Istanbul/Jest
integration - Nightmare, Cypress, TestCafe etc

e.g. `npm test -- --coverage`
