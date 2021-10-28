const container = document.getElementsByClassName("container");

let grid = 16;
let colorMode = "color";
let width = 720;

handleMode = (e) => {
  colorMode = e.target.value;
};

getRandomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

handleSlider = (e) => {
  grid = e.target.value;
  container[0].style = `grid-template-columns: repeat(${grid}, 1fr); grid-auto-rows: ${
    width / grid
  }px;`;
  container[0].textContent = "";
  addDivs();
  setRangeLabel();
};

setColor = (e) => {
  e.target.classList = "grid";
  e.target.style = `background-color: ${
    colorMode === "color" ? "#000" : getRandomColor()
  }`;
};

resetColor = (e) => {
  e.target.classList = "";
};

handleClear = () => {
  const divs = document.querySelectorAll(".grid");
  divs.forEach((e) => {
    e.style = "";
  });
};

addDivs = () => {
  for (let i = 0; i < grid; i++) {
    for (let j = 0; j < grid; j++) {
      const div = document.createElement("div");
      div.addEventListener("mouseenter", setColor);
      container[0].append(div);
    }
  }
};

setRangeLabel = () => {
  document.getElementById(
    "myRangeLabel"
  ).textContent = `Grid size: ${grid} X ${grid}`;
};

window.addEventListener("load", function () {
  addDivs();
  setRangeLabel();
});

const clear = document.getElementById("clear");
clear.addEventListener("click", handleClear);

const slider = document.getElementById("myRange");
slider.addEventListener("change", handleSlider);

const mode = document.getElementsByName("mode");
mode.forEach((e) => e.addEventListener("change", handleMode));
