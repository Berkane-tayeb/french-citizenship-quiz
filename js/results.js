document.addEventListener('DOMContentLoaded', function() {
    // Récupérer les résultats
    const results = JSON.parse(localStorage.getItem('quizResults'));
    
    // Si pas de résultats, rediriger vers l'accueil
    if (!results) {
        window.location.href = 'index.html';
        return;
    }
    
    // Afficher les résultats
    displayResults(results);
    
    // Configurer le partage
    setupSharing(results);
});

// Afficher les résultats
function displayResults(results) {
    const resultsSummary = document.getElementById('results-summary');
    const resultsDetails = document.getElementById('results-details');
    const recommendations = document.getElementById('recommendations');
    
    const percentage = Math.round((results.score / results.total) * 100);
    const passed = results.score >= 7;
    
    // Résumé
    resultsSummary.innerHTML = `
        <div class="score-card">
            <div class="score-display">
                <div class="score-circle" style="--score-percent: ${percentage}">
                    <span class="score-number">${results.score}</span>
                    <span class="score-total">/${results.total}</span>
                </div>
                <div class="score-percentage">${percentage}%</div>
            </div>
            
            <div class="score-result">
                <h2 class="${passed ? 'passed' : 'failed'}">
                    ${passed ? '✅ Félicitations !' : '❌ Résultat insuffisant'}
                </h2>
                <p>
                    ${passed 
                        ? `Vous avez réussi le quiz avec un score de ${results.score}/${results.total}. Vous avez démontré une bonne connaissance des valeurs et institutions françaises.` 
                        : `Votre score est de ${results.score}/${results.total}. Pour réussir, vous devez obtenir au moins 32 bonnes réponses. Nous vous encourageons à réviser et réessayer.`}
                </p>
            </div>
        </div>
    `;
    
    // Détails des réponses
    let detailsHTML = '<h3>Détail des réponses</h3><div class="answers-list">';
    
    questions.forEach((question, index) => {
        const userAnswer = results.answers[index];
        const isCorrect = userAnswer === question.correctAnswer;
        
        detailsHTML += `
            <div class="answer-item ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="answer-header">
                    <span class="question-number">Q${index + 1}</span>
                    <span class="answer-status">
                        ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </span>
                </div>
                
                <div class="question-text">
                    <p><strong>${question.question}</strong></p>
                </div>
                
                <div class="answer-comparison">
                    <div class="user-answer">
                        <span class="label">Votre réponse :</span>
                        <span class="answer-text">
                            ${userAnswer !== null ? question.options[userAnswer] : 'Non répondue'}
                        </span>
                    </div>
                    
                    ${!isCorrect ? `
                        <div class="correct-answer">
                            <span class="label">Bonne réponse :</span>
                            <span class="answer-text">${question.options[question.correctAnswer]}</span>
                        </div>
                    ` : ''}
                </div>
                
                <div class="explanation">
                    <span class="label">Explication :</span>
                    <p>${question.explanation}</p>
                </div>
            </div>
        `;
    });
    
    detailsHTML += '</div>';
    resultsDetails.innerHTML = detailsHTML;
    
    // Recommandations
    recommendations.innerHTML = `
        <h3>Recommandations pour votre préparation</h3>
        
        ${passed ? `
            <div class="recommendation passed">
                <p>Vous avez démontré une bonne connaissance des sujets abordés lors de l'examen civique. Pour continuer à vous préparer :</p>
                <ul>
                    <li>Consultez le site du <a href="https://www.service-public.fr/" target="_blank" rel="noopener">service public</a> pour les informations officielles</li>
                    <li>Révisez l'histoire de France et les symboles de la République</li>
                    <li>Familiarisez-vous avec le fonctionnement des institutions françaises</li>
                    <li>Entraînez-vous à parler de votre parcours et de votre projet en France</li>
                </ul>
            </div>
        ` : `
            <div class="recommendation failed">
                <p>Pour améliorer vos connaissances et réussir votre examen civique :</p>
                <ul>
                    <li>Révisez les questions que vous avez manquées en lisant attentivement les explications</li>
                    <li>Consultez le livret du citoyen disponible sur le <a href="https://www.immigration.interieur.gouv.fr/" target="_blank" rel="noopener">site du Ministère de l'Intérieur</a></li>
                    <li>Approfondissez vos connaissances sur l'histoire de France, la géographie et les valeurs républicaines</li>
                    <li>Refaites ce quiz dans quelques jours pour vérifier vos progrès</li>
                    <li>Participez à des sessions de préparation organisées par des associations locales</li>
                </ul>
            </div>
        `}
        
        <div class="resources">
            <h4>Ressources utiles :</h4>
            <ul>
                <li><a href="https://www.service-public.fr/particuliers/vosdroits/N110" target="_blank" rel="noopener">Service-public.fr - Naturalisation</a></li>
                <li><a href="https://www.immigration.interieur.gouv.fr/Accueil-et-accompagnement/La-nationalite-francaise" target="_blank" rel="noopener">Ministère de l'Intérieur - Nationalité française</a></li>
                <li><a href="https://www.vie-publique.fr/" target="_blank" rel="noopener">Vie-publique.fr - Comprendre les institutions</a></li>
                <li><a href="https://www.france.fr/fr" target="_blank" rel="noopener">France.fr - Découverte de la France</a></li>
            </ul>
        </div>
    `;
    
    // Ajouter du CSS pour les résultats
    addResultsStyles();
}

