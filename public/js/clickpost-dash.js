const clickPostHandler = async (event) => {
  const cardEl = event.target.closest(".card");
  const btndivs = cardEl.getElementsByClassName("du-btns");
  btndivs[0].style.display = "block";
};

const delBtnHandler = async (event) => {
  const cardEl = event.target.closest(".card");
  const postId = cardEl.getAttribute("data-id");
  console.log("delete");
  const response = await fetch(`/api/blogpost/${postId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  console.log(response);
  if (response.ok) {
    console.log(response);
    window.location.replace("/dashboard");
  } else {
    alert("Failed to delete.");
  }
};

const updBtnHandler = async (event) => {
  const cardEl = event.target.closest(".card");
  const updform = cardEl.querySelector(".form");
  updform.style.display = "block";
};

const updPostHandler = async (event) => {
  event.preventDefault();
  const cardEl = event.target.closest(".card");
  const postId = cardEl.getAttribute("data-id");
  const title = await document
    .querySelector(`#post-title${postId}`)
    .value.trim();
  const content = await document
    .querySelector(`#post-content${postId}`)
    .value.trim();
  const response = await fetch(`/api/blogpost/${postId}`, {
    method: "PUT",
    body: JSON.stringify({ title, content }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    window.location.replace("/dashboard");
  } else {
    alert("Failed to update.");
  }
};

const delbtns = document.querySelectorAll(".del-btn");
const updbtns = document.querySelectorAll(".upd-btn");
const forms = document.querySelectorAll(".upd-form");
const posts = document.querySelectorAll(".card");

delbtns.forEach((btn) => btn.addEventListener("click", delBtnHandler));
updbtns.forEach((btn) => btn.addEventListener("click", updBtnHandler));
forms.forEach((form) => form.addEventListener("submit", updPostHandler));
posts.forEach((post) => post.addEventListener("click", clickPostHandler));
