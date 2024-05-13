const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      setTimeout(() => {
        document.location.replace("/");
      }, 100);
    } else {
      alert("Failed to log in.");
    }
  }
};

const switchButtonHandler = async () => {
  document.location.replace("/signup");
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector("#signup-switch")
  .addEventListener("click", switchButtonHandler);
