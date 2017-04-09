// Button click event
document.getElementById('add').addEventListener('click', function() {

  // Get input tag value
  var value = document.getElementById('item').value;

  // Check for value existence
  if(value) {
    console.log('There was a value.');
  }

});
