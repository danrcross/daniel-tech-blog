const loginHandler = async () => {
  window.location.replace("/login");
};

const signupHandler = async () => {
  window.location.replace("/signup");
};

document.querySelector("#db-login").addEventListener("click", loginHandler);

document.querySelector("#db-signup").addEventListener("click", signupHandler);
