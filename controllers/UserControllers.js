import User from "../models/UserModel.js";
import { Sequelize } from "sequelize";
import Op from "sequelize";
import bcrypt from "bcrypt"

export const getUsers = async (req, res) => {
    try {
        const response = await User.findAll({
            attributes: ['fullName', 'email', 'staffId', 'role', 'phoneNo', 'address']
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const createUser = async (req, res) => {
    const { fullName, email, password, staffId, role, phoneNo, confPassword, address } = req.body;
    if (password !== confPassword) return res.status(400).json({ msg: "Password and Confirm Password does not match" })
    const hashedPassword = bcrypt.hashSync(password, 10);
    try {
        await User.create({
            fullName: fullName,
            email: email,
            staffId: staffId,
            role: role,
            phoneNo: phoneNo,
            password: hashedPassword,
            address: address

        })
        res.status(200).json({ msg: "User Created Successfully" })
        console.log(User)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }

}