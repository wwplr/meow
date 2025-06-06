require('dotenv').config();

const Sequelize = require('sequelize');

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

console.log(process.env.DB_HOST, process.env.DB_NAME, process.env.DB_PORT, process.env.DB_DIALECT);

const options = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: process.env.DB_DIALECT,
    logging: false,
    define: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
    },
    dialectOptions: {
        decimalNumbers: true,
    },
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

const db = new Sequelize(dbName, dbUser, dbPassword, options);

const models = {
    Admin: require('../modules/admin/admin.model')(db, Sequelize),
};

for (const key of Object.keys(models)) {
    models[key].associate && models[key].associate(models);
}

module.exports = {
    Sequelize,
    ...models,
    db
};
