## Webpack
- used by Facebook (create-react-app)
- good for large projects
- 'entry': usu index.js; 'output': usu build folder, 'loaders': compile/transpile code, 'plugins': vital to outputting

## Parcel
- no config!
- good for small projects

## rollup.js
- tree-shaking
- good for your own npm packages

---
## Webpack4
[website](https://webpack.js.org/concepts/)
includes modes (development/production)
no longer requires config file
`npm install --save-dev webpack webpack-dev-server webpack-cli`

## Tools
https://webpack.jakoblind.no/
___
## Parcel
`npm install --save-dev parcel-bundler @babel/preset-env @babel/preset-react`
.babelrc
```
{
  "presets": ["env", "react"]
}
```
in package.json
```
"start": "parcel index.html"
```
