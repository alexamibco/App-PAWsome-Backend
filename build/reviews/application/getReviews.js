"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReview = exports.updateReview = exports.createReview = exports.getReviewsByPlaceId = exports.getReviewById = void 0;
const getReviewById = (reviewRepository, reviewId) => {
    try {
        return reviewRepository.getReviewById(reviewId);
    }
    catch (error) {
        throw new Error(`Unable to get review by ID: ${error}`);
    }
};
exports.getReviewById = getReviewById;
const getReviewsByPlaceId = (reviewRepository, placeId) => {
    try {
        return reviewRepository.getReviewsByPlaceId(placeId);
    }
    catch (error) {
        throw new Error(`Unable to get reviews for place ID ${placeId}: ${error}`);
    }
};
exports.getReviewsByPlaceId = getReviewsByPlaceId;
const createReview = (reviewRepository, review) => {
    try {
        return reviewRepository.createReview(review);
    }
    catch (error) {
        throw new Error(`Unable to create review: ${error}`);
    }
};
exports.createReview = createReview;
const updateReview = (reviewRepository, reviewId, review) => {
    try {
        return reviewRepository.updateReview(reviewId, review);
    }
    catch (error) {
        throw new Error(`Unable to update review: ${error}`);
    }
};
exports.updateReview = updateReview;
const deleteReview = (reviewRepository, reviewId) => {
    try {
        return reviewRepository.deleteReview(reviewId);
    }
    catch (error) {
        throw new Error(`Unable to delete review: ${error}`);
    }
};
exports.deleteReview = deleteReview;
