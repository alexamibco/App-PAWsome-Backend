"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./users/routes"));
const routes_2 = __importDefault(require("./places/routes"));
const routes_3 = __importDefault(require("./reviews/routes"));
const routes_4 = __importDefault(require("./uploadImages/routes"));
const routes_5 = __importDefault(require("./auth/routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const corsOptions = {
    origin: "https://app-pawsome.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(routes_1.default);
app.use(routes_2.default);
app.use(routes_3.default);
app.use(routes_4.default);
app.use(routes_5.default);
exports.default = app;
