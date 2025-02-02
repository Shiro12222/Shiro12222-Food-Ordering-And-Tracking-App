import express from "express";
import { param } from "express-validator";
import Restaurant from "../models/restaurant";
import RestaurantController from "../controllers/RestaurantController";

const router = express.Router();

router.get(
    "/:restaurantId",
    param("restaurantId")
        .isString()
        .trim()
        .notEmpty()
        .withMessage("RestaurantId paramenter must be a valid string"),
    RestaurantController.getRestaurantMiddleware
);

router.get(
    "/search/:city", 
    param("city")
        .isString()
        .trim()
        .notEmpty()
        .withMessage("City paramenter must be a valid string"),
    RestaurantController.searchRestaurantMiddleware
);

export default router;