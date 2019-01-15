## Load Balancing
- often provided e.g. by Digital Ocean
- for scaling
- e.g. Nginx reverse-proxy sits in front of servers and distributes demand
- Nginx can also cache requests
e.g. of /nginx `nginx.conf`
[
& matching service in docker-compose.yml
w docker.sock allowing you to run communicate w Docker daemon from inside container
(see https://medium.com/lucjuggery/about-var-run-docker-sock-3bfd276e12fd) ]
```
worker_processes 1;

events { worker_connections 1024; }

http {
  upstream myapp1 {
    <!-- can set here how the load is distributed -->
    server web1:3000;
    server web2:3000;
    server web3:3000;
  }

  server {
    listen 80;
    location / {
      proxy_pass http://myapp1;
    }
    location ~* \.(css|js|gif|jpeg|png)$ {
      expires 168h;
    }
  }
}
```
Testing it:
`npm install -g loadtest`
-t timelimit seconds
-c clients
--rps rates per second
`loadtest -t 5 -c 100 --rps 100 http://localhost:80`

Resources:
- https://nginx.org/en/docs/
- https://www.linode.com/docs/web-servers/nginx/how-to-configure-nginx/
