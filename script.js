function calculateResults() {
    const questions = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];
    let allAnswered = true;
    
    for (let i = 0; i < questions.length; i++) {
        const question = document.getElementsByName(questions[i]);
        let answered = false;
        
        // Check if any radio button is selected for the current question
        for (let j = 0; j < question.length; j++) {
            if (question[j].checked) {
                answered = true;
                break;
            }
        }

        // If a question is unanswered, set allAnswered to false
        if (!answered) {
            allAnswered = false;
            break;
        }
    }

    if (!allAnswered) {
        // If not all questions are answered, show a message
        alert("Por favor, responda a todas las preguntas antes de enviar.");
    } else {
        const answers = document.querySelectorAll('input[type="radio"]:checked');
        let score = 0;

        answers.forEach(answer => {
            if (answer.value === "yes") score++;
        });

        const result = document.getElementById("result");
        if (score >= 1) {
            result.innerHTML = "<p>Te recomendamos que te hagas la prueba de ETS. ¡Mantente seguro!</p>";
        } else {
            result.innerHTML = "<p>Es posible que no necesite hacerse pruebas, pero los chequeos regulares son una buena práctica.</p>";
        }
        document.getElementById("congratulations").style.display = "block";
    }
}
