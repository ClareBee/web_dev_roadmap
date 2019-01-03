## Redis
Key-Value NoSQL database (cf Document - e.g. mongoDB, CouchDB; wide column - e.g. Cassandra; graph - e.g. neo4Jj)
- an in-memory db => v fast = used for small amount of short-lived data (sessions, webpage hit counts etc.) which doesn't matter if lost

[
- relational dbs - Oracle, MySQL, PostgreSQL, SQLite (predefined schema)
- non-relational dbs/NoSQL db - redis, Cassandra, mongoDB, couchDB (no schema needed)
===
install redis from website
cd into redis directory
`make install`
`make test`
`src/redis-server`
`src/redis-cli`
