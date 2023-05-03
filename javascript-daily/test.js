// Get the current date
var currentDate = new Date();

// Get the day of the week as a number (0-6, where 0 is Sunday and 6 is Saturday)
var dayOfWeek = currentDate.getDay();

// Define the URLs for each day of the week
var urls = [
  "https://svt.se", // sunday 
  "https://sydsvenskan.se", // monday
  "https://jalopnik.com", // tuesday
  "https://reddit.com", // wednesday
  "https://bbc.com", // thursday
  "https://guardian.com", // friday
  "https://avanza.se" // saturday
];

// Redirect the user to the URL for the current day of the week
window.location.href = urls[dayOfWeek];

