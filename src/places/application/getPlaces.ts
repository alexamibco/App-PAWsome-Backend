import { PlacesRepository } from '../domain/places.repository';
import { Place } from '../domain/places.entity';

export const getAllPlaces = (placeRepository: PlacesRepository) => {
  try {
    return placeRepository.getAllPlaces();
  } catch (error) {
    throw new Error(`Unable to get all places: ${error}`);
  }
};

export const getPlaceById = (
  placeRepository: PlacesRepository,
  placeId: string
) => {
  try {
    return placeRepository.getPlaceById(placeId);
  } catch (error) {
    throw new Error(`Unable to get place by ID: ${error}`);
  }
};

export const createPlace = (
  placeRepository: PlacesRepository,
  place: Place
) => {
  try {
    return placeRepository.createPlace(place);
  } catch (error) {
    throw new Error(`Unable to create place: ${error}`);
  }
};

export const updatePlace = (
  placeRepository: PlacesRepository,
  placeId: string,
  place: Partial<Place>
) => {
  try {
    return placeRepository.updatePlace(placeId, place);
  } catch (error) {
    throw new Error(`Unable to update place: ${error}`);
  }
};

export const deletePlace = (
  placeRepository: PlacesRepository,
  placeId: string
) => {
  try {
    return placeRepository.deletePlace(placeId);
  } catch (error) {
    throw new Error(`Unable to delete place: ${error}`);
  }
};
