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
CMD ["/bin/bash"]
```
`docker build -t mycontainer .`
`docker run -it mycontainer` => takes you into bash shell for container (tty environment)
