## Caching
- temporary storage to save asking server again
### Benefits:
+ Reduced latency improves response times.
+ Improved round-trip-times (RTT) due to less web traffic.
+ Higher throughput so origin server can serve more requests.
+ Reduced bandwidth consumption decreases network traffic and reduces network congestion.
+ Serving documents from nearby proxy cache minimises transmission delay.
+ In cases where remote server may not be available due to crash or network issue, it may be possible to obtain cached copy of resources via a proxy.

### Registers (CPU registers/processor register):
= one of a small set of data holding places, part of computer processor
= quickly accessible, usu at top of memory hierarchy (closer than caches)

### CPU Caches
= hardware cache used by CPU to reduce average cost (time or energy) to access data from main memory. A cache
= i.e. smaller, faster memory, closer to a processor core, which stores copies of  data from frequently used main memory locations.
[See [Wikipedia](https://en.wikipedia.org/wiki/CPU_cache): "Most CPUs have different independent caches, including instruction and data caches, where the data cache is usually organised as a hierarchy of more cache levels (L1, L2, L3, L4, etc.)"

### RAM
= temporary storage still

### Hard Disk Drive cf Solid Disk Drive
= long-term storage


### browser
=> see Network tab
e.g. Service Worker, cache storage (+ lesser used application cache), session storage, local storage, memory cache, disk cache

## cache busting
- giving users up-to-date version of app
- e.g. create-react-app `npm run build` creates files w numbers e.g. `main.123345.css` & changes number w every update

- server can return headers to influence caching:
`const app = express()`
`app.use(cors())`
middleware = serving static files in express
`app.use('/static', express.static(path.join(__dirname, 'public'), {'maxage': '2h'})`
automatically creates ETag header => keeps track of changes; 200 for changes, 304 for 'not modified'
cf setting headers 'Cache-Control'
e.g.
`app.get('/{name of endpoint}', (req, res) => {
  res.header('Cache-Control', 'public max-age=86400')
  res.header('Content-Type', 'text/html')
  res.send(new Buffer('<h2>Test string</h2>'))
})
app.listen(3000 () => console.log('app listening on port 3000'))`
 - automatically generates etag to communicate validation token

### Resources:
- https://medium.freecodecamp.org/the-hidden-components-of-web-caching-970854fe2c49
- https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching
- https://devcenter.heroku.com/articles/increasing-application-performance-with-http-cache-headers
