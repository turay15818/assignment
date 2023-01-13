import {Sequelize} from 'sequelize'

const Database = new Sequelize('assignment', 'root', '!Love2code', {
    host: 'localhost',
    port: 3306,
    dialect: "mysql"
})
export default Database