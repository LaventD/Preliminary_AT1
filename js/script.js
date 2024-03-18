<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/style.css">
  <title>Doki Doki Literature Club - Quiz</title>
</head>
<body>
  <header>
    <div class="container">
      <h1 class="center">Doki Doki Literature Club - Quiz</h1>
      <nav class="center">
        <ul>
          <li><a href="index.html">Home Page</a></li>
          <li><a href="characters.html">Characters</a></li>
          <li><a href="storyline.html">Storyline</a></li>
          <li><a href="endings.html">Endings</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <div class="container">
      <h2 class="center">DDLC Quiz</h2>
      <div id="quizContainer">
        <h3>Question 1:</h3>
        <p>What is the name of the protagonist in DDLC?</p>
        <ul>
          <li><input type="radio" name="question1" value="a"> Monika</li>
          <li><input type="radio" name="question1" value="b"> Sayori</li>
          <li><input type="radio" name="question1" value="c"> Yuri</li>
          <li><input type="radio" name="question1" value="d"> MC</li>
        </ul>
      </div>
      <button id="submitQuiz">Submit Quiz</button>
      <div id="result"></div>
    </div>
  </main>

  <footer>
    <!-- Footer content -->
  </footer>

  <script src="js/script.js"></script> <!-- Include the JavaScript file -->
  <script>
    // JavaScript code for quiz functionality
    document.getElementById('submitQuiz').addEventListener('click', function() {
      // Get the selected answer
      var selectedAnswer = document.querySelector('input[name="question1"]:checked');

      // Check if an answer is selected
      if (!selectedAnswer) {
        alert('Please select an answer!');
        return;
      }

      // Check if the selected answer is correct
      if (selectedAnswer.value === 'd') {
        document.getElementById('result').innerText = 'Correct!';
      } else {
        document.getElementById('result').innerText = 'Incorrect!';
      }
    });
  </script>
</body>
</html>

@font-face {
  font-family: 'KGSweetNSassy'; /* Name of the font */
  src: url('fonts/KGSweetNSassy.ttf') format('truetype'); /* Path to the font file */
}

body {
  font-family: 'KGSweetNSassy', sans-serif; /* Apply the custom font to the body */
}