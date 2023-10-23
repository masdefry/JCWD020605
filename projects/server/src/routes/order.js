const express = require("express");
const router = express.Router();
const { fileUploader } = require("../middlewares/multer");
const orderController = require("../controllers").orderController;

router.get("/orderbystatus", orderController.getAllOrderByStatus);
router.get("/orderbyid/:id", orderController.getOrderById);
router.get("/", orderController.getAllOrder);

router.get("/done", orderController.getAllOrderDone);
router.post("/confirmorreject", orderController.confirmOrReject);
router.patch("/orderdone/:id", orderController.OrderDone);

router.post(
  "/addorder",
  fileUploader({
    destinationFolder: "payment_proof",
  }).single("payment_proof"),
  orderController.addOrder
);
module.exports = router;
