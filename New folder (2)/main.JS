function validateForm() {
    let emailregex= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let valid = true;

  const fullName = document.getElementById('Full-Name');
  const fullNameError = document.getElementById('fullNameError');
  if (!fullName.value.trim()) {
      fullNameError.textContent = 'full name is required';
      valid = false;
  } else {
      fullNameError.textContent = '';
  }


  const email = document.getElementById('Email');
  const emailError = document.getElementById('emailError');
  if (!email.value.trim()) {
      emailError.textContent = 'email is required';
      valid = false;
  }
  else if(!email.value== emailregex){
    emailError.textContent = 'example@mail.cum';
    valid = false;
  }
   else {
      emailError.textContent = '';
  }


  const phoneNumber = document.getElementById('Phone-Number');
  const phoneError = document.getElementById('phoneError');
  if (!phoneNumber.value.trim()) {
      phoneError.textContent = 'phone number is required';
      valid = false;
  } else {
      phoneError.textContent = '';
  }


  const relativePhoneNumber = document.getElementById('Relative-Phone-Number');
  const relativePhoneError = document.getElementById('relativePhoneError');
  if (!relativePhoneNumber.value.trim()) {
      relativePhoneError.textContent = 'relative Phone Number is required';
      valid = false;
  } else {
      relativePhoneError.textContent = '';
  }
  const Passengers= document.getElementById('Passengers');
  const PassengersError = document.getElementById('PassengersError');
  if (!Passengers.value.trim()) {
    PassengersError.textContent = 'Passenger number is required';
      valid = false;
  } else {
    Passengers.textContent = '';
  }
  
  return valid;
}


