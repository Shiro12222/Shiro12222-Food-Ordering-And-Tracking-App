import { Request, Response, NextFunction } from "express";
import Restaurant from "../models/restaurant";

const searchRestaurantMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
    try {
      await searchRestaurants(req, res);
      next();
    } catch (error) {
      next(error);
    }
 };

const searchRestaurants = async (req: Request, res: Response ) => {
    try {
        const district = req.params.district;

        const searchQuery = (req.query.searchQuery as string) ||  "";
        const selectedCuisines = (req.query.selectedCuisines as string) || ""
        const sortOption = (req.query.sortOption as string) || "lastUpdated";
        const page = parseInt(req.query.page as string) || 1;
        
        let query: any = {};

        query["district"] = new RegExp(district, "i");
        const districtCheck = await Restaurant.countDocuments(query)
        if(districtCheck === 0){
            return res.status(404).json({
                data: [],
                pagination: {
                    total: 0,
                    page: 1,
                    pages: 1,
                },
            });
        }

        if(selectedCuisines){
            const cuisinesArray = selectedCuisines.split(",").map((cuisine) => new RegExp(cuisine, "i"));

            query["cuisines"] = { $all: cuisinesArray };
        }

        if (searchQuery) {
            const searchRegex = new RegExp (searchQuery, "i");
            query["$or"] = [
                { restaurantName: searchRegex },
                { cuisines: { $in: [searchRegex] } },
            ];
        }

        const pageSize = 10;
        const skip = (page - 1) * pageSize;
        
        //sort by lastUpdated
        //Limit restaurant 10 in each page
        const restaurants = await Restaurant.find(query).sort({ [sortOption]: 1 }).skip(skip).limit(pageSize).lean();

        const total = await Restaurant.countDocuments(query);

        const response = {
            data: restaurants,
            pagination: {
                total,
                page,
                pages: Math.ceil(total / pageSize),
            },
        };
        
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}

const getRestaurantMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
    try {
      await getRestaurant(req, res);
      next();
    } catch (error) {
      next(error);
    }
 };

const getRestaurant = async (req: Request, res: Response) => {
    try {
      const restaurantId = req.params.restaurantId;
  
      const restaurant = await Restaurant.findById(restaurantId);
      if (!restaurant) {
        return res.status(404).json({ message: "restaurant not found" });
      }
  
      res.json(restaurant);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "something went wrong" });
    }
};

export default { 
    getRestaurantMiddleware,
    getRestaurant,
    searchRestaurantMiddleware,
    searchRestaurants,
};