let timer = 5;
//this function will run for the whole game. use clearInterval calling the last question as a parameter
let start = setInterval(function(){
    timer--
console.log(timer)
},1000)
clearInterval(5)
//timer is now player score
//object will hold a data-index, and style. next button will grab the array. where to store the questions? they would have to be in the object array so I can swap them out. yes they are in the array.
let qusestions = [
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