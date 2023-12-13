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

function validateLogin() {
  const email = document.querySelectorAll(".details input");
  const password = document.querySelectorAll(".details input");
  const error = document.getElementById("error-message");
  if (email === "Email" && password === "password") {
    return "Successful Login";
    error.style.color = "green";
    error.textContent = "Login successful";
  } else {
    return "Failed login";
    error.style.color = "red";
    error.textContent = "Invalid emal address or password. Please try again";
  }
}
