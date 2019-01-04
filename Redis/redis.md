## Redis
Key-Value NoSQL database (cf Document - e.g. mongoDB, CouchDB; wide column - e.g. Cassandra; graph - e.g. neo4Jj)
- an in-memory db => v fast = used for small amount of short-lived data (sessions, webpage hit counts etc.) - takes occasional snapshots - for data which doesn't matter if lost

[
- relational dbs - Oracle, MySQL, PostgreSQL, SQLite (predefined schema)
- non-relational dbs/NoSQL db - redis, Cassandra, mongoDB, couchDB (no schema needed)
===
install redis from website
cd into redis directory
`make install`
`make test`
`src/redis-server`
`src/redis-cli` in another terminal
===
## Redis Commands
See https://redis.io/commands
<!-- key value  -->
`SET name "godzilla"`
`EXISTS name`
`GET name`
`DELETE name`

e.g. `SET session {sessionName}`; `EXPIRE session 10`
`SET counter 100`; `INCRBY counter 30`; `DECR counter` (by 1)

## Redis Data Types
- strings
- hashes  e.g. `HMSET user id 45 name "clare"` => `HGET user id` = 45; `HGETALL user`

- lists (Linked Lists, not arrays => fast insertion, slow retrieval)
e.g. `LPUSH ourlist 10`; `RPUSH ourlist "hello"`
`LRANGE ourlist 0 1` (index); `RPOP ourlist`
- sets - doesn't allow repeated members (unlike lists)
e.g. `SADD ourset 1 2 3 4`; `SMEMBERS ourset`; `SISMEMBER ourset 5` = 0 (no)
- sorted sets - no duplicates and associated w score (smallest to greatest)
e.g. `ZADD team 50 "Nuts"`; `ZADD team 20 "Bolts"`; `ZRANK team "Bolts"` => 0 (1st)
