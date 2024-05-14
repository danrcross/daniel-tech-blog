const submitBtnHandler = async (event) => {
  event.preventDefault();
  const comment = await document.querySelector("#comment-entry").value.trim();
  console.log(comment);
  const postEl = event.target.closest(".card");
  console.log(postEl);
  const postId = postEl.getAttribute("data-id");
  console.log(postId);
  if (comment) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ comment, postId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      window.location.reload();
    } else {
      alert("response failed");
    }
  }
};

if (document.querySelector("#com-sub-btn")) {
  document
    .querySelector("#com-sub-btn")
    .addEventListener("click", submitBtnHandler);
}
