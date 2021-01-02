import mongoose, {Schema} from "mongoose";
import IShoppingCart from "../interfaces/shoppingCart";

const ShoppingCartSchema = new Schema(
    {
        title: {type: String, required: true},
    },
    {
        timestamps: true
    });


export default mongoose.model<IShoppingCart>('ShoppingCart', ShoppingCartSchema);
