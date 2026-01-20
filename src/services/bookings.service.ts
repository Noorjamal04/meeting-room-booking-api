import { Booking } from "../models/booking.model";
import { isInPast, isStartBeforeEnd, overlaps } from "../utils/time.utils";

// Service layer contains all business logic related to bookings.
// This logic was refined after the initial AI-generated version
// to enforce business rules and improve correctness.
const bookings: Booking[] = [];

export function createBooking(booking: Booking): Booking {
  if (!isStartBeforeEnd(booking.startTime, booking.endTime)) {
    throw new Error("Start time must be before end time");
  }

  if (isInPast(booking.startTime)) {
    throw new Error("Booking cannot start in the past");
  }

  const roomBookings = bookings.filter(
    b => b.roomId === booking.roomId
  );

  // Prevent overlapping bookings within the same room.
  // Two bookings overlap if their time ranges intersect.
    const hasOverlap = roomBookings.some(existing =>
    overlaps(
      booking.startTime,
      booking.endTime,
      existing.startTime,
      existing.endTime
    )
  );

  if (hasOverlap) {
    throw new Error("Booking overlaps with an existing reservation");
  }

  bookings.push(booking);
  return booking;
}

export function deleteBooking(id: string): void {
  const index = bookings.findIndex(b => b.id === id);
  if (index !== -1) {
    bookings.splice(index, 1);
  }
}

export function getBookingsByRoom(roomId: string): Booking[] {
  return bookings.filter(b => b.roomId === roomId);
}