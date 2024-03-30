document.getElementById('submitQuiz').addEventListener('click', function() {
  var correctAnswers = 0;

  // Check Question 1
  var selectedAnswer1 = document.querySelector('input[name="question1"]:checked');
  if (selectedAnswer1 && selectedAnswer1.value === 'd') {
      correctAnswers++;
  }

  // Check Question 2
  var selectedAnswer2 = document.querySelector('input[name="question2"]:checked');
  if (selectedAnswer2 && selectedAnswer2.value === 'a') {
      correctAnswers++;
  }

  // Repeat for Questions 3 to 6
  // Check Question 3
  var selectedAnswer3 = document.querySelector('input[name="question3"]:checked');
  if (selectedAnswer3 && selectedAnswer3.value === 'a') {
      correctAnswers++;
  }

  // Check Question 4
  var selectedAnswer4 = document.querySelector('input[name="question4"]:checked');
  if (selectedAnswer4 && selectedAnswer4.value === 'c') {
      correctAnswers++;
  }

  // Check Question 5
  var selectedAnswer5 = document.querySelector('input[name="question5"]:checked');
  if (selectedAnswer5 && selectedAnswer5.value === 'c') {
      correctAnswers++;
  }

  // Display the result
  var resultContainer = document.getElementById('result');
  resultContainer.innerText = 'You got ' + correctAnswers + ' out of 5 questions correct!';
});
