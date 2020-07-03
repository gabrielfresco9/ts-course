import {NextFunction, Request, Response} from "express";
import {Controller, Get, Use} from "./decorators";

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    if (req.session?.loggedIn) {
        next();
        return;
    }
    res.status(403).redirect("/login");
}

@Controller('')
export default class LoginController {
    @Get('/')
    getRoot(req: Request, res: Response): void {
        if (req.session?.loggedIn) {
            res.send(`
            <div>
                <div> You are logged in
                </div>
                <a href="/auth/logout">Logout</a>
            </div>`);
        } else {
            res.send(`
            <div>
                <div> You are not logged in
                </div>
                <a href="/auth/login">Login</a>
            </div>`);
        }
    }

    @Get("/protected")
    @Use(requireAuth)
    getProtected(req: Request, res: Response) {
        res.send("SUper secret info");
    }
}