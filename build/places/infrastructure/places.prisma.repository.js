"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectPrismaPlaceRepository = void 0;
const database_1 = require("../../database/database");
exports.projectPrismaPlaceRepository = {
    getAllPlaces: () => __awaiter(void 0, void 0, void 0, function* () {
        const places = yield database_1.prisma.place.findMany();
        return places;
    }),
    getPlaceById: (placeId) => __awaiter(void 0, void 0, void 0, function* () {
        const place = yield database_1.prisma.place.findUnique({
            where: { place_id: placeId },
        });
        return place;
    }),
    //These functionalities are included for future updates as a NTH, in the MVP version create, update and delete places aren't available
    createPlace: (place) => __awaiter(void 0, void 0, void 0, function* () {
        const { place_id } = place, placeData = __rest(place, ["place_id"]);
        const newPlace = yield database_1.prisma.place.create({
            data: placeData,
        });
        return newPlace;
    }),
    updatePlace: (placeId, place) => __awaiter(void 0, void 0, void 0, function* () {
        const updatedPlace = yield database_1.prisma.place.update({
            where: { place_id: placeId },
            data: place,
        });
        return updatedPlace;
    }),
    deletePlace: (placeId) => __awaiter(void 0, void 0, void 0, function* () {
        yield database_1.prisma.place.delete({
            where: { place_id: placeId },
        });
    })
};
