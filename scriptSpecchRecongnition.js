if ("webkitSpeechRecognition" in window) {
  let speechRecognition = new webkitSpeechRecognition();
  let final_transcript = "";

  speechRecognition.continuous = true;
  speechRecognition.interimResults = true;
  speechRecognition.lang = document.querySelector("#select_dialect").value;

  speechRecognition.onstart = () => {
    document.querySelector("#status").style.display = "block";
  };

  speechRecognition.onerror = () => {
    document.querySelector("#status").style.display = "none";
    console.log("Speech Recognition Error");
  };

  speechRecognition.onend = () => {
    document.querySelector("#status").style.display = "none";
    console.log("Speech Recognition Ended");
  };

  speechRecognition.onresult = (event) => {
    let interim_transcript = "";

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }

    document.querySelector("#final").innerHTML = final_transcript;
    document.querySelector("#interim").innerHTML = interim_transcript;
  };

  document.querySelector("#start").onclick = () => {
    speechRecognition.start();
  };

  document.querySelector("#stop").onclick = () => {
    speechRecognition.stop();
  };
} else {
  console.log("Speech Recognition Not Available");
}

document.addEventListener("DOMContentLoaded", function() {
  // Get references to the start and stop buttons and the image element
  var startButton = document.getElementById("start");
  var stopButton = document.getElementById("stop");
  var imgElement = document.getElementById("imgElement");

  // Add click event listener to the start button
  startButton.addEventListener("click", function() {
    // Display the image element
    imgElement.style.display = "block";
  });

  // Add click event listener to the stop button
  stopButton.addEventListener("click", function() {
    // Hide the image element
    imgElement.style.display = "none";
  });
});
