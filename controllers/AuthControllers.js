import User from "../models/UserModel.js";
import bcrypt from 'bcrypt'

 const Login = async (req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    if (!user) return res.status(404).json({ msg: "Sorry but email is not correct" });
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.status(400).json({ msg: "Incorrect password please try again" });
    req.session.userId = user.id;
    const id = user.id;
    const fullName = user.fullName;
    const email = user.email;
    const staffId = user.staffId;
    const role = user.role;
    const phoneNo = user.phoneNo;
    const address = user.address;
    res.status(200).json({id, fullName, email, staffId, role, phoneNo, address });
}

export default Login