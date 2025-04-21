document.addEventListener('DOMContentLoaded', () => {
    // Extraer las preguntas del PDF (Total 35 preguntas)
    const quizData = [
        // --- Primeras 10 Preguntas ---
        { // Pregunta 1
            question: "¿Según Nietzsche, qué es esencial para ser un filósofo?",
            optionA: "Tener un sistema de pensamiento lógico y coherente.",
            optionB: "Experimentar y percibir constantemente cosas extraordinarias.",
            correctAnswer: "b",
            justification: "Nietzsche describe al filósofo como alguien que 'experimenta, ve, oye, sospecha, espera y sueña constantemente cosas extraordinarias'.",
            tip: "Recuerda que para Nietzsche, la filosofía es una vivencia intensa más que solo un ejercicio intelectual."
        },
        { // Pregunta 2
            question: "¿Cómo considera Nietzsche los sistemas filosóficos?",
            optionA: "Como la culminación del conocimiento humano y la verdad absoluta.",
            optionB: "Como métodos pedagógicos del espíritu para afrontar circunstancias.",
            correctAnswer: "b",
            justification: "Nietzsche ve los sistemas filosóficos como 'métodos pedagógicos del espíritu' e incluso como formas de 'acomodar nuestros sentimientos a circunstancias adversas'.",
            tip: "Nietzsche desconfía de los sistemas cerrados y valora más el proceso de filosofar que el resultado final."
        },
        { // Pregunta 3
            question: "En Así habló Zaratustra, ¿contra qué concepto kantiano polemiza Nietzsche?",
            optionA: "El imperativo categórico.",
            optionB: "La \"cosa en sí\".",
            correctAnswer: "b",
            justification: "En Así habló Zaratustra, Nietzsche polemiza contra el concepto kantiano de la \"cosa en sí\".",
            tip: "Investiga la crítica de Nietzsche a la metafísica tradicional y su énfasis en la perspectiva."
        },
        { // Pregunta 4
            question: "¿Qué identifica Nietzsche con la \"voluntad de verdad\" de los filósofos?",
            optionA: "Un deseo puro de conocimiento objetivo.",
            optionB: "Una \"voluntad de poder\".",
            correctAnswer: "b",
            justification: "Nietzsche identifica la \"voluntad de verdad\" con una \"voluntad de poder\".",
            tip: "Profundiza en el concepto nietzscheano de \"voluntad de poder\" y cómo se manifiesta en el conocimiento."
        },
        { // Pregunta 5
            question: "Para Nietzsche, ¿cómo es el mundo del bien y del mal?",
            optionA: "Una realidad objetiva y trascendente.",
            optionB: "Aparente y perspectivista.",
            correctAnswer: "b",
            justification: "El \"perspectivismo\" de Nietzsche sostiene que el mundo del bien y del mal es aparente y perspectivista.",
            tip: "Explora el perspectivismo nietzscheano y su crítica a la moral tradicional."
        },
        { // Pregunta 6
            question: "¿Según Nietzsche, qué representan las costumbres?",
            optionA: "Verdades universales y eternas sobre la conducta humana.",
            optionB: "Las experiencias de hombres anteriores sobre lo útil o nocivo.",
            correctAnswer: "b",
            justification: "Las costumbres representan las experiencias de hombres anteriores sobre lo útil o nocivo.",
            tip: "Considera la visión nietzscheana de la moral como un producto histórico y social."
        },
        { // Pregunta 7
            question: "En Cómo se filosofa a martillazos, ¿qué acto se menciona como un \"deleite\"?",
            optionA: "La creación de nuevos sistemas filosóficos.",
            optionB: "El tantear ídolos con el martillo para oir su sonido hueco.",
            correctAnswer: "b",
            justification: "Se describe el acto de 'tantear ídolos... Interrogar con el martillo y oír acaso como respuesta ese famoso sonido hueco' como un deleite.",
            tip: "Comprende la metáfora del martillo en Nietzsche como herramienta crítica."
        },
        { // Pregunta 8
            question: "Según Nietzsche en Más allá del bien y del mal, ¿qué se requiere para que una mujer sea considerada \"poseída\" por un hombre más allá de la entrega?",
            optionA: "Que le prometa fidelidad eterna.",
            optionB: "Que deje por él lo que tiene o le gustaría tener.",
            correctAnswer: "b",
            justification: "Para un tipo de hombre exigente, considera a la mujer \"poseída\" cuando ella 'deja por él lo que tiene o le gustaría tener'.",
            tip: "Analiza la crítica nietzscheana a las relaciones de poder y la posesión."
        },
        { // Pregunta 9
            question: "En El Anticristo, ¿cómo describe Nietzsche su relación con los Evangelios?",
            optionA: "Los considera fuentes de profunda sabiduría moral.",
            optionB: "Los lee con dificultad.",
            correctAnswer: "b",
            justification: "Nietzsche afirma: 'Confieso que pocos libros leo con tanta dificultad como los Evangelios'.",
            tip: "Investiga la crítica radical de Nietzsche al cristianismo."
        },
        { // Pregunta 10
            question: "¿Según Nietzsche, qué es la condición de la vida?",
            optionA: "La búsqueda constante de la verdad objetiva.",
            optionB: "La admisión de la no-verdad.",
            correctAnswer: "b",
            justification: "Nietzsche establece que 'admitir que la no-verdad es condición de la vida' es fundamental en su filosofía.",
            tip: "Reflexiona sobre la idea nietzscheana de que ciertas ficciones pueden ser necesarias para la vida."
        },
        // --- Siguientes 20 Preguntas (Set 2 del PDF) ---
        { // Pregunta 11 (Set 2, Q1)
            question: "Según Zaratustra, ¿qué es aquello que se ríe de todas las tragedias?",
            optionA: "La compasión por el sufrimiento humano.",
            optionB: "Quien asciende a las montañas más altas.",
            correctAnswer: "b",
            justification: "La fuente indica: 'Quien asciende a las montañas más altas se ríe de todas las tragedias, de las del teatro y de las de la vida'.",
            tip: "Considera la perspectiva de Nietzsche sobre la superación y cómo la elevación puede cambiar la visión sobre las dificultades."
        },
        { // Pregunta 12 (Set 2, Q2)
            question: "¿Qué conjura Zaratustra a sus oyentes a no arrojar de su alma?",
            optionA: "Su sentimiento de culpa y arrepentimiento.",
            optionB: "El héroe.",
            correctAnswer: "b",
            justification: "Zaratustra dice: 'Mas por mi amor y mi esperanza te conjuro: ¡no arrojes al héroe que hay en tu alma! ¡Conserva santa tu más alta esperanza!'.",
            tip: "Reflexiona sobre la importancia del ideal heroico y la aspiración a la grandeza en la filosofía de Nietzsche."
        },
        { // Pregunta 13 (Set 2, Q3)
            question: "¿Hacia dónde aconseja Zaratustra huir de las \"moscas del mercado\"?",
            optionA: "Hacia las grandes ciudades y el bullicio.",
            optionB: "Hacia la soledad.",
            correctAnswer: "b",
            justification: "Zaratustra exclama: '¡Huye, amigo mío, a tu soledad!' y describe el mercado como el lugar del ruido y las 'moscas venenosas'.",
            tip: "Entiende la valoración nietzscheana de la soledad como espacio para la reflexión y la creación de nuevos valores."
        },
        { // Pregunta 14 (Set 2, Q4)
            question: "¿Qué deben evitar hacer los amantes de la verdad, según Zaratustra, respecto a los incondicionales y apremiantes?",
            optionA: "Deben imitarlos en su fervor.",
            optionB: "No deben tener celos de ellos.",
            correctAnswer: "b",
            justification: "Zaratustra aconseja: '¡No tengas celos de esos incondicionales y apremiantes, amante de la verdad!'.",
            tip: "Considera la crítica nietzscheana a las verdades absolutas y la importancia de la perspectiva individual."
        },
        { // Pregunta 15 (Set 2, Q5)
            question: "¿Qué es lo que siempre ha vivido apartado del mercado y de la fama, según Zaratustra?",
            optionA: "La filosofía popular y las opiniones comunes.",
            optionB: "Los inventores de nuevos valores.",
            correctAnswer: "b",
            justification: "La fuente afirma: 'Todo lo grande se aparta del mercado y de la fama: apartados de ellos han vivido desde siempre los inventores de nuevos valores'.",
            tip: "Reflexiona sobre la idea de Nietzsche de que los valores trascendentes no surgen del consenso popular."
        },
        { // Pregunta 16 (Set 2, Q6)
            question: "¿Qué pequeña verdad entrega una viejecilla a Zaratustra?",
            optionA: "Que la humildad es la mayor virtud.",
            optionB: "\"¿Vas con mujeres? ¡No olvides el látigo!\"",
            correctAnswer: "b",
            justification: "La viejecilla dice a Zaratustra: \"¿Vas con mujeres? ¡No olvides el látigo!\".",
            tip: "Interpreta esta controvertida frase en el contexto de las ideas de Nietzsche sobre el poder y las relaciones."
        },
        { // Pregunta 17 (Set 2, Q7)
            question: "Según Zaratustra, ¿qué constituye el nuevo honor?",
            optionA: "La tradición familiar y el linaje.",
            optionB: "La voluntad y el pie que quieren ir más allá de uno mismo.",
            correctAnswer: "b",
            justification: "Zaratustra declara: 'Constituya de ahora en adelante vuestro honor no el lugar de dónde venís, sino el lugar adonde vais! Vuestra voluntad y vuestro pie, que quieren ir más allá de vosotros mismos, ¡eso constituya vuestro nuevo honor!'.",
            tip: "Comprende la filosofía nietzscheana del autotrascendimiento y la creación del propio valor."
        },
        { // Pregunta 18 (Set 2, Q8)
            question: "¿De qué se alegra Zaratustra al recibir un bastón de sus discípulos?",
            optionA: "De la muestra de lealtad y afecto.",
            optionB: "De la serpiente enroscada en torno al sol en su puño de oro.",
            correctAnswer: "b",
            justification: "La fuente menciona: 'Y sus discípulos le entregaron como despedida un bastón en cuyo puño de oro se enroscaba en torno al sol una serpiente. Zaratustra se alegró del bastón'.",
            tip: "Investiga el simbolismo de la serpiente y el sol en la obra de Nietzsche."
        },
        { // Pregunta 19 (Set 2, Q9)
            question: "¿Qué reconoce Zaratustra en el signo y la advertencia de su sueño?",
            optionA: "La necesidad de descansar y recuperar fuerzas.",
            optionB: "Que su doctrina está en peligro y la cizaña quiere llamarse trigo.",
            correctAnswer: "b",
            justification: "Zaratustra afirma: 'En verdad, demasiado bien comprendo el signo y la advertencia del sueño: ¡mi doctrina está en peligro, la cizaña quiere llamarse trigo!'.",
            tip: "Reflexiona sobre la preocupación de Nietzsche por la posible tergiversación de sus ideas."
        },
        { // Pregunta 20 (Set 2, Q10)
            question: "¿Cómo describe Zaratustra su actitud hacia sus enemigos?",
            optionA: "Los desprecia y desea su destrucción.",
            optionB: "Los ama como parte de su bienaventuranza.",
            correctAnswer: "b",
            justification: "Zaratustra declara: '¡Y mis enemigos entre ellos! ¡Cómo amo ahora a todo aquel a quien me sea lícito hablarle! También mis enemigos forman parte de mi bienaventuranza'.",
            tip: "Considera la perspectiva nietzscheana sobre la superación de la negatividad."
        },
        { // Pregunta 21 (Set 2, Q11)
            question: "¿Qué viento del norte dice ser Zaratustra para los \"higos maduros\"?",
            optionA: "Un viento suave que los acaricia.",
            optionB: "Un viento que hace que caigan y se abra su roja piel.",
            correctAnswer: "b",
            justification: "Zaratustra dice: 'Un viento del norte soy yo para higos maduros. Así, cual higos, caen estas enseñanzas hasta vosotros, amigos míos: ¡bebed su jugo y su dulce almendra!'.",
            tip: "Interpreta esta metáfora sobre la forma en que Nietzsche presenta sus enseñanzas."
        },
        { // Pregunta 22 (Set 2, Q12)
            question: "Según Zaratustra, ¿qué ocurre cuando el espíritu se ahoga en la compasión?",
            optionA: "Se vuelve más puro y elevado moralmente.",
            optionB: "Siempre nada en la superficie una gran tontería.",
            correctAnswer: "b",
            justification: "La fuente afirma: 'En su compasión se había ahogado su espíritu, y cuando se hinchaban y desbordaban de compasión, siempre nadaba en la superficie una gran tontería'.",
            tip: "Entiende la crítica nietzscheana a la compasión como un sentimiento que puede debilitar el intelecto."
        },
        { // Pregunta 23 (Set 2, Q13)
            question: "¿Qué es lo que más les gusta aullar a las gentes, según Zaratustra?",
            optionA: "\"Justicia\" y \"equidad\".",
            optionB: "\"Libertad\".",
            correctAnswer: "b",
            justification: "Zaratustra dice: '<<Libertad>> es lo que más os gusta aullar'.",
            tip: "Considera la crítica nietzscheana a los conceptos abstractos usados sin comprensión profunda."
        },
        { // Pregunta 24 (Set 2, Q14)
            question: "¿Qué deben hacer primero aquellos que pueden querer, según Zaratustra?",
            optionA: "Amar a sus prójimos como a sí mismos.",
            optionB: "Hacer siempre lo que quieran.",
            correctAnswer: "b",
            justification: "Zaratustra exhorta: '<<¡Haced siempre lo que queráis, pero sed primero de aquellos que pueden querer!»'.",
            tip: "Reflexiona sobre la importancia de la autarquía y la capacidad de autodeterminación en Nietzsche."
        },
        { // Pregunta 25 (Set 2, Q15)
            question: "¿Cómo describe Zaratustra su papel entre el pueblo?",
            optionA: "Como un líder y guía moral.",
            optionB: "Como su propio precursor y canto del gallo a través de oscuras callejuelas.",
            correctAnswer: "b",
            justification: "Zaratustra se describe a sí mismo como: 'Mi propio precursor soy yo en medio de este pueblo, mi propio canto del gallo a través de oscuras callejuelas'.",
            tip: "Comprende la idea de Nietzsche de que sus ideas son precursoras y a menudo incomprendidas."
        },
         { // Pregunta 26 (Set 2, Q16)
            question: "¿Qué metáfora utiliza Zaratustra para describir el ablandamiento de la soledad?",
            optionA: "Un río que se desborda.",
            optionB: "Una tumba que se resquebraja y no puede seguir conteniendo a sus muertos.",
            correctAnswer: "b",
            justification: "La fuente dice: 'Ahora ocurre que la propia soledad se ablanda y rompe como una tumba que se resquebraja y no puede seguir conteniendo a sus muertos'.",
            tip: "Reflexiona sobre la naturaleza transformadora de la soledad y cómo puede llevar a la necesidad de conexión."
        },
        { // Pregunta 27 (Set 2, Q17)
            question: "¿Qué encuentra Zaratustra que sana el corazón y enseña a tener esperanzas?",
            optionA: "Los grandes ideales y las verdades trascendentes.",
            optionB: "Las pequeñas cosas buenas y perfectas.",
            correctAnswer: "b",
            justification: "Zaratustra aconseja: '¡Colocad pequeñas cosas buenas y perfectas a vuestro alrededor, hombres superiores! Su áurea madurez sana el corazón. Lo perfecto enseña a tener esperanzas'.",
            tip: "Considera la importancia de la afirmación de la vida en los detalles y la excelencia en lo pequeño."
        },
        { // Pregunta 28 (Set 2, Q18)
            question: "¿Qué es mejor, según Zaratustra, estar loco de felicidad o de infelicidad?",
            optionA: "Estar cuerdo y equilibrado.",
            optionB: "Estar loco de felicidad.",
            correctAnswer: "b",
            justification: "Zaratustra afirma: 'Pero es mejor estar loco de felicidad que estarlo de infelicidad, es mejor bailar torpemente que caminar cojeando'.",
            tip: "Entiende la valoración nietzscheana de la afirmación de la vida y la elección activa de la alegría."
        },
        { // Pregunta 29 (Set 2, Q19)
            question: "¿Qué anhela Zaratustra que ascienda como el gran mediodía?",
            optionA: "Su descanso y contemplación.",
            optionB: "Su obra.",
            correctAnswer: "b",
            justification: "Zaratustra exclama: '¡Yo aspiro a mi obra! ¡Bien! El león ha llegado, mis hijos están cerca, Zaratustra está ya maduro, mi hora ha llegado: - Ésta es mi mañana, mi día comienza: ¡asciende, pues, asciende tú, gran mediodía!'.",
            tip: "Reflexiona sobre la centralidad de la creación y la actividad en la filosofía de Nietzsche."
        },
        { // Pregunta 30 (Set 2, Q20)
            question: "Según Cómo se filosofa a martillazos, ¿qué protege hasta contra el catarro?",
            optionA: "Una buena salud física.",
            optionB: "El contento.",
            correctAnswer: "b",
            justification: "La fuente afirma: 'El contento protege hasta contra el catarro. ¿Se ha acatarrado jamás mujer que se considerase bien vestida?'.",
            tip: "Considera la importancia del estado anímico y la autoafirmación en la visión nietzscheana del bienestar."
        },
         // --- Siguientes 5 Preguntas (Inicio Set 3 del PDF) ---
        { // Pregunta 31 (Set 3, Q1)
            question: "¿Qué edad tenía Zaratustra cuando abandonó su patria y marchó a las montañas?",
            optionA: "Cuarenta años.",
            optionB: "Treinta años.",
            correctAnswer: "b",
            justification: "La fuente indica: 'Cuando Zaratustra tenía treinta años abandonó su patria y el lago de su patria y marchó a las montañas'.",
            tip: "Considera el simbolismo del número treinta y la etapa de búsqueda de soledad para la preparación personal."
        },
        { // Pregunta 32 (Set 3, Q2)
            question: "¿Cuánto tiempo permaneció Zaratustra en las montañas antes de que su corazón se transformara?",
            optionA: "Cuarenta días.",
            optionB: "Diez años.",
            correctAnswer: "b",
            justification: "La fuente señala: 'Allí gozó de su espíritu y de su soledad y durante diez años no se cansó de hacerlo. Pero al fin su corazón se transformó'.",
            tip: "Reflexiona sobre la importancia del retiro prolongado para la transformación personal en Nietzsche."
        },
        { // Pregunta 33 (Set 3, Q3)
            question: "¿Qué pregunta le hace el anciano a Zaratustra al encontrarlo bajar de la montaña?",
            optionA: "¿Has encontrado la sabiduría en la cima?",
            optionB: "¿Quieres hoy llevar tu fuego a los valles? ¿No temes los castigos que se imponen al incendiario?",
            correctAnswer: "b",
            justification: "El anciano le dice a Zaratustra: '¿quieres hoy llevar tu fuego a los valles? ¿No temes los castigos que se imponen al incendiario?'.",
            tip: "Entiende la metáfora del fuego como representación de las ideas disruptivas de Zaratustra."
        },
        { // Pregunta 34 (Set 3, Q4)
            question: "¿Qué busca el creador para su camino, según Zaratustra?",
            optionA: "Rebaños y creyentes.",
            optionB: "Compañeros en la creación, que escriban nuevos valores en tablas nuevas.",
            correctAnswer: "b",
            justification: "Zaratustra afirma que el creador busca 'Compañeros para su camino... Compañeros en la creación busca el creador, que escriban nuevos valores en tablas nuevas'.",
            tip: "Considera la importancia de la colaboración y la creación activa de valores en Nietzsche."
        },
        { // Pregunta 35 (Set 3, Q5)
            question: "¿Cómo llama Zaratustra a los compañeros que buscan los creadores y que saben afilar sus hoces?",
            optionA: "Ayudantes y benefactores.",
            optionB: "Aniquiladores y despreciadores del bien y del mal.",
            correctAnswer: "b",
            justification: "Zaratustra declara: 'Aniquiladores se los llamará, y despreciadores del bien y del mal. Pero son los cosechadores y los que celebran fiestas'.",
            tip: "Reflexiona sobre la idea de que la creación de nuevos valores requiere cuestionar la moral tradicional."
        }
    ];

    // Elementos del DOM (igual que antes)
    const questionTextElement = document.getElementById('question-text');
    const optionAButton = document.getElementById('option-a');
    const optionBButton = document.getElementById('option-b');
    const feedbackTextElement = document.getElementById('feedback-text');
    const attemptsLeftElement = document.getElementById('attempts-left');
    const currentQuestionElement = document.getElementById('current-question');
    const totalQuestionsElement = document.getElementById('total-questions');
    const progressBarElement = document.getElementById('progress-bar');
    const resultsArea = document.getElementById('results-area');
    const quizPartsToToggle = document.querySelectorAll('.quiz-container header, #question-area, #options-area, #feedback-area'); // NodeList de elementos a ocultar/mostrar
    const restartBtn = document.getElementById('restart-btn');


    // Estado del Quiz (igual que antes)
    let currentQuestionIndex = 0;
    let attemptsLeft = 2;
    const totalAttemptsPerQuestion = 2;

    function loadQuestion() {
        if (currentQuestionIndex >= quizData.length) {
            showResults();
            return;
        }

        const currentQuestion = quizData[currentQuestionIndex];
        attemptsLeft = totalAttemptsPerQuestion;

        // Resetear estilos y feedback
        feedbackTextElement.textContent = '';
        feedbackTextElement.className = 'feedback-text'; // Clase base
        attemptsLeftElement.textContent = `Intentos restantes: ${attemptsLeft}`;
        optionAButton.disabled = false;
        optionBButton.disabled = false;
        optionAButton.className = 'option-btn'; // Reset classes
        optionBButton.className = 'option-btn'; // Reset classes

        // Cargar datos de la pregunta
        questionTextElement.textContent = currentQuestion.question;
        optionAButton.textContent = `a) ${currentQuestion.optionA}`;
        optionBButton.textContent = `b) ${currentQuestion.optionB}`;
        currentQuestionElement.textContent = currentQuestionIndex + 1;
        totalQuestionsElement.textContent = quizData.length; // Se actualiza automáticamente con el tamaño del array

        // Actualizar barra de progreso
        const progressPercentage = ((currentQuestionIndex) / quizData.length) * 100;
        progressBarElement.style.width = `${progressPercentage}%`;

        // Hacer visible el área del quiz y ocultar resultados si se está reiniciando
        quizPartsToToggle.forEach(part => part.style.display = ''); // Muestra todas las partes del quiz
        resultsArea.style.display = 'none'; // Oculta el área de resultados
    }

    function handleAnswer(selectedOption) {
        const currentQuestion = quizData[currentQuestionIndex];
        const correct = selectedOption === currentQuestion.correctAnswer;

        // Deshabilitar botones temporalmente
        optionAButton.disabled = true;
        optionBButton.disabled = true;

        if (correct) {
            // Respuesta Correcta
            document.getElementById(`option-${selectedOption}`).classList.add('correct');
            feedbackTextElement.textContent = `¡Correcto! Justificación: ${currentQuestion.justification}`;
            feedbackTextElement.className = 'feedback-text correct-feedback';
            attemptsLeftElement.textContent = `Intentos restantes: ${attemptsLeft}`;

            // Esperar un poco antes de pasar a la siguiente
            setTimeout(() => {
                currentQuestionIndex++;
                loadQuestion();
            }, 2500); // Tiempo para leer la justificación

        } else {
            // Respuesta Incorrecta
            attemptsLeft--;
            attemptsLeftElement.textContent = `Intentos restantes: ${attemptsLeft}`;
            document.getElementById(`option-${selectedOption}`).classList.add('incorrect');
            feedbackTextElement.textContent = `Incorrecto. Tip: ${currentQuestion.tip}`;
            feedbackTextElement.className = 'feedback-text incorrect-feedback';

            if (attemptsLeft > 0) {
                // Todavía quedan intentos, habilitar botones de nuevo después de un tiempo
                 setTimeout(() => {
                    optionAButton.disabled = false;
                    optionBButton.disabled = false;
                    document.getElementById(`option-${selectedOption}`).classList.remove('incorrect');
                    feedbackTextElement.textContent = 'Inténtalo de nuevo.';
                    feedbackTextElement.className = 'feedback-text';
                }, 2000); // Tiempo para leer el tip
            } else {
                // Se acabaron los intentos
                feedbackTextElement.textContent += ` No quedan más intentos. La respuesta correcta era la ${currentQuestion.correctAnswer.toUpperCase()}. Justificación: ${currentQuestion.justification}`;
                 document.getElementById(`option-${currentQuestion.correctAnswer}`).classList.add('correct');
                 // Bloqueado en esta pregunta (o descomentar para avanzar)
                 // setTimeout(() => {
                 //     currentQuestionIndex++;
                 //     loadQuestion();
                 // }, 4500); // Más tiempo para leer todo
            }
        }
    }

     function showResults() {
        // Ocultar áreas del quiz
        quizPartsToToggle.forEach(part => part.style.display = 'none'); // Oculta todas las partes del quiz
        // Mostrar área de resultados
        resultsArea.style.display = 'block';
        // Asegurar que la barra de progreso esté al 100%
        progressBarElement.style.width = `100%`;
    }

    function restartQuiz() {
        currentQuestionIndex = 0;
        loadQuestion(); // Llama a loadQuestion que ahora también maneja la visibilidad
    }

    // Event Listeners (igual que antes)
    optionAButton.addEventListener('click', () => handleAnswer('a'));
    optionBButton.addEventListener('click', () => handleAnswer('b'));
    restartBtn.addEventListener('click', restartQuiz);

    // Iniciar el Quiz (igual que antes)
    loadQuestion();
});