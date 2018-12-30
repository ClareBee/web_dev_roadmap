[security basics]("./security.jpg")

## Injections
- most common attacks esp SQL injections (`' or 1=1--` and `'; DROP TABLE users; --`)
- user input & `.innerHTML`- risk of user inputting a script/a broken image tag w script as its src (use `.createTextNode`/ `.appendChild` instead)
1) sanitise input = the whitelist philosophy (only allow permitted input from user) & escaping characters
2) parametrise queries = aka prepared statements
3) [Knex.js](https://knexjs.org/) or other ORMS (object relational mappers)

## 3rd Party Libraries
`npm i -g snyk` - identifies vulnerabilities (npm, Ruby, Java dependencies)
- npm v6 has built in security monitoring/audits

## Logging
[Morgan](https://github.com/expressjs/morgan)
[Winston](https://github.com/winstonjs/winston)
[CORS middleware](https://github.com/expressjs/cors)
`npm i morgan` //middleware for Node
`npm i cors`
`npm i winston`
`const morgan = require('morgan');`
`const cors = require('cors');`
`const winston = require('winston');`
`const bodyParser = require('body-parser')`
`const app = express()`
`app.use(bodyParser.json())`
`app.use(morgan('combined'))`
`app.use(cors())`
`winston.log('info', variableToCheck)`
`winston.error('watch out!')`

## HTTPS
SSL/TLS Certificates
client -> server plain text encrypted via tunnel
https://letsencrypt.org - privacy & user safety
https://www.cloudflare.com - also vs DDoS attacks

## XSS & CSRF
### XSS
Cross Site Scripting - security vulnerability -> injection of client-side scripts into web pages viewed by other users -> e.g. bypassing same-origin policy
e.g. blog post comments e.g. setting `window.location?cookie=` to a malicious website `+ document.cookie`
= session hijacking

### CSRF
Cross Site Request Forgery - unauthorised commands e.g. via malicious link
= session riding/'one-click attack'
e.g. Steal confidential data.; Manipulate online surveys.; Spread worms on social media.; Install malware on mobile phones.

### Content Security Policy
set in headers
e.g.
```javascript
  res.cookie('session', '1', { httpOnly: true }) // only http can access cookies
  res.cookie('session', '1', { secure: true }) // cookies sent securely
  res.set({
    'Content-Security-Policy': "script-src 'self' 'https://apis.google.com'"
  })
```
also: sanitise input e.g. escaping dynamic content, using HTML entities; no `eval()`; no `document.write()`; CSP headers
(Tools e.g. [csurf](https://github.com/expressjs/csurf))
Avoid CSRF by following REST; use anti-forgery tokens; Cookies w SameSite Cookie attribute

## Code Secrets
1) Environment Variables
e.g. in create-react-app `process.env.NODE_ENV`
kept in a `.env` file - needs `REACT_APP_` prefix
available outside create-react-app via `npm i dotenv`

2) Commit History

## Secure Headers
for Express apps
[helmet](https://github.com/helmetjs/helmet)
`npm i helmet`
(more on headers: (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers))

## Access Control
through authentication
- 'Principle of least privilege'
CORS - cross origin resource sharing
e.g. corsOptions, whitelisting - [MDN on CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

## Data Management
- backups (never have one point of failure)
- encryption esp in transition of sensitive data
e.g. passwords => bcrypt, scrypt, Aragon2
e.g. database => pgcrypto (encrypt few columns in postgres db)

hash algorithms - (speed, but not too quick - SHA-256; any change should affect whole - avalanche effect; avoid hash collisions - 'pigeon hole principle' e.g. MD5 broken)
salt - large sequence of additional characters
bcrypt - password hashing  (`.hash()` and `.compare()` functions)

common attacks:
+ brute force (repeat attempts - computationally expensive, low memory requirements)
+ rainbow table (table of pre-hashed passwords - computationally cheap but high memory requirements)

scrypt - password-based key-derivation function (PBKDF - Colin Percival)
 - hash + salt + number of iterations passed into function
 - scrypt also takes in: N-CPU cost param, R-Memory cost param, P-parallelisation param, dkLen-output length
 - function creates password key using loop => slow
 - 1) creates HMAC = hashed message authentication code (digital signature) 2) performs PBKDF2 function 3) starts loop - memory-hard function SMIX (BlockSalsa, Integerify, BlockXOR) 4) repeates PBKDF2 function

## Rate Limiting
e.g. Redis & IP throttling, npm packages (e.g. https://www.npmjs.com/package/express-rate-limit)
