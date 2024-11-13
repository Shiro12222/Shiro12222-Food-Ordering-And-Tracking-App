import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const handleValidationError = async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        res.sendStatus(400).json({ errors: errors.array() });
        return;
    }
    next();
}

export const validateMyUserRequest = [
    body("name").isString().notEmpty().withMessage("The name must be a string"),
    body("addressLine1").isString().notEmpty().withMessage("AddressLine must be a string"),
    body("city").isString().notEmpty().withMessage("City must be a string"),
    body("country").isString().notEmpty().withMessage("Country name must be a string"),
    handleValidationError,
];