function successMessage() {
  const phoneNumber = document.getElementById('phone-number').value;
  const passengerName = document.getElementById('passenger-name').value;
  if ((passengerName.trim() === '' || phoneNumber.trim() === '')) {
    alert('Name and Phone Number are required!');
    return false; // Prevent form submission
  }else{
   
  }
}