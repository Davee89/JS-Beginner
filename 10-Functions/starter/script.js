'use strict';

const bookings = [];
function createBooking(flightNum = none, numPassengers = 1, price = 200) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
}

createBooking('Lh123', 100);
