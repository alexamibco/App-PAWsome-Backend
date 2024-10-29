import { ReviewsRepository } from '../domain/reviews.repository';
import { prisma } from '../../database/database';
import { Review } from '../domain/reviews.entity';

export const projectPrismaReviewRepository: ReviewsRepository = {
  getReviewById: async (reviewId: string): Promise<Review | null> => {
    const review = await prisma.review.findUnique({
      where: { review_id: reviewId },
    });
    return review;
  },

  getReviewsByPlaceId: async (placeId: string): Promise<Review[]> => {
    const reviews = await prisma.review.findMany({
      where: { place_id: placeId },
      include: { user: true },
    });
    return reviews;
  },

  createReview: async (review: Review): Promise<Review> => {
    const { review_id, ...reviewData } = review; 
    const newReview = await prisma.review.create({
      data: reviewData,
    });
    return newReview;
  },

  updateReview: async (reviewId: string, review: Partial<Review>): Promise<Review> => {
    const updatedReview = await prisma.review.update({
      where: { review_id: reviewId },
      data: review,
    });
    return updatedReview;
  },

  deleteReview: async (reviewId: string): Promise<void> => {
    await prisma.review.delete({
      where: { review_id: reviewId },
    });
  }
};
