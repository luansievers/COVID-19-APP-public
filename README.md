# app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Docker

#### Dev
To run:
```sh
docker-compose -f docker-compose.dev.yml up -d --build
```
To stop
```sh
docker-compose -f docker-compose.dev.yml down --rmi all --volumes
```

#### Prod
To run:
```sh
sudo docker-compose up -d --build
```
To stop
```sh
sudo docker-compose down --rmi local --volumes
```
