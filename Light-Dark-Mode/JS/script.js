const mode = document.getElementById("mode");
const heading = document.getElementById("heading");

mode.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "black";
    document.title = "Dark Mode";
    heading.textContent = "Dark Mode";
    heading.style.color = "white";
    mode.textContent = "🌞";
  } else {
    document.body.style.backgroundColor = "white";
    document.title = "Dark Mode";
    heading.textContent = "Light Mode";
    heading.style.color = "black";
    mode.textContent = "🌛";
  }
});
