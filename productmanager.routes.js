const ProductController = require("../controllers/productmanager.controllers");
module.exports = function (app) {
  app.get("/api/product", ProductController.findAllProducts);
  app.get("/api/product/:id", ProductController.getProductById);
  app.post("/api/product", ProductController.createProduct);
};
