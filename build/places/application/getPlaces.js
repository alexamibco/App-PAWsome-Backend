"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePlace = exports.updatePlace = exports.createPlace = exports.getPlaceById = exports.getAllPlaces = void 0;
const getAllPlaces = (placeRepository) => {
    try {
        return placeRepository.getAllPlaces();
    }
    catch (error) {
        throw new Error(`Unable to get all places: ${error}`);
    }
};
exports.getAllPlaces = getAllPlaces;
const getPlaceById = (placeRepository, placeId) => {
    try {
        return placeRepository.getPlaceById(placeId);
    }
    catch (error) {
        throw new Error(`Unable to get place by ID: ${error}`);
    }
};
exports.getPlaceById = getPlaceById;
const createPlace = (placeRepository, place) => {
    try {
        return placeRepository.createPlace(place);
    }
    catch (error) {
        throw new Error(`Unable to create place: ${error}`);
    }
};
exports.createPlace = createPlace;
const updatePlace = (placeRepository, placeId, place) => {
    try {
        return placeRepository.updatePlace(placeId, place);
    }
    catch (error) {
        throw new Error(`Unable to update place: ${error}`);
    }
};
exports.updatePlace = updatePlace;
const deletePlace = (placeRepository, placeId) => {
    try {
        return placeRepository.deletePlace(placeId);
    }
    catch (error) {
        throw new Error(`Unable to delete place: ${error}`);
    }
};
exports.deletePlace = deletePlace;
