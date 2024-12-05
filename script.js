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

    // Display grid size
    const displaySize = document.querySelector("#displaySize");
    displaySize.textContent = `${size}x${size}`;
}

function applyColor(event) {
    // Check which mode is selected
    const mode = document.querySelector("input[name='options']:checked");
    if (mode.id === "default") {
        // Get selected color
        const selColor = document.querySelector("input[id='color']").value;
        event.target.style.backgroundColor = selColor;
        applyOpacityEffect(event);
    } else {
        event.target.style.backgroundColor = generateRandomColor();
        applyOpacityEffect(event);
    }
}

// Receives the target event as parameter
function applyOpacityEffect(event) {
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

function resetSketch() {
    deleteSketchGrid();
    createSketchGrid(size);
}

// Change grid size
const setSizeButton = document.querySelector("#setSize");
setSizeButton.addEventListener("click", () => {
    setGridSize();
    resetSketch();
});

// Clear current sketch
const clearSketchButton = document.querySelector("#clearSketch");
clearSketchButton.addEventListener("click", resetSketch);

createSketchGrid(size);
