"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const router = (0, express_1.Router)();
router.get('/places', controller_1.getAllPlaces);
router.get('/places/:id', controller_1.getPlaceById);
router.post('/places', controller_1.createPlace);
router.put('/places/:id', controller_1.updatePlace);
router.delete('/places/:id', controller_1.deletePlace);
exports.default = router;