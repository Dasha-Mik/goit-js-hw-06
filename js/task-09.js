

const btnColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

function getRandomHexColor() {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = color;
    spanColor.textContent = color;
}


btnColor.addEventListener('click', getRandomHexColor);