## CDNs
Content Delivery Networks (aka edge caching)
e.g. Cloudflare, CloudFront, Azure Cdn
Initial request cached onto network of CDN => closer proximity to user for subsequent requests
 - faster page load
 - able to handle higher traffic loads
 - able to block spammers
 - reduce bandwidth consumption
 - security, https, protection vs DDoS attacks

# why?
qq of latency = delay caused by distance between request and host server

## GZIP
.gz files much smaller
e.g. on express app `npm install compression`// `app.use(compression())`
e.g. nginx/apache config `gzip on;`

cf Google's Brotli? https://github.com/google/brotli = new compression algorithm
[cf earlier Zopfli? - DEFLATE, gzip, zlib formats - Gailly & Adler)
DEFLATE = lossless data compression algorithm + associated file format using combination of LZ77 algorithm + Huffman coding.
zlib = abstraction of DEFLATE?]
= data format specification for data streams compressed with a specific combination of general-purpose LZ77 lossless compression algorithm, Huffman coding and 2nd order context modelling.
= originally re: WOFF2 web fonts

## Database Scaling
1. identify inefficient queries (sorting/indexing = allows for binary search)
2. increase memory
3. vertical scaling (Redis, Memcached)
4. sharding - i.e. horizontal db partitioning
5. more dbs
6. db type
