/*async function signupFormHandler(event) {
  event.preventDefault();

  const streamer = document.querySelector("#stream").value.trim();

  if (streamer) {
    const response = await fetch("/api/stream", {
      method: "post",
      body: JSON.stringify({
        streamer,
      }),
      headers: { "Content-Type": "application/json" },
    });

    // check the response status
    if (response.ok) {
      console.log("success");
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".streamGoat")
  .addEventListener("submit", signupFormHandler);*/
