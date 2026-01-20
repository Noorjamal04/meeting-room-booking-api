import { Booking } from "../models/booking.model";

const bookings: Booking[] = [];

export function createBooking(booking: Booking): Booking {
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
