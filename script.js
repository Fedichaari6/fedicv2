document.getElementById("quiz-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche le rechargement de la page
    // Les bonnes réponses
    const correctAnswers = {
        q1: "a",
        q2: "b",
        q3: "b",
        q4: "b",
        q5: "b",
        q6: "a",
        q7: "a",
        q8: "b",
        q9: "a",
        q10: "a",
        q11: "a",
        q12: "a",
        q13: "b",
        q14: "a",
        q15: "a"
    };
    let score = 0; // Initialisation du score
    let totalQuestions = Object.keys(correctAnswers).length;
    // Parcourir les réponses de l'utilisateur
    for (let question in correctAnswers) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === correctAnswers[question]) {
            score++; // Incrémente le score si la réponse est correcte
        }
    }
    // Affiche le résultat à l'utilisateur
    alert(`Vous avez obtenu ${score} sur ${totalQuestions} bonnes réponses.`);
});