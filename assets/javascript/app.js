$(document).ready(function(){
/* Global Variables*/
var questionTime = 30;
var intervalTime;
var winAudio = new audio("<href='...'>");
var stopAudio = new audio("<href='...'>");
var score= 0;


//Objects//
var triviaGame = {
    /*questions: {
        rotaryQ1: {
            Q1:"Where are the Rotary International Headquarters located?",
            answer1: ["El Segundo, CA", "London, England", "Sydney, Australia", "Evanston, IL"],
            correctAnswer: answers1[3],
            category: "Rotary International"
        },

        rotaryQ2: {
            Q2: "What city is the Rotary International Convention being held at in June 2019?",
            answers2: ["Beijing","Hamburg","Honolulu", "Atlanta"],
            correctAnswer: answers2[1],
            category:  "Rotary International"
        },
        */


       /* rotaryQ3: {
            Q3: "Where are the Rotary International Headquarters located?",
            answer3: "El Segundo, CA", 
            correctAnswer: 
            category: "Rotary International"

        rotaryQ4: {
            Q4: "Where are the Rotary International Headquarters located?",
            answers4: ["El Segundo, CA", 
            "London, England",
            incorrectAnswer3: "Sydney, Australia",
            correctAnswer: "Evanston, IL",
            category: "Rotary International" 
}

rotaryQ5 = {
    question: "Where are the Rotary International Headquarters located?",
    incorrectAnswer1: "El Segundo, CA", 
    incorrectAnswer2: "London, England",
    incorrectAnswer3: "Sydney, Australia",
    correctAnswer: "Evanston, IL",
    category: "Rotary International"
},
*/  
function rotaryLogo() {
$("#rotaryLogo").append("<img src='/assets/images/LockupRI-BTI.png'>");
}
rotaryLogo();
   /* $("#button").on("click", function() {
    if(this.correctAnswer); 
        wins++;
    });




 /* 
  "What city is the Rotary International Convention being held at in June 2019?",
  "What 2 topics are listed as areas of focus?",
  "What"


  
$.each(  input - radio  if thisval ==== .correctAnswer)


//On Click Events//
$("#stop").on("click", stop);
$("#start").on("click", start);

//functions//
function run() {
  clearInterval(intervalTime);
  intervalTime = setInterval(decrement,1000);
}

function decrement() {
  questionTime--;
  $("#").html("<h2>" + questionTime + "</h2>");
  
  if(questionTime === 0);
    stop();
    stopAudio.play();
}

/* Questions and Answers
Create Main Categories of Questions: Rotary International, Centennial Rotary
Create matching Arrays of Answers to go with the categorie for example  rICategory rIAnswers  
Create Randomized Questions Math.floor(Math.Random) and obtain the Index # from that 
From there, we will need if statments for each Index#  
  If (rIQuestions[0] === true);
      function placeAnswers() {
        
      }


        “Together, we see a world where people unite and take action to create lasting change — across the globe, in our communities, and in ourselves.” */
    }}})