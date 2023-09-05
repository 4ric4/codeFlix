import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database:'codeflix_development',
    username: 'codeflix',
    password: 'codeflix',
    define:{underscored: true}
    
})