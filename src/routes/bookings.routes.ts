import { Router } from "express";
import {
  createBookingHandler,
  deleteBookingHandler,
  getRoomBookingsHandler
} from "../controllers/bookings.controller";

const router = Router();

router.post("/bookings", createBookingHandler);
router.delete("/bookings/:id", deleteBookingHandler);
router.get("/rooms/:roomId/bookings", getRoomBookingsHandler);

export default router;
