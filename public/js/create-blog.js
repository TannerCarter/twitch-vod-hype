async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="blog-title"]').value;
  const blog_content = document.querySelector(
    'input[name="blog-content"]'
  ).value;

  const response = await fetch(`/api/blogs`, {
    method: "POST",
    body: JSON.stringify({
      title,
      blog_content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-blog-form")
  .addEventListener("submit", newFormHandler);
