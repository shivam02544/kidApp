const numR1 = Math.ceil(Math.random() * 10)
const numR2 = Math.ceil(Math.random() * 20)
const questionR1 = document.getElementById("question")
const formI1 = document.getElementById("main")
const inputR1 = document.getElementById("input")
questionR1.innerText = `What is ${numR1} multiple ${numR2}?`
const cans = numR1 * numR2;
const scoreR1 = document.getElementById("score");
let score = JSON.parse(localStorage.getItem("score"))
if (!score) {
    score = 0;
}
scoreR1.innerText = `Score:${score}`
formI1.addEventListener("submit", () => {
    const userans = +inputR1.value
    if (userans == cans) {
        score++;
        localStorage1()
    } else {
        score--;
        localStorage1()
    }
});

function localStorage1() {
    localStorage.setItem("score", JSON.stringify(score))
}

function ResetEvent() {
    score = 1
}