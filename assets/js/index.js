let questions = [
    {
    question:"What does HTML stand for?",

    answers:["Hyperlinks and Text Markup Language", 
    "Home Tool Markup Language", 
    "Hyper Text Markup Language"
    ], correctAnswer:2
    },
    { 
    question:" Choose the correct HTML element for the largest heading.",
    answers:[
        "<h6>",
        "<h1>",
        "<heading>"
    ], correctAnswer:1
    },
    
    {
    question:"What is the correct HTML element for inserting a line break.",
    answers:[
        "<lb>",
        "<br>",
        "<break>"
    ], correctAnswer:1
    }, 

    {
        question:"What is the correct HTML for adding a background color?",
        answers:[
            "<body style=”background-color: yellow”></body?",
            "<body bg = “yellow”>",
            "<background>yellow</background>"
        ]
    , correctAnswer:0
}, 

    {
        question:"Choose  the correct HTML element to define important text",
        answers:[
            "<important>",
            "<strong>",
            "<i>"
        ]
       , correctAnswer:1 
    },

    {
        question:"Which character is used to indicate an end tag?",
        answers:[
            "*",
            "#",
            "/"
        ]
       , correctAnswer:2
    },

    {
        question:"How do you make a bulleted list?",
        answers:[
            "<list>",
            "<ol>",
            "<ul>"
        ]
        ,correctAnswer:2
    },

    {
        question:"How can you make a numbered list?",
        answers:[
            "<ol>",
            "<ul> ",
            "<list>"
        ]
        ,correctAnswer:0
    },

    {
        question:"What is the correct HTML for making a checkbox?",
        answers:[
            "<input type=”checkbox”>",
            "<input type=”check”>",
            "<checkbox>"
        ]
        ,correctAnswer:0
    },

    {
        question:"What is the correct HTML for making a text input field?",
        answers:[
            "<textfield>",
            "<textinput type=”text>",
            "<input type=”text”>"
        ]
        ,correctAnswer:2
    }

]
let countdown = 60
let timerEl =document.getElementById('time')
let startScreenEl =document.getElementById('start-screen')
   console.log(start-screen)
let startEl= document.getElementById('start')

startEl.addEventListener('click', function(event){
    event.preventDefault();
    startScreenEl.setAttribute('class', 'hide')
    let timerInterval = setInterval(function(){
        countdown--;
        timerEl.textContent = countdown;
        if(countdown<=0){                         clearInterval(timerInterval);
            }
        }, 1000)
        startQuiz()
})
function startQuiz() {
    // show starting time
   
    getQuestion();
  }
  function getQuestion(){

 

for (let index = 0; index < questions.length; index++) {
    
}
document.querySelector("#question-title").textContent = questions[1].question;


document.querySelector('#choices').innerHTML = `<button>${questions[0].answers}</button>`     
}

//set the title of the current question and loop through the answers and create a button for each answer
// event listender for the ansswer buttons inside need if add time for correct else decrease time .
//  and a function to increment the questions and answers.