"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get("/v1/users", (req, res) => {
    return res.status(200).json({
        users: [
            {
                id: 1,
                name: "John Doe",
            },
        ],
    });
});
const server = http_1.default.createServer(app);
server.listen(port, () => {
    console.log("app running on port", port);
});
