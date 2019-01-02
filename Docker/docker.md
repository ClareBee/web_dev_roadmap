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
e.g.
```yml
version: '3.6'
# https://docs.docker.com/compose/

services:
  # backend api
  smart-brain-api:
    container_name: backend
    # image: node:carbon-alpine
    # builds from Dockerfile:
    build: ./
    command: npm start
    working_dir: /usr/src/smart-brain-api
    environment:
      POSTGRES_URI: postgres://clare:secret@postgres:5432/smart-brain-docker
    ports:
      - "3000:3000"
    # allows access to file system: (i.e. listens to changes cf 'watch')
    volumes:
      - ./:/usr/src/smart-brain-api

  # postgres
  postgres:
    build: ./postgres
    environment:
      POSTGRES_USER: clare
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: smart-brain-docker
      POSTGRES_HOST: postgres #name of service
    ports:
      - "5432:5432"

```
`docker-compose up --build`
`docker-compose down`

`docker-compose up -d`
`docker-compose exec {name of container} bash`

## networks
By default Compose sets up a single network for your app. Each container for a service joins the default network and is both reachable by other containers on that network, and discoverable by them at a hostname identical to the container name. 

## adding postgres
create postgres folder with tables folder for db tables
- postgres
  - tables
    - users.sql
  - seed
    - seed.sql
  - deploy_schemas.sql
  - Dockerfile

e.g. of users table:
```sql
BEGIN TRANSACTION;
CREATE TABLE users (
  id serial PRIMARY KEY,
  name VARCHAR(100),
  email text UNIQUE NOT NULL,
  entries BIGINT DEFAULT 0,
  joined TIMESTAMP NOT NULL
);
COMMIT;
```
In the seed/seed.sql:
```sql
BEGIN TRANSACTION;
INSERT INTO users (name, email, entries, joined) values ('Tim', 'tim@example.com', 5, 2019-01-1);
COMMIT;
```
In the deploy_schemas.sql:
```
\i '/docker-entrypoint-initdb.d/tables/users.sql'
\i '/docker-entrypoint-initdb.d/seed/seed.sql'

```
In the Dockerfile (using https://hub.docker.com/_/postgres/)
```
FROM postgres:10.3

ADD /tables/ /docker-entrypoint-initdb.d/tables/
ADD /seed/ /docker-entrypoint-initdb.d/seed/

ADD deploy_schemas.sql /docker-entrypoint-initdb.d/
```
## using psql
psql = PostgreSQL interactive terminal
https://www.postgresql.org/docs/9.2/app-psql.html
