document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
  });
  
  function validateForm() {
    const name = document.querySelector(".regester-name input");
    const phone = document.querySelector(".regester-number input");
    const email = document.querySelector(".regester-email input");
    const county = document.getElementById("county");
    const hospital = document.querySelector(".regester-hospital input");
  
    let isValid = true;
  
    if (name.value.trim() === "") {
      showError(name, "Name is required");
      isValid = false;
    } else {
      showSuccess(name);
    }
  
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone.value)) {
      showError(phone, "Phone number must be 10 digits");
      isValid = false;
    } else {
      showSuccess(phone);
    }
  
   
    if (email.value.trim() === "") {
      showError(email, "Email is required");
      isValid = false;
    } else if (!email.validity.valid) {
      showError(email, "Invalid email address");
      isValid = false;
    } else {
      showSuccess(email);
    }
  
    if (county.value === "Nairobi") {
      showError(county, "Please select a county");
      isValid = false;
    } else {
      showSuccess(county);
    }
  
    if (hospital.value.trim() === "") {
      showError(hospital, "Hospital name is required");
      isValid = false;
    } else {
      showSuccess(hospital);
    }
  
    if (isValid) {
      document.getElementById("form").submit();
    }
  }
  
  function showError(input, message) {
    const inputBox = input.closest(".input-box");
    const errorDisplay = inputBox.querySelector(".error");
  
    inputBox.classList.add("error");
    inputBox.classList.remove("success");
    errorDisplay.textContent = message;
    errorDisplay.style.display = "block";
  }
  
  function showSuccess(input) {
    const inputBox = input.closest(".input-box");
    const errorDisplay = inputBox.querySelector(".error");
  
    inputBox.classList.add("success");
    inputBox.classList.remove("error");
    errorDisplay.style.display = "none";
  }