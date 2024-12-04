let size = 30;

function createSketchGrid(size) {
    const container = document.querySelector(".container");
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement("div");
        square.classList.add("squares");
        square.style.width = `calc(100% / ${size})`;
        square.addEventListener("mouseenter", applyColor);
        container.appendChild(square);
    }
}

function applyColor(event) {
    event.target.style.backgroundColor = generateRandomColor();
    if (event.target.style.opacity < 1) {
        event.target.style.opacity = +event.target.style.opacity + 0.1;
    }
}

function generateRandomColor() {
    let hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * hex.length)];
    }
    return color;
}

function setGridSize() {
    let sizeInput;
    do {
        sizeInput = Math.round(+prompt("Choose a grid size (100 Max):"));
    } while (!(sizeInput > 0 && sizeInput < 101));
    size = sizeInput;
}

function deleteSketchGrid() {
    const squares = document.querySelectorAll(".squares");
    for (let square of squares) {
        square.remove();
    }
}

const setSizeButton = document.querySelector("#setSize");
setSizeButton.addEventListener("click", () => {
    setGridSize();
    deleteSketchGrid();
    createSketchGrid(size);
});

createSketchGrid(size);
