# Performance Testing
[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
[WebPageTest](https://www.webpagetest.org/)
[Lighthouse](https://developers.google.com/web/tools/lighthouse/)

# Steps in Devtools
+ check FPS to see if animations smooth [here](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference#fps)
+ check main thread activities (here)[https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference#activities]
+ check CPU usage, JS heap size, etc w [Performance Monitor](https://developers.google.com/web/updates/2017/11/devtools-release-notes#perf-monitor)
+ check scrolling issues (eg by highlighting on event listener)

# Misc tools/techniques
+ [Optimizilla](https://imagecompressor.com/)
+ [Pingdom](https://tools.pingdom.com/)
+ [Passmarked](https://passmarked.com/?ref=producthunt)
+ [Prefetching](https://www.keycdn.com/support/prefetching)

# Impact of HTTP/2
Aim = to reduce latency by enabling full request and response multiplexing, minimise protocol overhead via efficient compression of HTTP header fields, and add support for request prioritisation and server push
How? new binary framing layer, which dictates how HTTP messages are encapsulated and transferred between client and server. => optimised encoding mechanism

> In short, HTTP/2 breaks down the HTTP protocol communication into an  exchange of binary-encoded frames, which are then mapped to messages that belong to a particular stream, all of which are multiplexed within a
single TCP connection.

[Link](https://developers.google.com/web/fundamentals/performance/http2/)
