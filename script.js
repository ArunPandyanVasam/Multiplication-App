const num1 = parseInt(Math.random() * 10);
const num2 = parseInt(Math.random() * 10);

const questionEl = document.getElementById("question"); 
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form"); 

questionEl.innerText = `What is ${num1} multiplied by ${num2}?`; 
const correctAns = num1 * num2;

let score = 0;

formEl.addEventListener("submit", (event) => { 
    //event.preventDefault(); // Prevent the form from submitting and refreshing the page
    const userAns = parseInt(inputEl.value);
    if (userAns === correctAns) { 
        score++;
        console.log(score);
    } else {
        score--;
        console.log(score);
    }
});

const scoreE1 = document.getElementById("score");
scoreE1.innerText = `Score = ${score}`;