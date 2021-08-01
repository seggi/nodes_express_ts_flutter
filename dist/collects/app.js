"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const user_route_1 = __importDefault(require("./routes/user.route"));
// Routes
const app = express_1.default();
const port = 3000;
class App {
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.settings();
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded());
    }
    route() {
        this.app.use('/api', user_route_1.default);
    }
    async listen() {
        this.app.listen(this.app.get('port'));
        console.log('server started on port', this.app.get('port'));
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map