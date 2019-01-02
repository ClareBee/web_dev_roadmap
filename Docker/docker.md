## Virtualised Machines
sandbox environments e.g. VirtualBox

## Containers
light-weight alternative designed for single applications e.g. Docker
use the host's OS
container orchestration e.g. Kubernetes

Container => Image (standalone package) & File System, isolated from host machine & executed inside the container
DockerHub => cf npm, prewritten Images e.g. for node.js

## Docker
Dockerfile at root level
```
FROM node:carbon-alpine
RUN apk update && apk add bash
WORKDIR /usr/src/{directory name}
COPY ./ ./
RUN npm install
CMD ["/bin/bash"]
```
(Alpine needs bash installing first)
`docker build -t mycontainer .`
`docker run -it -d -p 3000:3000 mycontainer` => takes you into bash shell for container (tty environment) & assigns hash (`-d` runs it in the background, `-p` for port-forwarding)

`docker ps` - to see all containers
`docker exec -it {container hash} bash`
`docker stop {container hash}`
---
RUN executes command(s) in a new layer and creates a new image. - often used for installing software packages.
CMD sets default command and/or parameters, which can be overwritten from command line when docker container runs.
ENTRYPOINT configures a container that will run as an executable.
---
`docker compose` - used to orchestrate multi-container Docker applications
`docker-compose.yml` at root level of directory
