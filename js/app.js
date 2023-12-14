// const personalDetails = document.querySelectorAll(".details input");
// const login = document.querySelector(".login-btn");
// const facebook = document.querySelector(".facebook");
// const google = document.querySelector(".google");
// const homePage = document.querySelector(".return-home");
// const signUp = document.querySelector(".sign-up");
// const error = document.getElementById("error-message");

// function validateLogin() {
//   details = personalDetails.values;
//   if (details === "email" && details === "password") {
//     return "successful login";
//     error.style.color = "green";
//     error.textContent = "Login successful!";
//   } else {
//     return "failed login";
//     error.style.color = "red";
//     error.textContent = "Invalid email address or password. Please try again";
//   }
// }

// function validateLogin() {
//   const email = document.querySelectorAll(".details input");
//   const password = document.querySelectorAll(".details input");
//   const error = document.getElementById("error-message");
//   if (email === "Email" && password === "password") {
//     return "Successful Login";
//     error.style.color = "green";
//     error.textContent = "Login successful";
//   } else {
//     return "Failed login";
//     error.style.color = "red";
//     error.textContent = "Invalid emal address or password. Please try again";
//   }
// }

// function validateLogin() {
//   // Get input values
//   const email = document.querySelectorAll(".details input").value;
//   const password = document.querySelectorAll(".details input").value;

//   // Check if email and password are not empty
//   if (email.trim() === "" || password.trim() === "") {
//     // Display error message
//     document.getElementById("display-Area").textContent = alert(
//       "Email and password are required!"
//     );
//   } else {
//     // Clear error message
//     document.getElementById("error-message").textContent = "booking page";

//     // You can add further logic here to handle the login process
//     // For now, let's just log the inputs to the console
//     return "Email: ", email;
//     return "Password: ", password;
//   }
// }

const email = document.getElementById("email");
const password = document.getElementById("password");
const LoginButton = document.querySelector(".login-btn");
const display = document.getElementById("displayArea");
const bookingPage = document.querySelector(".booking-page");
const loginPage = document.querySelector(".logi-section");

function validateLogin() {
  if (email === "" && password === "") {
    display.style.display = this.prompt("Please enter email and/or password");
  } else if (email === "Email" && password === "Password") {
    bookingPage.classList.remove("hidden");
    loginPage.classList.add("hidden");
  } else {
    // bookingPage.classList.remove("hidden");
    // loginPage.classList.add("hidden");
    display.style.display = this.prompt(
      "Booking page is not ready! Okay bye!!!"
    );
  }
}

// LoginButton = addEventListener("click", function () {
//   if (email === "" || password === "") {
//     this.alert("Please enter email and/or password");
//   } else {
//     // display.style.display = this.prompt("Booking page is not ready!");
//   }
// });
