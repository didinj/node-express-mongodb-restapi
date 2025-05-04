import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    prod_name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      minlength: [3, "Product name should be at least 10 characters"]
    },
    prod_desc: {
      type: String,
      required: [true, "Product description is required"],
      minlength: [10, "Product description should be at least 10 characters"]
    },
    prod_price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [1, "Zero price not allowed"],
      max: [1000, "Price too high"]
    },
    updated_at: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
