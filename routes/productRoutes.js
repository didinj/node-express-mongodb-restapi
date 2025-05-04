import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from "../controllers/productController.js";
import { body } from "express-validator";
import { validateRequest } from "../middleware/validateRequest.js";

const router = express.Router();

router.post(
  "/products",
  [
    body("prod_name").notEmpty().withMessage("Product name is required"),
    body("prod_desc")
      .isLength({ min: 10 })
      .withMessage("Product desctiption must be at least 10 characters")
  ],
  validateRequest,
  createProduct
);
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
