function calculateResults() {
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    let score = 0;

    answers.forEach(answer => {
        if (answer.value === "yes") score++;
    });

    const result = document.getElementById("result");
    if (score >= 3) {
        result.innerHTML = "<p>Te recomendamos que te hagas la prueba de ETS. ¡Mantente seguro!</p>";
    } else {
        result.innerHTML = "<p>Es posible que no necesite hacerse pruebas, pero los chequeos regulares son una buena práctica.</p>";
    }
    document.getElementById("congratulations").style.display = "block";
}
