/*async function streams() {
  const response = await fetch("/streams", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    console.log(response.body);
  } else {
    alert(response.statusText);
  }
}

/*async function streams() {
  console.log("Stream Data");
  const url = "/streams";
  const response = await url;
  const json = await response;
  console.log(json);
  console.log("Finished");
}

streams();*/
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
