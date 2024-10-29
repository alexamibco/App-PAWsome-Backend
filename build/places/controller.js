"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePlace = exports.updatePlace = exports.createPlace = exports.getPlaceById = exports.getAllPlaces = void 0;
const places_prisma_repository_1 = require("./infrastructure/places.prisma.repository");
const placeService = __importStar(require("./application/getPlaces"));
const placeRepository = places_prisma_repository_1.projectPrismaPlaceRepository;
const getAllPlaces = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const places = yield placeService.getAllPlaces(placeRepository);
        res.json(places);
    }
    catch (error) {
        res.status(500).json({ message: `Unable to get places: ${error}` });
    }
});
exports.getAllPlaces = getAllPlaces;
const getPlaceById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const placeId = req.params.id;
        const place = yield placeService.getPlaceById(placeRepository, placeId);
        if (!place) {
            res.status(404).json({ message: 'Place not found' });
        }
        res.json(place);
    }
    catch (error) {
        res.status(500).json({ message: `Unable to get place: ${error}` });
    }
});
exports.getPlaceById = getPlaceById;
const createPlace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const place = req.body;
        const newPlace = yield placeService.createPlace(placeRepository, place);
        res.status(201).json(newPlace); // Código 201: Creación exitosa
    }
    catch (error) {
        res.status(500).json({ message: `Unable to create place: ${error}` });
    }
});
exports.createPlace = createPlace;
const updatePlace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const placeId = req.params.id;
        const placeUpdates = req.body;
        const updatedPlace = yield placeService.updatePlace(placeRepository, placeId, placeUpdates);
        res.json(updatedPlace);
    }
    catch (error) {
        res.status(500).json({ message: `Unable to update place: ${error}` });
    }
});
exports.updatePlace = updatePlace;
const deletePlace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const placeId = req.params.id;
        yield placeService.deletePlace(placeRepository, placeId);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ message: `Unable to delete place: ${error}` });
    }
});
exports.deletePlace = deletePlace;
