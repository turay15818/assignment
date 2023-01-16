import db from "../config/Database.js";
import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;

const User= db.define('users',{
    fullName:{
        type: DataTypes.STRING,
    },
    staffId:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
    },
    phoneNo:{
        type: DataTypes.STRING,
    },
    address:{
        type: DataTypes.STRING,
    },
    password:{
        type: DataTypes.STRING,
    },
    role:{
        type: DataTypes.STRING,
    }
})

export default User;
