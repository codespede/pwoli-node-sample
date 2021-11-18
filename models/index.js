import { Sequelize } from 'sequelize';
import json from "../config/config.json";
let jsonConfig = json['development']
let sequelize;
const config = {
    "username": jsonConfig.username,
    "password": jsonConfig.password,
    "database": jsonConfig.database,
    "host": '127.0.0.1',
    "dialect": "mysql"
};
export default sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);
