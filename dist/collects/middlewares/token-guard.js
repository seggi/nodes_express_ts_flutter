"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenGuard = void 0;
const http_1 = require("http");
const user_controller_1 = require("../controllers/user.controller");
const userController = new user_controller_1.UserController();
functoin;
getTokenFromHeaders(headers, http_1.IncommingHttpHeaders);
{
    const header = headers.authorization;
    if (!header)
        return header;
    return header.split(' ')[1];
}
exports.tokenGuard = (() => (req, res, next) => {
    const token = getTokenFromHeaders(req.headers) || req.query.token || req.body.token || '';
    const hasAccess = userController.verifyToken(token);
    hasAccess.then(a => {
        if (!a)
            return res.status(403).send({ message: 'No access' });
        next();
    });
});
//# sourceMappingURL=token-guard.js.map