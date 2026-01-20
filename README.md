# Meeting Room Booking API

Simple REST API for booking meeting rooms.

## Features
- Create a booking
- Cancel a booking
- List bookings for a room

## Tech stack
- Node.js
- TypeScript
- Express
- In-memory storage

## Running the project

```bash
npm install
npm run dev
```
## Server runs at:
```bash
http://localhost:3000
```
## API Endpoints
Create booking

```bash
POST /api/bookings
```
Delete booking

```bash
DELETE /api/bookings/:id
```
List bookings for a room
```bash
GET /api/rooms/:roomId/bookings
```

## Business rules

Bookings cannot overlap within the same room

Bookings cannot be created in the past

The start time must be before the end time

## Assumptions

All timestamps are provided in ISO 8601 format

Time zone handling is the responsibility of the client

Booking IDs are generated in memory and are only unique during runtime

Data is stored in memory and is lost when the server restarts

The API is intended for demonstration and evaluation purposes, not production use

## Testing

The API was manually tested using the VS Code REST Client extension with predefined HTTP request files.

