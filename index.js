import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import SequelizeStore from 'connect-session-sequelize'
import UserRouter from './routes/UserRouter.js'
import db from "./config/Database.js";
import flash from "express-flash";
import session from "express-session";
import dotenv from'dotenv'
// app.use(express.urlencoded({extended: true}))


dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }))
const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
    db: db
});


// (async () => {
//     await db.sync();
// })();



app.use(flash())
app.use(bodyParser.urlencoded({extended: true}))

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:9091',
}));


app.use(express.json())
app.use(express.static('public'))
app.use(UserRouter)

const APP_PORT = process.env.APP_PORT||9090
app.listen(APP_PORT, () => {
    console.log(`Server started successfully and it is running on\nhttp://localhost:9090`);
});