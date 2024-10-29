"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const multerHelper_1 = require("./multerHelper");
const cloudinaryHelper_1 = require("./cloudinaryHelper");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const runMiddleware = (req, res, fn) => {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
};
const handler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield runMiddleware(req, res, multerHelper_1.upload.single('file'));
        if (!req.file) {
            res.status(400).send({ message: 'No file uploaded' });
        }
        const cldRes = yield (0, cloudinaryHelper_1.handleUpload)(req.file.buffer);
        const imageUrl = cldRes.secure_url;
        const userId = req.body.userId;
        yield prisma.user.update({
            where: { user_id: userId },
            data: { user_avatar: imageUrl },
        });
        res.status(200).send({ message: 'File uploaded successfully', result: cldRes });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
});
exports.handler = handler;
