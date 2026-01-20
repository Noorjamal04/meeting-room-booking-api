import { Router } from "express";
import {
  createBookingHandler,
  deleteBookingHandler,
  getRoomBookingsHandler
} from "../controllers/bookings.controller";


// Routes define the public HTTP API and map requests to controller handlers.
// They contain no business logic.
const router = Router();

router.post("/bookings", createBookingHandler);
router.delete("/bookings/:id", deleteBookingHandler);
router.get("/rooms/:roomId/bookings", getRoomBookingsHandler);

export default router;
