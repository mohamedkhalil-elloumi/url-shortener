# URL Shortener Project

## Getting started

The aim of this project is to shorten urls, which means given a long url, the app will generate a short url that redirects to the original url.

### Technical Stack Used

- Docker
- Node.js
- npm
- TypeScript
- Koa
- PostgresDB
- TypeORM
- Docker Compose

### Running the project

Install dependencies:

```bash
npm i
```

Build the Docker image and run:

```bash
make build
make dev
```

Execute migrations

```bash
make migration-migrate
```
