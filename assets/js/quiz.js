// let startScreenEl =document.getElementById('start-screen')
// startScreenEl.setAttribute('class', 'hide')
// let startEl= document.getElementById('start')
// let countdown = 60
// let timerInterval = setInterval(function(){
// countdown--;
// if(countdown<=0){
//     clearInterval(timerInterval);
//     }
// }, 1000)


    startEl.addEventListener('click', function(event){
        event.preventDefault();
    document.getElementById('start')
    if(startEl === true){
        setAttribute('class', 'hide')}
        else{
            setAttribute('class', 'visable')
        }
        stopProagation(startEl)
      })
    
})
clearInterval(5)
timer is now player score
object will hold a data-index, and style. next button will grab the array. where to store the questions? they would have to be in the object array so I can swap them out. yes they are in the array.
function startQuiz() {
    // hide start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
    // un-hide questions section
    questionsEl.removeAttribute("class");
    // start timer
    timerId = setInterval(clockTick, 1000);
    // show starting time
    timerEl.textContent = time;
    getQuestion();
  }
  // user clicks button to start quiz
  startBtn.onclick = startQuiz;
  3:12
  <div id="start-screen" class="start">
          <h1>Coding Quiz Challenge</h1>
          <p>
            Try to answer the following code-related questions within the time
            limit. Keep in mind that incorrect answers will penalize your
            score/time by ten seconds!
          </p>
          <button id="start">Start Quiz</button>
        </div>

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

let currentQuestion = 0;
for (let index = 0; index < questions.length; index++) {
    const questionsEl = currentQuestion[index];
}
document.querySelector("#question-title").textContent = questions[1].question;


document.querySelector('#choices').innerHTML = `<div>${questions[0].answers}</div>`