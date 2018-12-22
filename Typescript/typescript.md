## pros
- autocompletion in editors
- fewer bugs
- self-documenting

## cons
- harder to read/extra layer of complexity
- slower

TypeScript = a superset of JS, w its own compiler
Requires Node
`npm install -g typescript`
`tsc {name of file to compile} --watch` => cf Babel
`tsc --init` - creates config file

cf [Flow](https://flow.org/) - built into create-react-app, depends on Babel, [Elm](https://elm-lang.org/), [Reason](https://reasonml.github.io/)
___
+ see `typescript.ts` for types
+ ts infers type
e.g.
```javascript
let x = 4;
x = 'hello';
```
produces an error.

## 3rd party libraries
Repository of types in [DefinitelyTyped](http://definitelytyped.org/)
e.g. `npm i @types/react` = declaration files


## with create-react-app
Built in as of v.2.1
`npx create-react-app hello-tsx --typescript`
+ to add to project:
`npm install --save typescript @types/node @types/react @types/react-dom @types/jest`
- will need to add Redux/Redux logger etc.
- includes types for React eg `React.SFC<ComponentProps>` = stateless functional component
- `as HTMLElement` - built-in interface
- e.g. for HOC => `children: JSX.Element`
- main types = Interfaces
- events e.g. `searchChange(event: React.SyntheticEvent<HTMLInputElement>): void` => pass into component as named props interface
