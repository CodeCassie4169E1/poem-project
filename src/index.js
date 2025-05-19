function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Poem",
    autoStart: true,
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
