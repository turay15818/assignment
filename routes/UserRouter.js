import { createUser, getUsers } from "../controllers/UserControllers.js";
import Login from '../controllers/AuthControllers.js';
import express from "express";

const router = express.Router();

router.post('/', Login)
router.get('/users', getUsers)
router.post('/createUser', createUser)




export default router