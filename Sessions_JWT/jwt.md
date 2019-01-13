From MDN:
>The sessionStorage property allows you to access a session Storage object for the current origin. sessionStorage is similar to localStorage; the only difference is while data stored in localStorage has no expiration time, data stored in sessionStorage gets cleared when the page session ends. A page session lasts for as long as the browser is open and survives over page reloads and restores. Opening a page in a new tab or window will cause a new session to be initiated with the value of the top-level browsing context, which differs from how session cookies work.

(https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)

## Session cookie
aka in-memory cookie, transient cookie or non-persistent cookie
=> in temporary memory while user navigates website
=> usu deleted when browser closed
=> no expiration
=> contain unique session identifiers (via Set-Cookie header)

## Devtools
Application -> Storage

e.g. traditional cookie-based authentication = stateful (in browser & in server for auth to be tracked/checked)

## JWT - e.g. of token-based authentication
- Header + Payload + Signature
- sent by server, stored on browser, sent in requests to server via Authorization header w Bearer + token
- validated by server (no need for server to store it, just run method to decode & verify it w `.verify()`) => stateless + decoupled
- works well w different APIs/Cross Domain/CORS
- server works less => stateless therefore session management faster
- works well with native mobile platforms (easier than cookies) + browsers
BUT:
- much bigger than cookies
- risky re: sensitive data inside JWT (vulnerability to Cross Site Scripting (XSS) and Cross-Site Request Forgery (XSRF or CSRF))

- signed cryptographically NOT encrypted (see https://jwt.io/) - therefore use JWE JSON Web Encryption if using sensitive data

https://auth0.com/blog/ten-things-you-should-know-about-tokens-and-cookies/
Browser API: localStorage, sessionStorage, token in key-value => sent to server via Authorization header + Bearer
