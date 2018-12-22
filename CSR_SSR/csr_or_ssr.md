## Server Side Rendering
- converts HTML files in the server
- browser has to request for new content
pros:
- good for static sites
- good for SEO
cons:
- fast initial load but overall slow page rendering & full page reloads


## Client Side Rendering
- barebones HTML (e.g. div w an id)
- rendering content in the browser w JavaScript e.g. React
pros:
- rich site interactions
- fast rendering after the initial load
- good for web apps
cons:
- harder for SEO
- usu requires external library
- can't run until ALL JavaScript is loaded (initial load time can be slow)
----

## Server-Side React?
e.g. with [Gatsby](https://www.gatsbyjs.org/) & [Next.js](https://nextjs.org/)
- needs React on Server & Client - speeds up initial load
server: `ReactDOMServer.renderToNodeStream()` (faster)/ `ReactDOMServer.renderToString()`
client: `ReactDOM.hydrate()`
Sends as text, converts in the browser window (attaches event listeners etc.)
e.g. Express Node app

```javascript
import express from 'express';
import React from 'react';
import fs from 'fs'; // file system module from Node.js
import { renderToString } from 'react-dom/server';
import App from './App';

const app = express();
app.use(express.static('/public'));

const robotdata = JSON.parse(fs.readFileSync('/public/robots.json', 'utf8')); //encoding format
const RobotFriendsApp = React.createElement(App);
app.get('/', (request, response) => {
  response.render('index', {
    content: renderToString(RobotFriendsApp({data: robotdata}));
  });
});
```
