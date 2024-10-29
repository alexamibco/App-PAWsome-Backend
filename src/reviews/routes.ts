import { Router } from 'express';
import { getReviewById, getReviewsByPlaceId, createReview, updateReview, deleteReview } from './controller';

const router = Router();

router.get('/reviews/:id', getReviewById);
router.post('/reviews', createReview);
router.put('/reviews/:id', updateReview);
router.delete('/reviews/:id', deleteReview);
router.get('/places/:placeId/reviews', getReviewsByPlaceId);

export default router;