// Ajouter des styles pour les résultats
function addResultsStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .results-page h1 {
            text-align: center;
            color: var(--primary-color);
            margin-bottom: 2rem;
        }
        
        .results-summary {
            max-width: 1000px;
            margin: 0 auto 2rem;
        }
        
        .score-card {
            display: flex;
            align-items: center;
            background-color: white;
            border-radius: var(--border-radius);
            padding: 2.5rem;
            margin-bottom: 2rem;
            box-shadow: var(--shadow);
            flex-wrap: wrap;
            gap: 2rem;
        }
        
        .score-display {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-width: 200px;
        }
        
        .score-circle {
            position: relative;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background: conic-gradient(
                var(--success-color) 0% calc(var(--score-percent) * 1%),
                #f0f0f0 calc(var(--score-percent) * 1%) 100%
            );
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
        }
        
        .score-circle::before {
            content: '';
            position: absolute;
            width: 120px;
            height: 120px;
            background-color: white;
            border-radius: 50%;
        }
        
        .score-number, .score-total {
            position: relative;
            z-index: 1;
            font-weight: bold;
        }
        
        .score-number {
            font-size: 3rem;
            color: #333;
        }
        
        .score-total {
            font-size: 1.5rem;
            color: #777;
        }
        
        .score-percentage {
            font-size: 1.8rem;
            font-weight: bold;
            color: var(--primary-color);
        }
        
        .score-result {
            flex: 1;
            min-width: 300px;
        }
        
        .score-result h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
        
        .score-result h2.passed {
            color: var(--success-color);
        }
        
        .score-result h2.failed {
            color: var(--error-color);
        }
        
        .score-result p {
            font-size: 1.1rem;
            line-height: 1.6;
            color: #555;
        }
        
        .results-details {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 2rem;
            margin-bottom: 2rem;
            box-shadow: var(--shadow);
        }
        
        .results-details h3 {
            color: var(--primary-color);
            margin-bottom: 1.5rem;
            padding-bottom: 0.8rem;
            border-bottom: 2px solid #eee;
        }
        
        .answers-list {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        
        .answer-item {
            padding: 1.5rem;
            border-radius: var(--border-radius);
            border-left: 5px solid;
        }
        
        .answer-item.correct {
            border-left-color: var(--success-color);
            background-color: #f1f8e9;
        }
        
        .answer-item.incorrect {
            border-left-color: var(--error-color);
            background-color: #ffebee;
        }
        
        .answer-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .question-number {
            font-weight: bold;
            color: #333;
        }
        
        .answer-status {
            font-weight: bold;
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.9rem;
        }
        
        .answer-item.correct .answer-status {
            background-color: var(--success-color);
            color: white;
        }
        
        .answer-item.incorrect .answer-status {
            background-color: var(--error-color);
            color: white;
        }
        
        .question-text {
            margin-bottom: 1rem;
        }
        
        .question-text p {
            margin: 0;
            line-height: 1.5;
        }
        
        .answer-comparison {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }
        
        .user-answer, .correct-answer {
            display: flex;
            gap: 0.5rem;
        }
        
        .label {
            font-weight: bold;
            min-width: 120px;
        }
        
        .answer-text {
            flex: 1;
        }
        
        .explanation {
            background-color: white;
            padding: 1rem;
            border-radius: var(--border-radius);
            margin-top: 1rem;
        }
        
        .explanation .label {
            display: block;
            margin-bottom: 0.5rem;
            color: var(--primary-color);
        }
        
        .explanation p {
            margin: 0;
            line-height: 1.5;
            color: #555;
        }
        
        .results-actions {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            margin-bottom: 2rem;
        }
        
        .action-button {
            padding: 1rem 2.5rem;
            background-color: var(--primary-color);
            color: white;
            text-decoration: none;
            border-radius: var(--border-radius);
            font-weight: bold;
            font-size: 1.1rem;
            transition: transform 0.3s, opacity 0.3s;
            border: none;
            cursor: pointer;
            text-align: center;
            display: inline-block;
        }
        
        .action-button.retry {
            background-color: var(--success-color);
        }
        
        .action-button.home {
            background-color: var(--primary-color);
        }
        
        .action-button:hover {
            transform: translateY(-3px);
            opacity: 0.9;
        }
        
        .recommendations {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 2rem;
            box-shadow: var(--shadow);
        }
        
        .recommendations h3 {
            color: var(--primary-color);
            margin-bottom: 1.5rem;
            padding-bottom: 0.8rem;
            border-bottom: 2px solid #eee;
        }
        
        .recommendation {
            padding: 1.5rem;
            border-radius: var(--border-radius);
            margin-bottom: 1.5rem;
        }
        
        .recommendation.passed {
            background-color: #f1f8e9;
            border-left: 5px solid var(--success-color);
        }
        
        .recommendation.failed {
            background-color: #ffebee;
            border-left: 5px solid var(--error-color);
        }
        
        .recommendation p {
            font-weight: bold;
            margin-bottom: 1rem;
            color: #333;
        }
        
        .recommendation ul {
            padding-left: 1.5rem;
            margin-bottom: 0;
        }
        
        .recommendation li {
            margin-bottom: 0.5rem;
            line-height: 1.5;
        }
        
        .recommendation a {
            color: var(--primary-color);
            text-decoration: none;
            font-weight: bold;
        }
        
        .recommendation a:hover {
            text-decoration: underline;
        }
        
        .resources {
            background-color: #f5f9ff;
            padding: 1.5rem;
            border-radius: var(--border-radius);
        }
        
        .resources h4 {
            color: var(--primary-color);
            margin-bottom: 1rem;
        }
        
        .resources ul {
            padding-left: 1.5rem;
        }
        
        .resources li {
            margin-bottom: 0.5rem;
        }
        
        .resources a {
            color: var(--primary-color);
            text-decoration: none;
        }
        
        .resources a:hover {
            text-decoration: underline;
        }
        
        @media (max-width: 768px) {
            .score-card {
                flex-direction: column;
                text-align: center;
            }
            
            .share-buttons {
                flex-direction: column;
            }
            
            .share-button {
                width: 100%;
            }
        }
    `;
    
    document.head.appendChild(style);
}