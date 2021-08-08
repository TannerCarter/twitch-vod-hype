async function streams() {
  const response = await fetch("/streams", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    console.log("Tanner Is Goated!!!");
    console.log(response);
    response.json().then(function (data) {
      console.log(data);
      //Select elements by ID - Streams
      var streamName1 = document.querySelector("#streamName1");
      var streamName2 = document.querySelector("#streamName2");
      var streamName3 = document.querySelector("#streamName3");
      //Create elements for Streams
      var nameP1 = document.createElement("p");
      var nameP2 = document.createElement("p");
      var nameP3 = document.createElement("p");
      //Class names for stream elements
      nameP1.className = "nameStyle1";
      nameP2.className = "nameStyle2";
      nameP3.className = "nameStyle3";
      //Select Stream User from response
      var streamer1 = data.data[0].user_name;
      var streamer2 = data.data[1].user_name;
      var streamer3 = data.data[2].user_name;

      //Input selected data from response onto page in p element created
      nameP1.innerHTML = streamer1;
      nameP2.innerHTML = streamer2;
      nameP3.innerHTML = streamer3;

      //Append P Elements - Stream
      streamName1.appendChild(nameP1);
      streamName2.appendChild(nameP2);
      streamName3.appendChild(nameP3);

      //Select elements by ID - Clips
      //var streamClip = document.querySelector("#streamClip");

      //Create elements for Clips
      //var clipP = document.createElement("p");

      //clipP.className = "clipStyle";

      //streamClip.appendChild(clipP);
    });
  } else {
    alert(response.statusText);
  }
}
streams();
