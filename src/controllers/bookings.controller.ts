import { Request, Response } from "express";
import {
  createBooking,
  deleteBooking,
  getBookingsByRoom
} from "../services/bookings.service";
import { Booking } from "../models/booking.model";

export function createBookingHandler(req: Request, res: Response) {
  try {
    const booking: Booking = {
      id: Date.now().toString(),
      roomId: req.body.roomId,
      startTime: req.body.startTime,
      endTime: req.body.endTime
    };

    const created = createBooking(booking);
    res.status(201).json(created);
  } catch (error) {
    const message = (error as Error).message;
    res.status(400).json({ error: message });
  }
}

export function deleteBookingHandler(req: Request, res: Response) {
  const id = req.params.id as string;
  deleteBooking(id);
  res.status(204).send();
}

export function getRoomBookingsHandler(req: Request, res: Response) {
  const roomId = req.params.roomId as string;
  const bookings = getBookingsByRoom(roomId);
  res.json(bookings);
}
