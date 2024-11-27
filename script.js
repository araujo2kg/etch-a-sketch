let size = 30;
const container = document.querySelector(".container");

function createSketchGrid(size) {
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement("div");
        square.classList.add("squares");
        square.style.width = `calc(100% / ${size})`;
        square.addEventListener("mouseenter", applyColor);
        container.appendChild(square);
    }
}

function applyColor(event) {
    event.target.style.backgroundColor = "black";
}

createSketchGrid(size);
