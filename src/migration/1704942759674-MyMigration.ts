import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1704942759674 implements MigrationInterface {
    name = 'MyMigration1704942759674'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "partai" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "chairman" character varying NOT NULL, "visionAndMission" character varying NOT NULL, "address" character varying NOT NULL, "image" character varying, "selectedPaslonId" integer, CONSTRAINT "PK_9c5c70fa29884e15f3b88a1b40b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "paslons" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "no" integer NOT NULL, "visionAndMission" character varying NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_fb7268cc991dfa9da1aa9c02941" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "voters" ("id" SERIAL NOT NULL, "userId" integer, "votedPaslonId" integer, CONSTRAINT "REL_18fe28e13757e8e149dfd8f7fa" UNIQUE ("userId"), CONSTRAINT "PK_a58842a42a7c48bc3efebb0a305" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('admin', 'editor', 'ghost')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "fullname" character varying NOT NULL, "address" character varying NOT NULL, "gender" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "age" integer NOT NULL, "role" "public"."users_role_enum" NOT NULL DEFAULT 'ghost', CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "articles" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "author" character varying NOT NULL, "article" character varying NOT NULL, "image" character varying NOT NULL, "date" date NOT NULL, "userId" integer, CONSTRAINT "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "partai" ADD CONSTRAINT "FK_d209d78c62b18e06e7905eb50cd" FOREIGN KEY ("selectedPaslonId") REFERENCES "paslons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "voters" ADD CONSTRAINT "FK_18fe28e13757e8e149dfd8f7faa" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "voters" ADD CONSTRAINT "FK_5ec70ea6d3e364204749e914fa0" FOREIGN KEY ("votedPaslonId") REFERENCES "paslons"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "articles" ADD CONSTRAINT "FK_a9d18538b896fe2a6762e143bea" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" DROP CONSTRAINT "FK_a9d18538b896fe2a6762e143bea"`);
        await queryRunner.query(`ALTER TABLE "voters" DROP CONSTRAINT "FK_5ec70ea6d3e364204749e914fa0"`);
        await queryRunner.query(`ALTER TABLE "voters" DROP CONSTRAINT "FK_18fe28e13757e8e149dfd8f7faa"`);
        await queryRunner.query(`ALTER TABLE "partai" DROP CONSTRAINT "FK_d209d78c62b18e06e7905eb50cd"`);
        await queryRunner.query(`DROP TABLE "articles"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
        await queryRunner.query(`DROP TABLE "voters"`);
        await queryRunner.query(`DROP TABLE "paslons"`);
        await queryRunner.query(`DROP TABLE "partai"`);
    }

}
