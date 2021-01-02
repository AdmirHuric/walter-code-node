import express from "express";
import controller from "../controllers/shoppingCart";
import extractJWT from "../middleware/extractJWT";
import findUser from "../middleware/findUser";

const router = express.Router();

router.post('/create/cart', extractJWT, findUser, controller.createShoppingCart);
router.patch('/patch/cart', extractJWT, findUser, controller.patchShoppingCart);
router.delete('/delete/cart', extractJWT ,findUser, controller.deleteShoppingCart);
router.post('/get/product-quantity-aggregation', extractJWT, controller.aggregateProductQuantityByName);

export = router;
