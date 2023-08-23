const questionEl = document.getElementById("question"); 
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form"); 
const scoreEl = document.getElementById("score");

let score = 0;

function generateQuestion() {
    const num1 = parseInt(Math.random() * 10);
    const num2 = parseInt(Math.random() * 10);
    questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;
    return num1 * num2; // Return the correct answer
}

let correctAns = generateQuestion();

formEl.addEventListener("submit", (event) => { 
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    const userAns = parseInt(inputEl.value);
    if (userAns === correctAns) { 
        score++;
    } else {
        score--;
    }
    scoreEl.innerText = `Score = ${score}`;
    
    correctAns = generateQuestion(); // Generate a new question and update correct answer
    inputEl.value = ''; // Clear the input field
});

scoreEl.innerText = `Score = ${score}`;
