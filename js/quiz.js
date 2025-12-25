document.addEventListener('DOMContentLoaded', function() {
    // Configuration du quiz
    const quizConfig = {
        totalTime: 45 * 60,
        totalQuestions: 40,
        passingScore: 32
    };
    
    // Sélectionner 40 questions aléatoires
    const selectedQuestions = selectRandomQuestions(quizConfig.totalQuestions);
    
    // État du quiz
    let quizState = {
        currentQuestion: 0,
        answers: Array(selectedQuestions.length).fill(null),
        timeLeft: quizConfig.totalTime,
        quizStarted: false,
        quizCompleted: false,
        startTime: null,
        timerInterval: null,
        selectedQuestions: selectedQuestions.map(q => q.id) // Stocker les IDs des questions sélectionnées
    };
    
    // Éléments DOM
    const timerContainer = document.getElementById('timer-container');
    const questionContainer = document.getElementById('question-container');
    const currentQuestionEl = document.getElementById('current-question');
    const totalQuestionsEl = document.getElementById('total-questions');
    const questionsGrid = document.getElementById('questions-grid');
    const answeredCountEl = document.getElementById('answered-count');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const submitButton = document.getElementById('submit-button');
    const resetButton = document.getElementById('reset-button');
    
    // Sélectionner des questions aléatoires
    function selectRandomQuestions(count) {
        // Créer une copie du tableau de questions
        const shuffled = [...questions].sort(() => Math.random() - 0.5);
        
        // Vérifier que nous avons assez de questions
        const actualCount = Math.min(count, questions.length);
        
        // Sélectionner les premières 'actualCount' questions
        const selected = shuffled.slice(0, actualCount);
        
        // Assurer une distribution approximative par thème
        const themedSelection = balanceQuestionsByTheme(selected);
        
        return themedSelection;
    }
    
    // Équilibrer les questions par thème
    function balanceQuestionsByTheme(selectedQuestions) {
        // Compter les questions par thème approximatif
        const themeCounts = {};
        
        selectedQuestions.forEach(q => {
            // Déterminer le thème approximatif basé sur l'ID
            let theme;
            if (q.id <= 20) theme = 'principes';
            else if (q.id <= 40) theme = 'institutions';
            else if (q.id <= 60) theme = 'droits';
            else if (q.id <= 80) theme = 'histoire';
            else theme = 'societe';
            
            themeCounts[theme] = (themeCounts[theme] || 0) + 1;
        });
        
        // Si la distribution est trop déséquilibrée, réajuster
        // (Cette logique peut être affinée selon vos besoins)
        return selectedQuestions;
    }
    
    // Initialiser le quiz
    function initQuiz() {
        // Charger l'état sauvegardé
        loadSavedState();
        
        // Mettre à jour les éléments d'information
        totalQuestionsEl.textContent = selectedQuestions.length;
        
        // Démarrer le chronomètre si le quiz n'est pas terminé
        if (!quizState.quizCompleted && quizState.timeLeft > 0) {
            startTimer();
        }
        
        // Afficher la première question
        renderQuestion();
        renderQuestionsGrid();
        updateNavigation();
        
        // Ajouter les écouteurs d'événements
        prevButton.addEventListener('click', goToPreviousQuestion);
        nextButton.addEventListener('click', goToNextQuestion);
        submitButton.addEventListener('click', submitQuiz);
        resetButton.addEventListener('click', resetQuiz);
    }
    
    // Charger l'état sauvegardé
    function loadSavedState() {
        const savedState = localStorage.getItem('quizState');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            
            // Vérifier si le quiz était en cours et si c'est le même jeu de questions
            if (parsedState.selectedQuestions && 
                JSON.stringify(parsedState.selectedQuestions) === JSON.stringify(quizState.selectedQuestions)) {
                
                if (parsedState.startTime) {
                    const elapsedSeconds = Math.floor((Date.now() - parsedState.startTime) / 1000);
                    parsedState.timeLeft = Math.max(0, quizConfig.totalTime - elapsedSeconds);
                }
                
                quizState = { ...quizState, ...parsedState };
                
                // Si le temps est écoulé, soumettre automatiquement
                if (quizState.timeLeft <= 0 && !quizState.quizCompleted) {
                    quizState.quizCompleted = true;
                    submitQuiz();
                }
            } else {
                // Nouveau quiz (questions différentes)
                quizState.startTime = Date.now();
                quizState.quizStarted = true;
                saveState();
            }
        } else {
            // Nouveau quiz
            quizState.startTime = Date.now();
            quizState.quizStarted = true;
            saveState();
        }
    }
    
    // Sauvegarder l'état
    function saveState() {
        localStorage.setItem('quizState', JSON.stringify(quizState));
    }
    
    // Démarrer le chronomètre
    function startTimer() {
        // Arrêter le timer existant
        if (quizState.timerInterval) {
            clearInterval(quizState.timerInterval);
        }
        
        quizState.timerInterval = setInterval(() => {
            if (quizState.startTime) {
                const elapsedSeconds = Math.floor((Date.now() - quizState.startTime) / 1000);
                quizState.timeLeft = Math.max(0, quizConfig.totalTime - elapsedSeconds);
                
                renderTimer();
                
                if (quizState.timeLeft <= 0) {
                    clearInterval(quizState.timerInterval);
                    quizState.quizCompleted = true;
                    submitQuiz();
                }
                
                saveState();
            }
        }, 1000);
    }
    
    // Rendre le chronomètre
    function renderTimer() {
        const minutes = Math.floor(quizState.timeLeft / 60);
        const seconds = quizState.timeLeft % 60;
        const percentage = (quizState.timeLeft / quizConfig.totalTime) * 100;
        const isWarning = quizState.timeLeft < 5 * 60; // Moins de 5 minutes
        const isCritical = quizState.timeLeft < 60; // Moins d'1 minute
        
        timerContainer.innerHTML = `
            <div class="timer-header">
                <h2>Temps restant</h2>
                <div class="time-display ${isWarning ? 'warning' : ''} ${isCritical ? 'critical' : ''}">
                    <span class="minutes">${minutes.toString().padStart(2, '0')}</span>
                    <span class="colon">:</span>
                    <span class="seconds">${seconds.toString().padStart(2, '0')}</span>
                </div>
            </div>
            
            <div class="progress-bar">
                <div 
                    class="progress-fill ${isWarning ? 'warning' : ''} ${isCritical ? 'critical' : ''}"
                    style="width: ${percentage}%"
                ></div>
            </div>
            
            <p class="timer-message">
                ${isCritical 
                    ? 'Presque terminé ! Dépêchez-vous de répondre.' 
                    : isWarning 
                        ? 'Plus que 5 minutes ! Vérifiez vos réponses.' 
                        : `Vous avez ${Math.floor(quizConfig.totalTime / 60)} minutes pour compléter le quiz.`}
            </p>
            
            <div class="quiz-info">
                <p><strong>Questions :</strong> ${selectedQuestions.length} questions sélectionnées aléatoirement</p>
                <p><strong>Score requis :</strong> ${quizConfig.passingScore} bonnes réponses minimum</p>
            </div>
        `;
    }
    
    // Rendre la question actuelle
    function renderQuestion() {
        const currentQuestion = selectedQuestions[quizState.currentQuestion];
        const selectedOption = quizState.answers[quizState.currentQuestion];
        
        currentQuestionEl.textContent = quizState.currentQuestion + 1;
        
        // Déterminer le thème de la question
        const theme = getQuestionTheme(currentQuestion.id);
        
        questionContainer.innerHTML = `
            <div class="question-card">
                <div class="question-header">
                    <span class="question-number-display">
                        Question ${quizState.currentQuestion + 1} sur ${selectedQuestions.length}
                    </span>
                    <span class="question-category">${theme}</span>
                </div>
                
                <div class="question-text">
                    <h3>${currentQuestion.question}</h3>
                </div>
                
                <div class="options-container">
                    ${currentQuestion.options.map((option, index) => `
                        <div 
                            class="option ${selectedOption === index ? 'selected' : ''}"
                            onclick="selectAnswer(${index})"
                        >
                            <div class="option-letter">
                                ${String.fromCharCode(65 + index)}
                            </div>
                            <div class="option-text">${option}</div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="question-note">
                    <p>Cliquez sur une réponse pour la sélectionner. Vous pouvez revenir en arrière à tout moment.</p>
                </div>
            </div>
        `;
        
        updateAnsweredCount();
    }
    
    // Obtenir le thème d'une question basé sur son ID
    function getQuestionTheme(questionId) {
        if (questionId <= 20) return 'Principes et valeurs';
        else if (questionId <= 40) return 'Institutions politiques';
        else if (questionId <= 60) return 'Droits et devoirs';
        else if (questionId <= 80) return 'Histoire et culture';
        else return 'Vie en société';
    }
    
    // Rendre la grille des questions
    function renderQuestionsGrid() {
        questionsGrid.innerHTML = '';
        
        selectedQuestions.forEach((question, index) => {
            const button = document.createElement('button');
            button.className = `question-number ${index === quizState.currentQuestion ? 'active' : ''} ${quizState.answers[index] !== null ? 'answered' : ''}`;
            button.textContent = index + 1;
            button.title = `Question ${index + 1}: ${getQuestionTheme(question.id)}`;
            button.addEventListener('click', () => goToQuestion(index));
            questionsGrid.appendChild(button);
        });
    }
    
    // Mettre à jour le compteur de réponses
    function updateAnsweredCount() {
        const answeredCount = quizState.answers.filter(answer => answer !== null).length;
        answeredCountEl.textContent = `Répondues: ${answeredCount} / ${selectedQuestions.length}`;
        
        // Mettre à jour la barre de progression
        const progressPercentage = (answeredCount / selectedQuestions.length) * 100;
        document.documentElement.style.setProperty('--progress', `${progressPercentage}%`);
    }
    
    // Mettre à jour la navigation
    function updateNavigation() {
        prevButton.disabled = quizState.currentQuestion === 0;
        
        if (quizState.currentQuestion === selectedQuestions.length - 1) {
            nextButton.textContent = 'Terminer le quiz';
            nextButton.classList.add('finish-button');
        } else {
            nextButton.textContent = 'Question suivante →';
            nextButton.classList.remove('finish-button');
        }
    }
    
    // Sélectionner une réponse
    window.selectAnswer = function(answerIndex) {
        quizState.answers[quizState.currentQuestion] = answerIndex;
        saveState();
        renderQuestion();
        renderQuestionsGrid();
    };
    
    // Aller à une question spécifique
    function goToQuestion(index) {
        if (index >= 0 && index < selectedQuestions.length) {
            quizState.currentQuestion = index;
            saveState();
            renderQuestion();
            renderQuestionsGrid();
            updateNavigation();
        }
    }
    
    // Aller à la question précédente
    function goToPreviousQuestion() {
        if (quizState.currentQuestion > 0) {
            goToQuestion(quizState.currentQuestion - 1);
        }
    }
    
    // Aller à la question suivante
    function goToNextQuestion() {
        if (quizState.currentQuestion < selectedQuestions.length - 1) {
            goToQuestion(quizState.currentQuestion + 1);
        } else {
            submitQuiz();
        }
    }
    
    // Soumettre le quiz
    function submitQuiz() {
        // Arrêter le chronomètre
        if (quizState.timerInterval) {
            clearInterval(quizState.timerInterval);
        }
        
        // Calculer le score
        const score = quizState.answers.reduce((total, answer, index) => {
            return total + (answer === selectedQuestions[index].correctAnswer ? 1 : 0);
        }, 0);
        
        // Calculer le score par thème
        const themeScores = calculateThemeScores();
        
        // Enregistrer les résultats
        const results = {
            score,
            total: selectedQuestions.length,
            answers: [...quizState.answers],
            passed: score >= quizConfig.passingScore,
            date: new Date().toISOString(),
            timeSpent: quizConfig.totalTime - quizState.timeLeft,
            selectedQuestions: quizState.selectedQuestions,
            themeScores: themeScores,
            questions: selectedQuestions.map((q, index) => ({
                id: q.id,
                question: q.question,
                userAnswer: quizState.answers[index],
                correctAnswer: q.correctAnswer,
                explanation: q.explanation,
                theme: getQuestionTheme(q.id)
            }))
        };
        
        localStorage.setItem('quizResults', JSON.stringify(results));
        localStorage.removeItem('quizState');
        
        // Rediriger vers la page des résultats
        window.location.href = 'results.html';
    }
    
    // Calculer les scores par thème
    function calculateThemeScores() {
        const themes = {
            'Principes et valeurs': { correct: 0, total: 0 },
            'Institutions politiques': { correct: 0, total: 0 },
            'Droits et devoirs': { correct: 0, total: 0 },
            'Histoire et culture': { correct: 0, total: 0 },
            'Vie en société': { correct: 0, total: 0 }
        };
        
        selectedQuestions.forEach((question, index) => {
            const theme = getQuestionTheme(question.id);
            const isCorrect = quizState.answers[index] === question.correctAnswer;
            
            themes[theme].total++;
            if (isCorrect) {
                themes[theme].correct++;
            }
        });
        
        // Convertir en pourcentages
        const themePercentages = {};
        Object.keys(themes).forEach(theme => {
            if (themes[theme].total > 0) {
                themePercentages[theme] = Math.round((themes[theme].correct / themes[theme].total) * 100);
            } else {
                themePercentages[theme] = 0;
            }
        });
        
        return themePercentages;
    }
    
    // Recommencer le quiz
    function resetQuiz() {
        if (confirm("Voulez-vous vraiment recommencer le quiz ? Votre progression actuelle sera perdue et un nouveau jeu de questions sera sélectionné.")) {
            localStorage.removeItem('quizState');
            
            // Sélectionner de nouvelles questions aléatoires
            const newQuestions = selectRandomQuestions(quizConfig.totalQuestions);
            
            // Réinitialiser l'état
            quizState = {
                currentQuestion: 0,
                answers: Array(newQuestions.length).fill(null),
                timeLeft: quizConfig.totalTime,
                quizStarted: true,
                quizCompleted: false,
                startTime: Date.now(),
                timerInterval: null,
                selectedQuestions: newQuestions.map(q => q.id)
            };
            
            // Mettre à jour la sélection de questions
            selectedQuestions.length = 0;
            selectedQuestions.push(...newQuestions);
            
            saveState();
            
            // Redémarrer
            if (quizState.timerInterval) {
                clearInterval(quizState.timerInterval);
            }
            startTimer();
            renderQuestion();
            renderQuestionsGrid();
            updateNavigation();
            
            // Mettre à jour le nombre total de questions
            totalQuestionsEl.textContent = selectedQuestions.length;
        }
    }
    
    // Ajouter du CSS pour la barre de progression
    const style = document.createElement('style');
    style.textContent = `
        :root {
            --progress: 0%;
        }
        
        .progress-indicator {
            margin: 10px 0;
            height: 5px;
            background: #e0e0e0;
            border-radius: 3px;
            overflow: hidden;
        }
        
        .progress-fill-bar {
            height: 100%;
            background: var(--primary-color, #4CAF50);
            width: var(--progress);
            transition: width 0.3s ease;
        }
        
        .finish-button {
            background-color: #4CAF50 !important;
            font-weight: bold;
        }
        
        .quiz-info {
            margin-top: 15px;
            padding: 10px;
            background: #f8f9fa;
            border-radius: 5px;
            font-size: 0.9em;
        }
        
        .quiz-info p {
            margin: 5px 0;
        }
    `;
    document.head.appendChild(style);
    
    // Ajouter un indicateur de progression
    const progressIndicator = document.createElement('div');
    progressIndicator.className = 'progress-indicator';
    progressIndicator.innerHTML = '<div class="progress-fill-bar"></div>';
    answeredCountEl.parentNode.insertBefore(progressIndicator, answeredCountEl.nextSibling);
    
    // Initialiser le quiz
    initQuiz();
});