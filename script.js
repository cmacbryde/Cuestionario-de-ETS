function calculateResults() {
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    let score = 0;

    answers.forEach(answer => {
        if (answer.value === "yes") score++;
    });

    const result = document.getElementById("result");
    if (score >= 3) {
        result.innerHTML = "<p>We recommend getting tested for STDs. Stay safe!</p>";
    } else {
        result.innerHTML = "<p>You may not need testing, but regular check-ups are good practice.</p>";
    }
}
