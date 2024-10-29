import { Review } from './reviews.entity';

export interface ReviewsRepository {
  getReviewById(reviewId: string): Promise<Review | null>;
  getReviewsByPlaceId(placeId: string): Promise<Review[]>;
  createReview(review: Review): Promise<Review>;
  updateReview(reviewId: string, review: Partial<Review>): Promise<Review>;
  deleteReview(reviewId: string): Promise<void>;
}

