import Sequelize from 'sequelize';

const DB_PATH = process.env.NODE_ENV === 'test' ? process.env.DB_PATH_TEST : process.env.DB_PATH;

const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT,
  storage: DB_PATH,
});

export default sequelize;
