"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_user_and_posts_tables1612345678901 = void 0;
class create_user_and_posts_tables1612345678901 {
    constructor() {
        this.name = 'create_user_and_posts_tables1612345678901';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`user\` (
        \`user_id\` bigint NOT NULL AUTO_INCREMENT,
        \`user_email\` varchar(255) NOT NULL,
        \`user_name\` varchar(255) NOT NULL,
        \`user_password\` varchar(255) NOT NULL,
        \`role\` enum('User') NOT NULL DEFAULT 'User',
        PRIMARY KEY (\`user_id\`)
      ) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`posts\` (
        \`id\` bigint NOT NULL AUTO_INCREMENT,
        \`title\` varchar(255) NOT NULL,
        \`content\` varchar(255) NULL,
        \`user_id\` bigint NOT NULL,
        PRIMARY KEY (\`id\`),
        CONSTRAINT \`FK_7ef1260a42c6fe8f6e1b7e3b6c2\`
          FOREIGN KEY (\`user_id\`)
          REFERENCES \`user\` (\`user_id\`)
          ON DELETE CASCADE
          ON UPDATE CASCADE
      ) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`posts\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }
}
exports.create_user_and_posts_tables1612345678901 = create_user_and_posts_tables1612345678901;
//# sourceMappingURL=1682154341483-user.js.map