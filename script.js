const container = document.getElementById("container");
const gridButtonSmall = document.getElementById("gridButtonSmall");
const gridButtonMedium = document.getElementById("gridButtonMedium");
const gridButtonLarge = document.getElementById("gridButtonLarge");
const colorButton = document.getElementsByClassName("colorOption");

const createGrid = (rows, cols) => {
  container.replaceChildren();
  let opacity = 0;
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  for (let i = 1; i <= rows; i++) {
    const gridDivH = document.createElement("div");
    container.appendChild(gridDivH);
    gridDivH.classList.add("gridH");
    if (rows === 16) {
      gridDivH.style.width = "30px";
      gridDivH.style.height = "30px";
      container.style.gap = "1px";
    } else if (rows === 32) {
      gridDivH.style.width = "15px";
      gridDivH.style.height = "15px";
      container.style.gap = "0.5px";
    } else {
      gridDivH.style.width = "7.5px";
      gridDivH.style.height = "7.5px";
      container.style.gap = "0.25px";
      gridDivH.style.border = "0.5px solid black";
    }
    gridDivH.addEventListener("mouseover", () => {
      gridDivH.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
      r += 5;
      g += 5;
      b += 5;
      opacity += 0.05;
      gridDivH.style.opacity = opacity;

      if (opacity >= 1) {
        opacity = 0;
      }
      if (r <= 254 || g <= 254 || b <= 254) {
        gridDivH.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
      } else {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
      }
    });

    for (let j = 1; j <= cols; j++) {
      const gridDivV = document.createElement("div");
      container.appendChild(gridDivV);
      gridDivV.classList.add("gridV");
      if (cols === 15) {
        gridDivV.style.width = "30px";
        gridDivV.style.height = "30px";
      } else if (cols === 31) {
        gridDivV.style.width = "15px";
        gridDivV.style.height = "15px";
      } else {
        gridDivV.style.width = "7.5px";
        gridDivV.style.height = "7.5px";
        gridDivV.style.border = "0.5px solid black";
      }

      gridDivV.addEventListener("mouseover", () => {
        gridDivV.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
        r += 5;
        g += 5;
        b += 5;
        opacity += 0.05;
        gridDivV.style.opacity = opacity;

        if (opacity >= 1) {
          opacity = 0;
        }
        if (r <= 254 || g <= 254 || b <= 254) {
          gridDivV.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
        } else {
          r = Math.floor(Math.random() * 256);
          g = Math.floor(Math.random() * 256);
          b = Math.floor(Math.random() * 256);
        }
      });
    }
  }
};

createGrid(16, 15);

gridButtonSmall.addEventListener("click", (e) => {
  createGrid(16, 15);
});
gridButtonMedium.addEventListener("click", (e) => {
  createGrid(32, 31);
});
gridButtonLarge.addEventListener("click", (e) => {
  createGrid(64, 63);
});
