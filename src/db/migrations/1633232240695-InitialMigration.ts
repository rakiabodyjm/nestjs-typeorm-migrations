import { MigrationInterface, QueryRunner } from 'typeorm'

export class InitialMigration1633232240695 implements MigrationInterface {
  name = 'InitialMigration1633232240695'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "practice_db_1"."dbo"."user" ADD "updated_at" datetime NOT NULL`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "practice_db_1"."dbo"."user" DROP COLUMN "updated_at"`,
    )
  }
}
