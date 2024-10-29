import { Place } from './places.entity';

export interface PlacesRepository {
  getAllPlaces(): Promise<Place[]>;
  getPlaceById(placeId: string): Promise<Place | null>; 
  createPlace(place: Place): Promise<Place>;
  updatePlace(placeId: string, place: Partial<Place>): Promise<Place>;
  deletePlace(placeId: string): Promise<void>;
}
