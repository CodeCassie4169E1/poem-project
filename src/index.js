function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();
  let userInput = document.querySelector("#user-word");
  let apiKey = "e833efeaaa0b3890o88a585t36443235";
  let prompt = `Generate a poem about ${userInput.value}`;
  let context =
    "You are a funny poem expert and love to write very short poems. Use a four line maxumim layout with rhyming words. Add as many emojis as possible ";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = `<span class="loader">🕢</span> poem about ${userInput.value}...`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
