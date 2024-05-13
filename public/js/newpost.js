const npBtnHandler = async () => {
  const form = document.querySelector("#new-post-form");
  form.style.display = "block";
};
if (document.querySelector("#new-post-btn")) {
  document
    .querySelector("#new-post-btn")
    .addEventListener("click", npBtnHandler);
}

const spBtnHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector("#post-title").value.trim();
  const content = document.querySelector("#post-content").value.trim();
  if (title && content) {
    const response = await fetch("/api/blogpost", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to log in.");
    }
  }
};

if (document.querySelector("#new-post-form")) {
  document
    .querySelector("#new-post-form")
    .addEventListener("submit", spBtnHandler);
}
