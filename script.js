const container = document.getElementById("container");
const gridButton = document.getElementById("gridButton");

const createGrid = (gridWith, gridHeight) => {
  if (gridWith >= 100 || gridHeight >= 100) {
    alert("One of your dimensions is too big!");
  } else if (gridWith && gridHeight <= 100) {
    for (let i = 1; i <= gridWith; i++) {
      const gridDivH = document.createElement("div");
      container.appendChild(gridDivH);
      gridDivH.classList.add("gridH");
      gridDivH.addEventListener("mouseover", () => {
        gridDivH.style.backgroundColor = "black";
      });
      for (let j = 1; j <= gridHeight; j++) {
        const gridDivV = document.createElement("div");
        container.appendChild(gridDivV);
        gridDivV.classList.add("gridV");
        gridDivV.addEventListener("mouseover", () => {
          gridDivV.style.backgroundColor = "black";
        });
      }
    }
  } else {
    alert("Please enter a smaller number!");
  }
};
createGrid(16, 15);

gridButton.addEventListener("click", (e) => {
  const gridWith = prompt("How wide should the grid be?");
  const gridHeight = prompt("How high should the grid be?");
  container.replaceChildren();
  createGrid(gridWith, gridHeight);
});
