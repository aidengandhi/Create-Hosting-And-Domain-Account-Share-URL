// Create the template for objects that are hotels
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}

// Create hotel objects
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);
var sunsetHotel = new Hotel('Sunset', 76, 0); // Adding the new hotel object

// Update the HTML for the page
var details1 = quayHotel.name + ' rooms: ';
details1 += quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = parkHotel.name + ' rooms: ';
details2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

// Display the 3rd hotel
var details3 = sunsetHotel.name + ' rooms: '; // Using the new hotel object
details3 += sunsetHotel.checkAvailability();
var elHotel3 = document.createElement('div');
elHotel3.textContent = details3;
document.getElementById('info').appendChild(elHotel3);
