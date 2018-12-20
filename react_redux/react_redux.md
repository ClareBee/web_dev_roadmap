## React & Redux
### React ~ view layer
One-way flow of data, Virtual DOM, reusable components
### Redux ~ state management
Uses Flux pattern: action => dispatcher => store => view
Single source of truth; state is read only; change via pure functions (reducers)

### Handy tools:
+ routing: [React Router](https://github.com/ReactTraining/react-router)
+ testing: [Jest](https://github.com/facebook/jest) (esp snapshot testing) w react-test-renderer, [react-testing-library](https://github.com/kentcdodds/react-testing-library) (React DOM), [Enzyme](https://github.com/airbnb/enzyme/) (components), 
+ styling: [styled-components](https://www.styled-components.com/), [css-modules](https://github.com/css-modules/css-modules) (locally scoped)
+ static sites: Gatsby
+ utilities: [Ramda](https://github.com/ramda/ramda) (functional)
+ UI-components: [Material-UI](https://material-ui.com/)
+ efficiency: [Reselect](https://github.com/reduxjs/reselect) (selectors can: compute derived data, only recomputed if args changes, composable/can be used as input for other selectors), [Redux-Saga](https://github.com/redux-saga/redux-saga) (manages side effects cf thunk, but using Generators vs callback), [ImmutableJS](https://facebook.github.io/immutable-js/) (Persistent Immutable data structures including: List, Stack, Map, OrderedMap, Set, OrderedSet and Record.)
+ state management: [mobX](https://github.com/mobxjs/mobx)
>React renders application state by providing mechanisms to translate it into a tree of renderable components - virtual DOM = reduces costly DOM mutations. MobX provides mechanism to store and update application state that React then uses = optimally synchronises application state w React components via reactive virtual dependency state graph only updated when nec.
