import express from "express";
import authMiddleware from "../Middleware/auth.js"
import { placeOrder, userOrders, verifyOrder } from "../Controllers/ordercontroller.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders", authMiddleware, userOrders)

export default orderRouter;