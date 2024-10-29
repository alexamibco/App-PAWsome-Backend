import { Request, Response } from 'express';
import { projectPrismaReviewRepository } from './infrastructure/reviews.prisma.repository';
import * as reviewService from './application/getReviews';

const reviewRepository = projectPrismaReviewRepository;

export const getReviewById = async (req: Request, res: Response) => {
  try {
    const reviewId = req.params.id;
    const review = await reviewService.getReviewById(reviewRepository, reviewId);
    if (!review) {
      res.status(404).json({ message: 'Review not found' });
    }
    res.json(review);
  } catch (error) {
    res.status(500).json({ message: `Unable to get review: ${error}` });
  }
};

export const getReviewsByPlaceId = async (req: Request, res: Response) => {
  try {
    const placeId = req.params.placeId;
    const reviews = await reviewService.getReviewsByPlaceId(reviewRepository, placeId);
    
    if (!reviews || reviews.length === 0) { 
      res.status(404).json({ message: 'No reviews found for this place' });
    }
    
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: `Unable to get reviews for place: ${error}` });
  }
};

export const createReview = async (req: Request, res: Response) => {
  try {
    const review = req.body;
    const newReview = await reviewService.createReview(reviewRepository, review);
    res.status(201).json(newReview); // Código 201: Creación exitosa
  } catch (error) {
    res.status(500).json({ message: `Unable to create review: ${error}` });
  }
};

export const updateReview = async (req: Request, res: Response) => {
  try {
    const reviewId = req.params.id;
    const reviewUpdates = req.body;
    const updatedReview = await reviewService.updateReview(reviewRepository, reviewId, reviewUpdates);
    res.json(updatedReview);
  } catch (error) {
    res.status(500).json({ message: `Unable to update review: ${error}` });
  }
};

export const deleteReview = async (req: Request, res: Response) => {
  try {
    const reviewId = req.params.id;
    await reviewService.deleteReview(reviewRepository, reviewId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: `Unable to delete review: ${error}` });
  }
};
