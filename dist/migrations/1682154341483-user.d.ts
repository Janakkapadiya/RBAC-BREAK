import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class create_user_and_posts_tables1612345678901 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
