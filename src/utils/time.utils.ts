// Checks that the booking start time is strictly before the end time
export function isStartBeforeEnd(start: string, end: string): boolean {
  return new Date(start).getTime() < new Date(end).getTime();
}

// Prevents bookings from being created in the past
export function isInPast(time: string): boolean {
  return new Date(time).getTime() < Date.now();
}

export function overlaps(
  startA: string,
  endA: string,
  startB: string,
  endB: string
): boolean {
  return (
    new Date(startA).getTime() < new Date(endB).getTime() &&
    new Date(endA).getTime() > new Date(startB).getTime()
  );
}