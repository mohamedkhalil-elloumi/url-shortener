migration-create:
	docker-compose run api npm run migration:create $(name)
migration-migrate:
	docker-compose run api npm run migration:run
build:
	docker-compose build
dev:
	docker-compose up