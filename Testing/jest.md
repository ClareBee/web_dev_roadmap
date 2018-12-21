## Jest Cheatsheet
[cheatsheet](https://github.com/sapegin/jest-cheat-sheet)

`npm test` as set up in react-scripts in create-react-app

## Async tests
`expect.assertions(1)` & `done()` = checks test assertions actually running
or return the promise to ensure test has run

## Mocks and Spies
e.g.
```javascript
const mockFetch = jest.fn()
  .mockReturnValue(Promise.resolve({
    json: () => Promise.resolve({
      count: 87,
      result: [1, 2, 3]
    })
  }))
```
## Snapshot testing
`.toMatchSnapshot()`
- detects any changes, ideal for stateless 'dumb' components
- `u` to update failing snapshots for intentional changes
- `npm test -- --coverage` generates coverage report
