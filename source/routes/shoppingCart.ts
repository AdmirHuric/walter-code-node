import express from "express";
import controller from "../controllers/shoppingCart";

const router = express.Router();

router.post('/create/shoppingCart', controller.createShoppingCart)
router.get('/get/shoppingCarts', controller.getAllShoppingCarts);

export = router;
