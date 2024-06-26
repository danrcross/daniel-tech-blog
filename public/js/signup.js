const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setTimeout(() => {
        document.location.replace("/");
      }, 100);
    } else {
      alert("Failed to sign up.");
    }
  }
};

const switchButtonHandler = async () => {
  document.location.replace("/login");
};
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

document
  .querySelector("#login-switch")
  .addEventListener("click", switchButtonHandler);
