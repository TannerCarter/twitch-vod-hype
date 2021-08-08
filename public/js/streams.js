async function streams() {
  const response = await fetch("/streams", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    console.log("Tanner Is Goated!!!");
  } else {
    alert(response.statusText);
  }
}
streams();
