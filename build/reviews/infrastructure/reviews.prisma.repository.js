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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectPrismaReviewRepository = void 0;
const database_1 = require("../../database/database");
exports.projectPrismaReviewRepository = {
    getReviewById: (reviewId) => __awaiter(void 0, void 0, void 0, function* () {
        const review = yield database_1.prisma.review.findUnique({
            where: { review_id: reviewId },
        });
        return review;
    }),
    getReviewsByPlaceId: (placeId) => __awaiter(void 0, void 0, void 0, function* () {
        const reviews = yield database_1.prisma.review.findMany({
            where: { place_id: placeId },
            include: { user: true },
        });
        return reviews;
    }),
    createReview: (review) => __awaiter(void 0, void 0, void 0, function* () {
        const { review_id } = review, reviewData = __rest(review, ["review_id"]);
        const newReview = yield database_1.prisma.review.create({
            data: reviewData,
        });
        return newReview;
    }),
    updateReview: (reviewId, review) => __awaiter(void 0, void 0, void 0, function* () {
        const updatedReview = yield database_1.prisma.review.update({
            where: { review_id: reviewId },
            data: review,
        });
        return updatedReview;
    }),
    deleteReview: (reviewId) => __awaiter(void 0, void 0, void 0, function* () {
        yield database_1.prisma.review.delete({
            where: { review_id: reviewId },
        });
    })
};
