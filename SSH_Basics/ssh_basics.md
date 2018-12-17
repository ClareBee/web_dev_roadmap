# SSH Basics - Secure Shell protocol
+ **FTP** - stateful, files, ASCII or binary (text conversion possible), command-response, FXP (third party transfers often disabled)
(idle control channel status causes problems with NATS; issues w firewalls too due to 2 connections)
+ **HyperText Transfer Protocol** - stateless, browser-focused, binary only, meta-data via headers, supports pipelining, optimises TCP packets, more authentication options, supports more advanced byte ranges, persistent connection (chunked encoding, compression), supports proxies
+ **HTTPS** - encrypted -> **SSL** - Secure Socket Layer (also Cryptographic Network protocol like SSH) - via public key/private key, secured by certificate, port 443 => overtaken by **TLS**  (1.3)- Transport Layer Security - privacy/data integrity (Message Authentication Code), TLS handshake + record, symmetric cryptography (Diffie-Hellman, RSA, pre-shared key, Secure Remote Password)
[attacks incl - Renegotation (splicing requests); FREAK/Logjam - via downgraded security; CrossProtocol/DROWN - via obsolete SSL; BEAST - browser exploit via weaknesses in Cipher Block Chaining; CRIME/BREACH - via cookies, session hijacking; Timing attacks on padding/POODLE; Truncation - remains logged on; Unholy PAC - exposes URL; Sweet32 - man-in-the-middle, malicious JS injection; Heartbleed, BERserk, Cloudflare - steals priv keys, vuln via reused nonces]
+ **SMTP** - Simple Mail Transfer Protocol - protocol for sending mail (client-server, server-server)
+ **IMAP** - Internet Messaging Access Protocol - syncs client(s) w mail server - managing/retrieving (limited space)
+ **POP3** - Post Office Protocol - not synced, downloaded, suited to single client device
+ **SSH** - used over shell, communicating w OS, remote access to other computers, built-in auth via port 22 (sometimes blocked by firewall), public key/private key, or user/password
___
## commands
Ubuntu - installing server-side  
`sudo apt-get install openssh-server`  
Get IP address  
`ifconfig`  
user = account e.g. default root  
host = ip address of the computer you want to connect to  
[requires ssh client on Windows < 10 e.g. PuTTY]  
`ssh {user}@{host}`  
Copying/transferring files eg via rsync https://rsync.samba.org/  
e.g. ` rsync -av . {user}@{host}:~/new-folder-name`  
___
## techniques in ssh
+ symmetrical encryption
  shared key to decrypt message - via key exchange algorithm to prevent interception. key unique to session

+ asymmetrical encryption
  uses public/private key pairs, one-way relationship

  ssh = both parties generate temp public/private keys => produces identical secret session keys via Diffie Hellman key exchange
  - key NOT actually exchanged -> public variables in plain text: generator g - small prime number, n - big number (2000-4000 bits long) to make brute forcing difficult
  - modular arithmetic/discrete log problem/exponentiation via two numbers
  - shared at the start of a handshake/defaulted & combined with private variables == shared secret
  - man in the middle risk? 'impersonation' - shared secrets with both sides of the targeted message exchange
  - combined with RSA/ signed hash => signature verification
  - only RSA? = if RSA is ever compromised, everything is decryptable (1-2 yrs), whereas DH is per session ('ephemeral Diffie Hellman key')
+ elliptic curve Diffie Hellman
  - elliptic curve cryptography - curves in 2 dimensions
  y squared = x cubed  + ax + b
  - generator = a point on the curve. adds g to itself = tangent intercepts curve (mathematically more efficient = shorter key sizes)
+ RSA
  - RSA (Rivest–Shamir–Adleman) = public-key cryptosystem for secure data transmission. public encryption key & private decryption key ("factoring problem" = factorization of product of 2 large primes) Slow/not v efficient
+ IKE (Internet Key Exchange)
  IPsec based tunnelling protocol -> secure VPN communication channel. negotiation => Security Association (SA). Builds on Oakley protocol + ISAKMP = Internet Security Association and Key Management Protocol. IKEv2 = server certificate authentication (vs Man in the Middle, DoS attacks)
+ hashing
  HMAC = hash-based message authentication code w cryptographic hash function & secret cryptographic key. data integrity + authentication. e.g. SHA-256, SHA-3 (used in JWTs). MAC = hash generated from symmetric key, packet sequence number + message contents. matching hashes = proves nothing tampered with
+ authentication via password or RSA
  `ssh-keygen -t rsa -b 4096 -C "test@gmail.com"`
  add to authorized_keys via nano
  `ssh-add {key}`
