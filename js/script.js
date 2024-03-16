// Sample quiz questions and answers
const questions = [
    {
      question: "Who is the protagonist of DDLC?",
      options: ["Monika", "Sayori", "Yuri", "MC"],
      correctAnswer: "MC"
    },
    // Add more questions here...
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  document.getElementById("startQuiz").addEventListener("click", startQuiz);
  
  function startQuiz() {
    currentQuestion = 0;
    score = 0;
    displayQuestion();
    document.getElementById("startQuiz").style.display = "none";
    document.getElementById("quizContainer").style.display = "block";
  }
  
  function displayQuestion() {
    const quizContainer = document.getElementById("quizContainer");
    const question = questions[currentQuestion];
  
    let optionsHTML = "";
    for (let i = 0; i < question.options.length; i++) {
      optionsHTML += `<input type="radio" name="answer" value="${question.options[i]}">${question.options[i]}<br>`;
    }
  
    quizContainer.innerHTML = `<h3>${question.question}</h3>${optionsHTML}`;
  }
  
  document.getElementById("submitQuiz").addEventListener("click", submitQuiz);
  
  function submitQuiz() {
    const selectedOption = document.querySelector("input[name='answer']:checked");
  
    if (selectedOption) {
      if (selectedOption.value === questions[currentQuestion].correctAnswer) {
        score++;
      }
  
      currentQuestion++;
  
      if (currentQuestion < questions.length) {
        displayQuestion();
      } else {
        showResult();
      }
    } else {
      alert("Please select an option before submitting.");
    }
  }
  
  function showResult() {
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `<p>Your score: ${score} out of ${questions.length}</p>`;
  }
  