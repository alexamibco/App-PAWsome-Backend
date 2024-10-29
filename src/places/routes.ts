import { Router } from 'express';
import { getAllPlaces,getPlaceById, createPlace, updatePlace, deletePlace } from './controller';

const router = Router();

router.get('/places', getAllPlaces);  
router.get('/places/:id', getPlaceById);
router.post('/places', createPlace);
router.put('/places/:id', updatePlace);
router.delete('/places/:id', deletePlace);

export default router;