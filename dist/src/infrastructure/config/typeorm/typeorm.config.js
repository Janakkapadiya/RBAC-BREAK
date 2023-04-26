"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
const path_1 = require("path");
if (process.env.NODE_ENV === 'local') {
    dotenv.config({ path: '.env' });
}
dotenv.config({ path: '.env' });
const config = {
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [(0, path_1.join)(__dirname, '**', '*.entity.{ts,js}')],
    synchronize: false,
    migrationsRun: true,
    migrationsTableName: 'migration_todo',
    migrations: ['dist/migrations/*.js'],
};
const dataSource = new typeorm_1.DataSource(config);
exports.default = dataSource;
//# sourceMappingURL=typeorm.config.js.map