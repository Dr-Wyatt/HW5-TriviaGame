var correct = 0;
var incorrect = 0;
var questions = [
    {
        question : "What color is the sky?",
        answers:{
                    a: "Purple",
                    b: "Yellow",
                    c: "Red",
                    d: "Blue",
        },
        correctAnswer : "d"
    },
    {
        question : "What color is the grass?",
        answers:{
                    a: "Purple",
                    b: "Green",
                    c: "Red",
                    d: "Blue",
        },
        correctAnswer : "b"
    },
    {
        question : "What color is an apple?",
        answers: {
                    a: "Purple",
                    b: "Yellow",
                    c: "Red",
                    d: "Blue",
        },
        correctAnswer : "c"
    },
]


$("#start-button").on("click", startGame);

function startGame() {

    console.log("Game Started")
    
    function buildQuiz() {
        
        var output = [];
    
        
        questions.forEach((currentQuestion, questionNumber) => {
          
          var answers = [];
    
          for (letter in currentQuestion.answers) {
            
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
    
          
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>`
          );
        });
    
        
        $("#quiz").html($("<div/>").text(output.join("")));
        // quiz.innerHTML = output.join("");
      }
    buildQuiz();
  }