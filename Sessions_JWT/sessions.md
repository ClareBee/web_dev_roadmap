From MDN:
>The sessionStorage property allows you to access a session Storage object for the current origin. sessionStorage is similar to localStorage; the only difference is while data stored in localStorage has no expiration time, data stored in sessionStorage gets cleared when the page session ends. A page session lasts for as long as the browser is open and survives over page reloads and restores. Opening a page in a new tab or window will cause a new session to be initiated with the value of the top-level browsing context, which differs from how session cookies work.

(https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)

## Session cookie
aka in-memory cookie, transient cookie or non-persistent cookie
=> in temporary memory while user navigates website
=> usu deleted when browser closed
=> no expiration
=> contain unique session identifiers (via Set-Cookie header)

e.g. traditional cookie-based authentication = stateful (in browser & in server for auth to be tracked/checked)
