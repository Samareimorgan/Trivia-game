$(document).ready(function () {
  /* Global Variables*/

  var triviaGame = [
      {
        question: "Where are the Rotary International Headquarters located?",
        answers: ["El Segundo, CA", "London, England", "Sydney, Australia", "Evanston, IL"],
        correctAnswer: "Evanston, IL",
      },
      {
        question: "What city is the Rotary International Convention being held at in June 2019?",
        answers: ["Beijing", "Hamburg", "Honolulu", "Atlanta"],
        correctAnswer: "Hamburg",
      },
      {
        question: "What year was the Rotary Club of Centennial established?",
        answers: ["2001", "2003", "1999", "2005"],
        correctAnswer: "2001",
      },
      {
        question: "What district is the Rotary Club of Centennial in?",
        answers: ["5480", "5510", "5450", "5440"],
        correctAnswer: "5450",
      }
    ];

  var questionTime = 30;
  var intervalTime;
  var score = 0;

  
  //Functions.....
  //.... Create a Function for rendering questions and answers
  function renderQuestions() {
    $('#question').html("");
    for (var i=0; i<triviaGame.length; i++) {
        $('#question').append($("<h3>" + triviaGame[i].question + "</h3>"));
        for (var j=0; j<triviaGame[i].answers.length; j++) {
            $('#question').append($("<input type='radio' value='" + triviaGame[i].answers[j] + "' name='question-" + i + "'>" + triviaGame[i].answers[j] + "<br>" ));
        }
        $('#question').append('<hr>');
    }
  };
  //..... Create a Function to reset game 
  function newGame() {
    run();
    $("#question").empty();
    renderQuestions();
    score = 0;
    $("#answerComment").html("");
  };
  // Create function to run timer
  function run() {
    questionTime = 30;
    clearInterval(intervalTime);
    intervalTime = setInterval(decrement, 1000);
  };
  // Create function that decrements the timer
  function decrement() {
    questionTime--;
    $("#timer").html("<h3>" + questionTime + "<h3>");
    console.log(questionTime)
      if (questionTime === 0) {
        stop();
        $("#answerComment").html("Time Over");
      }
  };  
  // Create function that stops the timer.
  function stop() {
    clearInterval(intervalTime);
    submitAnswers();

  }
  // Create function to submit game answers and compare
  function submitAnswers() {
    for (var i=0; i<triviaGame.length; i++)  {
        $.each($("input[name='question-" + i + "']:checked"), function() {
            console.log($(this).attr('value'));
            var userGuess = $(this).attr('value');
            if (userGuess === triviaGame[i].correctAnswer) {
                console.log('correct');
                score++;
            }
            
        });  
    }
    $("#yourScore").html("<h3>" + "Your Score: " + score + "</h3>");
  } 
  
  // Process of Game


  //Begin Game when "Start is clicked"//
  $("#submitAnswers").hide();
  $("#newGame").on("click",function() {
    newGame();
    $("#submitAnswers").show();
  });

  $("#submitAnswers").on("click", function() {
    submitAnswers();
    stop();
  });


  })
