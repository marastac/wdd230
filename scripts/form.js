const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const message = document.querySelector("#formmessage");
const range = document.querySelector("#rating");
const rangeValue = document.querySelector("#rangevalue");

confirmPassword.addEventListener("focusout", () => {
  if (password.value !== confirmPassword.value) {
    message.style.display = "block";
    message.textContent = "❗Passwords do not match. Please try again.";
    password.value = "";
    confirmPassword.value = "";
    password.focus();
  } else {
    message.style.display = "none";
  }
});

range.addEventListener("input", () => {
  rangeValue.textContent = range.value;
});
