$(document).ready function() {
//Global Variables//
var questions = [
    {
        question: "what is the worlds longest river",
        answers: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        answer: "Amazon"
    },
    {
        question: "Which Country has the highest population density",
        answers: ["Macau", "Monaco", "Singapore", "Hong Kong"],
        answer: "Macau"
    },
    {
        question: "what is the largest dessert on Earth",
        answers: ["Sahara", "Gobi", "Arabian", "Kalahari"],
        answer: "Sahara"
    },
    {
        question: "Which of these countries does <u>NOT</u> have a Monarch",
        answers: ["Portugal", "Denmark", "Belgium", "Spain"],
        answer: "Portugal"
    },
    {
        question: "What is the world's largest lake",
        answers: ["Caspian Sea", "Lake Superior", "Lake Victoria", "Lake Huron"],
        answer: "Caspian Sea"
    }
];

function addQuestions() {
    for(
        $(".questions")
    )
}
}

TA Evan [3:01 PM]
$('.question-box').append($("<input type='radio' value='" + questions[i].answers[k] + "' name=question-'" + i + "'>" + questions[i].answers[k] + "<br>" ));

var userGuess = $(this).attr('value');