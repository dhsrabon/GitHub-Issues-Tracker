const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  loginBtn.disabled = true;
  loginBtn.textContent = "Signing in...";

  if (username === "admin" && password === "admin123") {
    message.classList.remove("hidden", "bg-red-100", "text-red-700");
    message.classList.add("bg-green-100", "text-green-700");
    message.textContent = "Login successful! Redirecting...";

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);

    setTimeout(() => {
      window.location.href = "./home.html";
    }, 800);
  } else {
    message.classList.remove("hidden", "bg-green-100", "text-green-700");
    message.classList.add("bg-red-100", "text-red-700");
    message.textContent = "Invalid username or password.";

    loginBtn.disabled = false;
    loginBtn.textContent = "Sign in";
  }
});