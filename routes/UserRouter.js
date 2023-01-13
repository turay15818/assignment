import { createUser, getUsers } from "../controllers/UserControllers.js";
import express   from "express";

const router = express.Router();

router.get('/users', getUsers)
router.post('/createUser', createUser)




export default router