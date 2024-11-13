document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
  });
  
  function validateForm() {
    const name = document.querySelector(".regester-name input");
    const phone = document.querySelector(".regester-number input");
    const email = document.querySelector(".regester-email input");
    const hospital = document.querySelector(".regester-hospital input");
    const password = document.querySelector(".register-password input")
    const confirmPassword = document.querySelector(".confirm-password input")
  
    let isValid = true;


  
    if (name.value.trim() === "") {
      showError(name, "Name is required");
      isValid = false;
    } else {
      showSuccess(name);
    }
  
    const phonePattern = /^07\d{8}$/;
    if (!phonePattern.test(phone.value)) {
      showError(phone, "Phone number must start with '07' and contain 10 digits");
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
  
  
    if (hospital.value.trim() === "") {
      showError(hospital, "Hospital name is required");
      isValid = false;
    } else {
      showSuccess(hospital);
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(password.value)) {
      showError(password, "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character");
      isValid = false;
    } else {
      showSuccess(password);
    }
  
    if (confirmPassword.value !== password.value) {
      showError(confirmPassword, "Passwords do not match");
      isValid = false;
    } else {
      showSuccess(confirmPassword);
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


  





  