## JS
cost of JS =
1) time for JavaScript Engine in browser parsing/compiling the code
=> see Chrome devtools Performance Tab - 'Record' & refresh
(green line = '1st paint', blue line = 'DOM content loaded', red line = 'load event')
=> see Summary tab - loading, scripting, rendering, painting

2) execution on main thread => therefore small chunks (code-splitting, progressive bootstrapping e.g. by lazy-loading)
e.g. www.webpagetest.com => report shows processing breakdown
- script tag in html is render-blocking

## optimization
aims = fast time to first meaningful paint & fast time to interactive

## 3rd party libraries
usu include production build
create-react-app `npm run build` excludes anything not needed in production e.g. logger
