const myQuestions = document.querySelector(".question");
const options = document.querySelector(".options").children;
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");
const myQuestionsNumbers = document.querySelector(".question-num-value");
const totalQuestion = document.querySelector(".total-question");
const answerTracker = document.querySelector(".answer-tracker")
let questBegin = 3;
let questionindex = 0;
let myArray = [];
let finalScore = 0;
const correctAnswer = document.querySelector(".correct-answers");
const allQuestions = document.querySelector(".total-questions");
const percent = document.querySelector(".percentage");


const questions = [
    {
        q: "How is c# pronounced?",
        options: ["Csharp", "CPlus Plus", "C", "None of the Above"],
        answer: 0
    },

    {
        q: "Which of the folowing is not related to Javascript?",
        options: ["Node", "React", "Angular", "None of the above"],
        answer: 3
    },

    {
        q: "How do you write an 'IF' statement in C#",
        options: ["if (open branket){Result}", "if (condition){Result}", "if (check){display}", "All of the Above"],
        answer: 1
    },

    {
        q: "What does a Loop do?",
        options: ["Nothing", "it keeps Iterating till a condition is met", "Display to the console", "It is a web server"],
        answer: 1
    },

    {
        q: "What is the value of y? var x = 3; var y = 4; y *= x;",
        options: ["1", "-1", "Undefined", "12"],
        answer: 3
    },

    // {
    //     q: "Which of the following is not a programming Language",
    //     options: ["Javascript", "C#", "React", "C"],
    //     answer: 2
    // },

    // {
    //     q: "In Asp.net what folder allows you serve static content by default?",
    //     options: ["Any Folder", "Root Folder", "wwwroot", "All of the Above"],
    //     answer: 2
    // },

    // {
    //     q: "In asp.net which tag helper assists in showing model binding errors?",
    //     options: ["asp-for", "asp-page", "asp-view", "asp-validation"],
    //     answer: 3
    // },

    // {
    //     q: "Which method in a Page Model class will respond to an HTTP GET result?",
    //     options: ["OnFetch", "OnGet", "OnPost", "OnRead"],
    //     answer: 1
    // }, 

    // {
    //     q: "Which method in a Page Model class will respond to an HTTP POST result?",
    //     options: ["OnFetch", "OnGet", "OnPost", "OnRead"],
    //     answer: 2
    // }
]

totalQuestion.innerHTML = questions.length;

function Loading(){

myQuestionsNumbers.innerHTML = questionindex + 1;

    myQuestions.innerHTML = questions[questBegin].q;
    option1.innerHTML = questions[questBegin].options[0];
    option2.innerHTML = questions[questBegin].options[1];
    option3.innerHTML = questions[questBegin].options[2];
    option4.innerHTML = questions[questBegin].options[3];
    console.log()
    questionindex++;
}

function check(element){
    if(element.id == questions[questBegin].answer){

        element.classList.add("correct");
        UpdateTracker("correct");
        //console.log(questionindex);
        //console.log(questions.length);
        finalScore++;
        
    }
    else{
        element.classList.add("wrong");
        UpdateTracker("wrong");
    }

    disableOptions();
}

function disableOptions(){
    for (let i = 0; i < options.length; i++){
        options[i].classList.add("disable");
        if (options[i].id == questions[questBegin].answer){
            options[i].classList.add("correct");
        }
    }
}

function enableOptions(){
    for (let i = 0; i < options.length; i++){
        options[i].classList.remove("disable", "correct", "wrong");
    }

}


function TrackerAnswer(){
    for(let i = 0; i < questions.length; i++){
        const div = document.createElement("div");
        answerTracker.appendChild(div)
    }
}

function validate(){
    if(!options[0].classList.contains("disable")){
        alert("Please Select one option");
    }
    else{
        RandamQuestion();
        enableOptions();
    }
}

function next(){
    validate();
}

function RandamQuestion(){
    let randamNumber = Math.floor(Math.random()*questions.length);
    
    let duplicate = 0;
    
    if(questions.length == questionindex){
        quizOver();
    }
    
    else{
        if(myArray.length > 0){
            for(let i = 0; i < myArray.length; i++){
                if(myArray[i] == randamNumber){
                    duplicate = 1;
                    break;
                }
            }
            if (duplicate == 1){
                RandamQuestion();
            }
            else{
                questBegin=randamNumber;
                Loading();
            }
        }
        if (myArray.length == 0){
            questBegin=randamNumber;
            Loading();
        }
        
        myArray.push(randamNumber);
        
        
    }    
}

function UpdateTracker(classNam){
    answerTracker.children[questionindex -1].classList.add(classNam)
}

function quizOver(){
    document.querySelector(".quiz-over").classList.add("show");
    correctAnswer.innerHTML = finalScore;
    allQuestions.innerHTML = questions.length;
    percent.innerHTML = (finalScore / questions.length) * 100 + "%";
    console.log("ok");
}

function tryAgain(){
    window.location.reload();
}

window.onload = function(){
    RandamQuestion();
    TrackerAnswer();
}
