import { Request, Response } from 'express';
import { projectPrismaPlaceRepository } from './infrastructure/places.prisma.repository';
import * as placeService from './application/getPlaces';

const placeRepository = projectPrismaPlaceRepository;

export const getAllPlaces = async (_req: Request, res: Response) => {
  try {
    const places = await placeService.getAllPlaces(placeRepository);
    res.json(places);
  } catch (error) {
    res.status(500).json({ message: `Unable to get places: ${error}` });
  }
};

export const getPlaceById = async (req: Request, res: Response) => {
  try {
    const placeId = req.params.id;
    const place = await placeService.getPlaceById(placeRepository, placeId);
    if (!place) {
      res.status(404).json({ message: 'Place not found' });
    }
    res.json(place);
  } catch (error) {
    res.status(500).json({ message: `Unable to get place: ${error}` });
  }
};

export const createPlace = async (req: Request, res: Response) => {
  try {
    const place = req.body;
    const newPlace = await placeService.createPlace(placeRepository, place);
    res.status(201).json(newPlace); // Código 201: Creación exitosa
  } catch (error) {
    res.status(500).json({ message: `Unable to create place: ${error}` });
  }
};

export const updatePlace = async (req: Request, res: Response) => {
  try {
    const placeId = req.params.id;
    const placeUpdates = req.body;
    const updatedPlace = await placeService.updatePlace(placeRepository, placeId, placeUpdates);
    res.json(updatedPlace);
  } catch (error) {
    res.status(500).json({ message: `Unable to update place: ${error}` });
  }
};

export const deletePlace = async (req: Request, res: Response) => {
  try {
    const placeId = req.params.id;
    await placeService.deletePlace(placeRepository, placeId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: `Unable to delete place: ${error}` });
  }
};
