document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    validateLoginForm();
});

function validateLoginForm() {
    const username = document.getElementById("username");
    const hospitalName = document.getElementById("hospital-name");
    const password = document.getElementById("password");

    let isValid = true;

    if (username.value.trim() === "") {
        showError(username, "Email is required");
        isValid = false;
    } else {
        showSuccess(username);
    }

    if (hospitalName.value.trim() === "") {
        showError(hospitalName, "Hospital name is required");
        isValid = false;
    } else {
        showSuccess(hospitalName);
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(password.value)) {
        showError(password, "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character");
        isValid = false;
    } else {
        showSuccess(password);
    }

    if (isValid) {
        const allUsers = JSON.parse(localStorage.getItem("allUserData")) || [];
        console.log("Stored Users:", allUsers); // Check stored users

        const user = allUsers.find(user => 
            user.email === username.value && 
            user.hospital === hospitalName.value && 
            user.password === password.value
        );

        if (user) {
            alert("Login successful!");
            console.log("User found, redirecting to doctor.html"); // Debugging
            window.location.href = "hospital.html";
        } else {
            console.log("User not found or incorrect credentials.");
            showError(username, "Invalid username, hospital name, or password");
            showError(hospitalName, "Invalid username, hospital name, or password");
            showError(password, "Invalid username, hospital name, or password");
        }
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