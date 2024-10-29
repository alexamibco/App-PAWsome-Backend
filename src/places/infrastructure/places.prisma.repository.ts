import { PlacesRepository } from '../domain/places.repository';
import { prisma } from '../../database/database';
import { Place } from '../domain/places.entity';

export const projectPrismaPlaceRepository: PlacesRepository = {
  getAllPlaces: async (): Promise<Place[]> => {
    const places = await prisma.place.findMany();
    return places;
  },

  getPlaceById: async (placeId: string): Promise<Place | null> => {
    const place = await prisma.place.findUnique({
      where: { place_id: placeId },
    });
    return place;
  },

  //These functionalities are included for future updates as a NTH, in the MVP version create, update and delete places aren't available
  createPlace: async (place: Place): Promise<Place> => {
    const { place_id, ...placeData } = place; 
    const newPlace = await prisma.place.create({
      data: placeData, 
    });
    return newPlace;
  },

  updatePlace: async (placeId: string, place: Partial<Place>): Promise<Place> => {
    const updatedPlace = await prisma.place.update({
      where: { place_id: placeId },
      data: place,
    });
    return updatedPlace;
  },

  deletePlace: async (placeId: string): Promise<void> => {
    await prisma.place.delete({
      where: { place_id: placeId },
    });
  }
};
