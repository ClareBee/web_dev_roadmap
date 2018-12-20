# Performance
+ transfer (network latency) [minimize files, minimize delivery]
+ client-side [critical render path, PWA, optimized code]
+ back-end processing [CDNs, caching, load balancing, DB scaling, gzip]

## transfer
- minimize files e.g. UglifyJS as part of a build process (e.g. via webpack)
- minimize images
### raster images
* jpeg - photos, many colours, but don't allow for transparency (unlike gif/png) & large size
* gif - limited colours, good for small animations
* pngs - limited colours, smaller than jpeg, good for logos, support transparency
* tiff  - high quality print graphics/scans
* raw - unprocessed from digital camera
* psd - layered Adobe Photoshop design files

### vector images
* svg - vector graphics, scale well, small, customisable, yet usu simplistic?
* PDF - print files
* EPS - individual vector design elements
* AI - original Adobe Illustrator files

* new formats e.g. WebP = better lossless and lossy compression but not widely supported

### optimize images
png - e.g. TinyPNG, jpeg - eg. jpeg-optimizer, [imigx](https://www.imgix.com/)
-reduce size, thumbnails, device-specific sizing via media queries [Css Tricks cheatsheet](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/), remove image metadata (exif - exchangeable image file format - remove at [verexif](https://www.verexif.com/en/)), lower jpeg quality

### have fewer files/images
minimises browser requests, eg by bundling
