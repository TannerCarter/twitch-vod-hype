async function streams() {
  const response = await fetch("/streams", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    console.log("Tanner Is Goated!!!");
    console.log(response);
    //Select both elements by ID - Streams and Clips
    var streamName = document.querySelector("#streamName");
    var streamClip = document.querySelector("#streamClip");
    //Create elements for both id's selected - Streams and Clips
    var nameP = document.createElement("p");
    var clipP = document.createElement("p");
    //Class names for P elements
    nameP.className = "nameStyle";
    clipP.className = "clipStyle";
    //Append P Elements
    streamName.appendChild(nameP);
    streamClip.appendChild(clipP);
    //Select Stream User from response
    //Code Here
    //Input selected data from response onto page in p element created
    nameP.innerHTML = streamer;
  } else {
    alert(response.statusText);
  }
}
streams();
