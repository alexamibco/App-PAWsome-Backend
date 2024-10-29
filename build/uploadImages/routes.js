"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("./middleware");
const router = (0, express_1.Router)();
router.post('/upload', middleware_1.handler, (_req, res) => {
    res.send('File uploaded successfully');
});
exports.default = router;
