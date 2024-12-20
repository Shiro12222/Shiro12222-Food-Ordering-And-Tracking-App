import { NextFunction, Request, Response } from "express"
import Restaurant from "../models/restaurant";
import cloudinary from "cloudinary";
import mongoose from "mongoose";

//create Restaurant
const createRestaurantMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
    try {
      await createMyRestaurant(req, res);
      next();
    } catch (error) {
      next(error);
    }
};

const createMyRestaurant = async (req: Request, res: Response) => {
    try {
        const existingRestaurant = await Restaurant.findOne({ user: req.userId });

        if (existingRestaurant){
            return res.status(409).json({message: "User restaurant already exists "});
        }

        // const image = req.file as Express.Multer.File;
        // const base64Image = Buffer.from(image.buffer).toString("base64");
        // const dataURI = `data:${image.mimetype};base64,${base64Image}`;
        // const uploadResponse = await cloudinary.v2.uploader.upload(dataURI);

        const imageUrl = await uploadImage(req.file as Express.Multer.File);

        const restaurant = new Restaurant(req.body);
        restaurant.imageUrl = imageUrl;
        restaurant.user = new mongoose.Types.ObjectId(req.userId);
        restaurant.lastUpdated = new Date();
        await restaurant.save();

        res.status(201).send(restaurant);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

//get Restaurant
const getRestaurantMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
    try {
      await getMyRestaurant(req, res);
      next();
    } catch (error) {
      next(error);
    }
};


const getMyRestaurant = async (req: Request, res: Response) => {
    try {
        const restaurant = await Restaurant.findOne({ user: req.userId });
        if (!restaurant){
            return res.status(404).json({ message: "Restaurant not found!" });
        }

        res.json(restaurant);
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: "Error fetch Restaurant" });
    }
};

//put Restaurant
const updateRestaurantMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
    try {
      await updateMyRestaurant(req, res);
      next();
    } catch (error) {
      next(error);
    }
 };

const updateMyRestaurant = async (req: Request, res: Response) => {
    try {
        const restaurant = await Restaurant.findOne({
            user: req.userId,
        });

        if (!restaurant) {
            return res.status(404).json({ message: "restaurant not found "});
        }

        restaurant.restaurantName = req.body.restaurantName;
        restaurant.district = req.body.district;
        restaurant.city = req.body.city;
        restaurant.deliveryPrice = req.body.deliveryPrice;
        restaurant.estimatedDeliveryTime = req.body.estimatedDeliveryTime;
        restaurant.cuisines = req.body.cuisines;
        restaurant.menuItems = req.body.menuItems;
        restaurant.lastUpdated = new Date();

        if (req.file){
            const imageUrl = await uploadImage(req.file as Express.Multer.File);
            restaurant.imageUrl = imageUrl;
        }

        await restaurant.save();
        res.status(200).send(restaurant);

    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

const uploadImage = async(file: Express.Multer.File) => {
    const image = file;

    const base64Image = Buffer.from(image.buffer).toString("base64");
    const dataURI = `data:${image.mimetype};base64,${base64Image}`;
    const uploadResponse = await cloudinary.v2.uploader.upload(dataURI);

    return uploadResponse.url;
};

export default {
    getRestaurantMiddleware,
    getMyRestaurant,
    createRestaurantMiddleware,
    createMyRestaurant,
    updateRestaurantMiddleware,
    updateMyRestaurant,
};