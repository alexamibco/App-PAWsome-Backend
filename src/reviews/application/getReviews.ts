import { ReviewsRepository } from '../domain/reviews.repository';
import { Review } from '../domain/reviews.entity';

export const getReviewById = (
  reviewRepository: ReviewsRepository,
  reviewId: string
) => {
  try {
    return reviewRepository.getReviewById(reviewId);
  } catch (error) {
    throw new Error(`Unable to get review by ID: ${error}`);
  }
};

export const getReviewsByPlaceId = (
  reviewRepository: ReviewsRepository,
  placeId: string
) => {
  try {
    return reviewRepository.getReviewsByPlaceId(placeId);
  } catch (error) {
    throw new Error(`Unable to get reviews for place ID ${placeId}: ${error}`);
  }
};

export const createReview = (
  reviewRepository: ReviewsRepository,
  review: Review
) => {
  try {
    return reviewRepository.createReview(review);
  } catch (error) {
    throw new Error(`Unable to create review: ${error}`);
  }
};

export const updateReview = (
  reviewRepository: ReviewsRepository,
  reviewId: string,
  review: Partial<Review>
) => {
  try {
    return reviewRepository.updateReview(reviewId, review);
  } catch (error) {
    throw new Error(`Unable to update review: ${error}`);
  }
};

export const deleteReview = (
  reviewRepository: ReviewsRepository,
  reviewId: string
) => {
  try {
    return reviewRepository.deleteReview(reviewId);
  } catch (error) {
    throw new Error(`Unable to delete review: ${error}`);
  }
};
