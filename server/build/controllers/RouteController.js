"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
var requireAuth = function (req, res, next) {
    if (req.session.loggedIn) {
        next();
        return;
    }
    res.status(403).redirect("/login");
};
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.getRoot = function (req, res) {
        var _a;
        if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
            res.send("\n            <div>\n                <div> You are logged in\n                </div>\n                <a href=\"/auth/logout\">Logout</a>\n            </div>");
        }
        else {
            res.send("\n            <div>\n                <div> You are not logged in\n                </div>\n                <a href=\"/auth/login\">Login</a>\n            </div>");
        }
    };
    LoginController.prototype.getProtected = function (req, res) {
        res.send("SUper secret info");
    };
    __decorate([
        decorators_1.Get('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getRoot", null);
    __decorate([
        decorators_1.Get("/protected"),
        decorators_1.Use(requireAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getProtected", null);
    LoginController = __decorate([
        decorators_1.Controller('')
    ], LoginController);
    return LoginController;
}());
exports.default = LoginController;
