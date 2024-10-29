"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.deleteReview = exports.updateReview = exports.createReview = exports.getReviewsByPlaceId = exports.getReviewById = void 0;
const reviews_prisma_repository_1 = require("./infrastructure/reviews.prisma.repository");
const reviewService = __importStar(require("./application/getReviews"));
const reviewRepository = reviews_prisma_repository_1.projectPrismaReviewRepository;
const getReviewById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviewId = req.params.id;
        const review = yield reviewService.getReviewById(reviewRepository, reviewId);
        if (!review) {
            res.status(404).json({ message: 'Review not found' });
        }
        res.json(review);
    }
    catch (error) {
        res.status(500).json({ message: `Unable to get review: ${error}` });
    }
});
exports.getReviewById = getReviewById;
const getReviewsByPlaceId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const placeId = req.params.placeId;
        const reviews = yield reviewService.getReviewsByPlaceId(reviewRepository, placeId);
        if (!reviews || reviews.length === 0) {
            res.status(404).json({ message: 'No reviews found for this place' });
        }
        res.json(reviews);
    }
    catch (error) {
        res.status(500).json({ message: `Unable to get reviews for place: ${error}` });
    }
});
exports.getReviewsByPlaceId = getReviewsByPlaceId;
const createReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = req.body;
        const newReview = yield reviewService.createReview(reviewRepository, review);
        res.status(201).json(newReview); // Código 201: Creación exitosa
    }
    catch (error) {
        res.status(500).json({ message: `Unable to create review: ${error}` });
    }
});
exports.createReview = createReview;
const updateReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviewId = req.params.id;
        const reviewUpdates = req.body;
        const updatedReview = yield reviewService.updateReview(reviewRepository, reviewId, reviewUpdates);
        res.json(updatedReview);
    }
    catch (error) {
        res.status(500).json({ message: `Unable to update review: ${error}` });
    }
});
exports.updateReview = updateReview;
const deleteReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviewId = req.params.id;
        yield reviewService.deleteReview(reviewRepository, reviewId);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ message: `Unable to delete review: ${error}` });
    }
});
exports.deleteReview = deleteReview;
