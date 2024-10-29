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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpUser = exports.loginUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_prisma_repository_1 = require("../users/infrastructure/users.prisma.repository");
const userRepository = users_prisma_repository_1.projectPrismaRepository;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_email, user_password } = req.body;
        if (!user_email || !user_password) {
            res.status(400).json({ message: 'Email and password are required' });
            return;
        }
        const userFromDb = yield userRepository.getUserByEmail(user_email);
        if (!userFromDb) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        const isPasswordValid = yield bcrypt_1.default.compare(user_password, userFromDb.user_password);
        if (!isPasswordValid) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ userId: userFromDb.user_id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        res.status(200).json({ token, user_name: userFromDb.user_name, user_id: userFromDb.user_id });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.loginUser = loginUser;
const signUpUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, email, password } = req.body;
        const existingUser = yield userRepository.getUserByEmail(email);
        if (existingUser) {
            res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const newUser = yield userRepository.createUser({
            user_name: firstName,
            user_lastname: lastName,
            user_email: email,
            user_password: hashedPassword,
            user_avatar: ''
        });
        const token = jsonwebtoken_1.default.sign({ userId: newUser.user_id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        res.status(201).json({
            message: 'User created successfully',
            token,
            user_name: newUser.user_name,
            user_id: newUser.user_id
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.signUpUser = signUpUser;
