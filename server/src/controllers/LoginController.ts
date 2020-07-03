import {NextFunction, Request, Response} from "express";
import {Controller, Get, Post, Use, ValidateBody} from "./decorators";

const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log("Loggeo");
    next();
}

@Controller('/auth')
export default class LoginController {
    @Get('/login')
    @Use(logger)
    getLogin(req: Request, res: Response): void {
        res.send(`
                <form method="POST">
                <div>
                    <label>Email</label>
                    <input name="email">
            </div>
              <div>
                    <label>Password</label>
                    <input name="password" type="password">
            </div>
            <button type="submit">Submit</button>
            </form>`);
    }

    @Post('/login')
    @ValidateBody('email', 'password')
    postLogin(req: Request, res: Response): void {
        const {email, password} = req.body;
        if (email === 'gabi@gabi' && password === '1234') {
            req.session = {loggedIn: true}
            res.redirect("/")
        } else {
            res.send("Invalid credentials");
        }
    }

    @Get('/logout')
    getLogout(req: Request, res: Response): void {
        req.session = null;
        res.redirect("/");
    }
}