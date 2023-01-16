import {Sequelize} from 'sequelize'

const db = new Sequelize('assignment', 'root', '!Love2code', {
    host: 'localhost',
    port: 3306,
    dialect: "mysql"
})
export default db