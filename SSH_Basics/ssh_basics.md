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
