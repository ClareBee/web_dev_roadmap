# PWAs
- web apps that behave like native apps!
- primarily Google-led
- work offline, push notifications, downloadable on mobiles, fast
- testable by Lighthouse

# Checklist
[Google checklist for PWAs](https://developers.google.com/web/progressive-web-apps/checklist)

TL;DR
1) https e.g. [Let's encrypt](https://letsencrypt.org/)
2) app manifest
    - include `<meta name="viewport" content="width=device-width, initial-scale=1">` in `index.html`
    - include `manifest.json` with metadata
    - include favicon in public folder (e.g. https://realfavicongenerator.net/)

3) service worker
    - e.g. via registerServiceWorker in create-react-app (runs in build)
    `navigator.serviceWorker.register('service-worker.js')`
    - see in Application tab in devtools
    - acts as a network-proxy, checks to see if requested resources are already cached (Cache API)
4) responsive
5) works cross-browser
6) fast first load
