import {NextFunction, Request, Response} from "express";
import mongoose from "mongoose";
import ShoppingCart from '../models/shoppingCart';

const NAMESPACE = 'Shopping Cart Controller';

const createShoppingCart = (req: Request, res: Response, next: NextFunction) => {
    let {title} = req.body;
    const shoppingCart = new ShoppingCart({
        _id: new mongoose.Types.ObjectId(),
        title
    });
    return shoppingCart.save()
        .then((result) => {
            return res.status(201).json({
                shoppingCart: result
            });
        }).catch((error: { message: any; }) => {
            return res.status(500).json({
                message: error.message,
                error
            })
        })
};

const getAllShoppingCarts = (req: Request, res: Response, next: NextFunction) => {
    ShoppingCart.find()
        .exec()
        .then((results: any) => {
            return res.status(200).json({
                shoppingCarts: results
            })
        })
        .catch((error: { message: any; }) => {
            return res.status(500).json({
                message: error.message,
                error
            })
        })
};

export default {
    createShoppingCart,
    getAllShoppingCarts
}
