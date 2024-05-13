const clickPostHandler = (event) => {
  const cardEl = event.target.closest(".card");
  const postId = cardEl.getAttribute("data-id");
  document.location.replace(`/blogpost/${postId}`);
  console.log(postId);
};

const posts = document.querySelectorAll(".card");

posts.forEach((post) => {
  post.addEventListener("click", clickPostHandler);
});
