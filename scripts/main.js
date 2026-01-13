// Auto-updating the footer year
const currentYear = new Date().getFullYear(); //access the current year from the Date object.
let footerDate = document.getElementById('date'); //get the DOM element with id 'date'
footerDate.textContent = currentYear; //set the text content of the element to the current year