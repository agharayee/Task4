const myQuestions = document.querySelector(".question");
displayAnswer = document.querySelector(".to-correct-score");
displayTotal = document.querySelector(".total-asked-question");
const comment = document.querySelector(".final-comment");
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
        q: "Which player has the fastest hat-trick in the premier league?",
        options: ["Sadio Mane", "Van Persie", "Robbie Fowler", "None of the Above"],
        answer: 0
    },

    {
        q: "Which player, with 653 games, has made the most premier League appearances?",
        options: ["Rooney", "Ryan Giggs", "Frank Lampard", "Gareth Barry"],
        answer: 3
    },

    {
        q: "Which Team won the first Epl Title?",
        options: ["Leeds city", "Manchester United", "Norwich City", "Newcastle Umited"],
        answer: 1
    },

    {
        q: "Who has the record for the fastest goal in the EPL?",
        options: ["Ledley King", "Shane Long", "Alan Shearer", "Christian Eriksen"],
        answer: 1
    },

    {
        q: "There are two world cup trophies, what are their names?",
        options: ["Jules Victory, Trophy", "Victory, Rimet", "Trophy, Victory", "Jules Rimet Trophy, Victory"],
        answer: 3
    },

    {
        q: "Two English players have won the golden boot in the world cup, who are they",
        options: ["Rooney, Harry Kane", "Harry Kane, Michael Owen", "Gary Lineker, Harry Kane", "Michael Owen, Gary Lineker"],
        answer: 2
    },

    {
        q: "Whos the player to win the UCL with three different club?",
        options: ["C.Ronaldo", "Paco Gento", "Clarence Seedorf", "alessandro Coustacurta"],
        answer: 2
    },

    {
        q: "Liverpool have won six UCL, Manchester United have won four, which is the next team on the ranks to have more UCL?",
        options: ["Leeds City", "Sheffield United", "Middlesbrough", "Nottingham Forest"],
        answer: 3
    },

    {
        q: "Whic player has the most UCL Medal?",
        options: ["C Ronaldo", "Francisco Gento", "Paolo Maldini", "Clarence Seedorf"],
        answer: 1
    }, 

    {
        q: "Which formal Tottenham manager has competed in the dakar rally?",
        options: ["David Pleat", "Harry Redknapp", "Andre Villas-Boas", "Tim Sherwood"],
        answer: 2
    }
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

        // element.classList.add("correct");
        // UpdateTracker("correct");
        displayTotal.innerHTML = questions.length;
        finalScore++; 
        displayAnswer.innerHTML = finalScore + " correct";
       
        
    }
    else{
        element.classList.add("wrong");
        // UpdateTracker("wrong");
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


// function TrackerAnswer(){
//     for(let i = 0; i < questions.length; i++){
//         const div = document.createElement("div");
//         answerTracker.appendChild(div)
//     }
// }

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

// function UpdateTracker(classNam){
//     answerTracker.children[questionindex -1].classList.add(classNam)
// }

function quizOver(){
    document.querySelector(".quiz-over").classList.add("show");
    correctAnswer.innerHTML = finalScore;
    allQuestions.innerHTML = questions.length;
    percent.innerHTML = (finalScore / questions.length) * 100 + "%";
    console.log("ok");

    if (finalScore >= 8  ){
        comment.innerHTML = "Ooin you are doing well";
    }
    else if(finalScore >= 5 ){
        comment.innerHTML = "Great Try but you can do better";
    }
    else if (finalScore <=4 ){
        comment.innerHTML = "Damn you did bad, but dont quit keep reading and get better";
    }
}

function tryAgain(){
    window.location.reload();
}

window.onload = function(){
    RandamQuestion();
    //TrackerAnswer();
}
