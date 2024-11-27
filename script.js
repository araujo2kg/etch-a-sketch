let size = 20;
const container = document.querySelector(".container");

for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.classList.add("squares");
    container.appendChild(square);
}

const squares = document.querySelectorAll(".squares");
squares.forEach((square) => {
    square.style.width = `calc(100% / ${size})`;
});
