const express = require("express");
const seatController = require("../controllers/seat-controller");
const {
  adminAuthenticate,
  seatPriceValidator,
  seatStatusValidator,
} = require("../middlewares");

const seatRouter = express.Router();

seatRouter.patch(
  "/price/:theaterId",
  adminAuthenticate,
  seatPriceValidator,
  seatController.updatePrice
);

seatRouter.patch(
  "/status/:theaterId/:row/:column",
  adminAuthenticate,
  seatStatusValidator,
  seatController.updateStatus
);

seatRouter.get("/:theaterId", seatController.getSeatDetail);
seatRouter.get(
  "/seatId/theaterId/:theaterId/row/:row/column/:column",
  seatController.getSeatId
);

module.exports = seatRouter;
