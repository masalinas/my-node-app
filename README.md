## scaffolding
```bash
$ npm init
```

## Start service
```bash
$ npx tsx watch src/index.ts
```

## Build docker image
```bash
$ docker build -t my-node-app .
```

## Run docker container
```bash
$ docker run --name my-node-app --rm -p 8080:3000 my-node-app
```
