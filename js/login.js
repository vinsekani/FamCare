document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
  });
  
  function validateForm() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
  
    let isValid = true;
  
    if (username.value.trim() === "") {
      showError(username, "Username is required");
      isValid = false;
    } else {
      showSuccess(username);
    }
  
  
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  
    if (!passwordPattern.test(password.value)) {
      showError(password, "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character");
      isValid = false;
    } else {
      showSuccess(password);
    }
  
    if (isValid) {
      document.getElementById("form").submit();
    }
  }
  
  
  function showError(input, message) {
    const inputBox = input.closest(".login-box");
    const errorDisplay = inputBox.querySelector(".error");
  
    inputBox.classList.add("error");
    inputBox.classList.remove("success");
    errorDisplay.textContent = message;
    errorDisplay.style.display = "block";
  }
  
  
  function showSuccess(input) {
    const inputBox = input.closest(".login-box");
    const errorDisplay = inputBox.querySelector(".error");
  
    inputBox.classList.add("success");
    inputBox.classList.remove("error");
    errorDisplay.style.display = "none";
  }