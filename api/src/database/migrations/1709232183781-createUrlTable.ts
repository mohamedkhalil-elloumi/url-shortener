import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUrlTable1709232183781 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "url" (
                "id" SERIAL PRIMARY KEY,
                "slug" varchar NOT NULL,
                "originalUrl" varchar NOT NULL,
                "counter" int NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "url"`);
  }
}
