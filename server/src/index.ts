import 'reflect-metadata';
import express from 'express';
import * as bodyParser from "body-parser";
import cookieSession = require("cookie-session");
import "./controllers/LoginController";
import "./controllers/RootController";
import {AppRouter} from "./appRouter";

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({keys: ['gabikey']}));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
    console.log("I'm up at 3000")
})