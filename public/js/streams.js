async function streams() {
  const response = await fetch("/streams", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    console.log("Tanner Is Goated!!!");
    console.log(response);
    JSON.stringify(response);
    response.json().then(function (data) {
      console.log(data);

      //Start Streamer Usernames
      //Select elements by ID - Streams
      var streamName1 = document.querySelector("#streamName1");
      var streamName2 = document.querySelector("#streamName2");
      var streamName3 = document.querySelector("#streamName3");
      //Create elements for Streams
      var nameP1 = document.createElement("p");
      var nameP2 = document.createElement("p");
      var nameP3 = document.createElement("p");
      //Class names for stream elements
      nameP1.className = "nameStyle";
      nameP2.className = "nameStyle";
      nameP3.className = "nameStyle";
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
      //End Streamer Usernames

      //Start Streamers Info
      ///Select elements by ID - Streams
      var streamView1 = document.querySelector("#streamView1");
      var streamView2 = document.querySelector("#streamView2");
      var streamView3 = document.querySelector("#streamView3");
      //Create elements for Streams
      var viewP1 = document.createElement("p");
      var viewP2 = document.createElement("p");
      var viewP3 = document.createElement("p");
      //Class names for stream elements
      viewP1.className = "viewStyle";
      viewP2.className = "viewStyle";
      viewP3.className = "viewStyle";
      //Select Stream User from response
      var viewers1 = "Current Viewer Count: " + data.data[0].viewer_count;
      var viewers2 = "Current Viewer Count: " + data.data[1].viewer_count;
      var viewers3 = "Current Viewer Count: " + data.data[2].viewer_count;

      //Input selected data from response onto page in p element created
      viewP1.innerHTML = viewers1;
      viewP2.innerHTML = viewers2;
      viewP3.innerHTML = viewers3;

      //Append P Elements - Stream
      streamView1.appendChild(viewP1);
      streamView2.appendChild(viewP2);
      streamView3.appendChild(viewP3);

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
