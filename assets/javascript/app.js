var correct = 0;
var incorrect = 0;
var time = 30;
var intervalID;
var clockRunning = false;
var questions = [
    {
        question : "What color is the sky?",
        answers:{
                    a: " Purple ",
                    b: " Yellow ",
                    c: " Red ",
                    d: " Blue ",
        },
        correctAnswer : "Blue"
    },
    {
        question : "What color is the grass?",
        answers:{
                    a: " Purple ",
                    b: " Green ",
                    c: " Red ",
                    d: " Blue ",
        },
        correctAnswer : "Green"
    },
    {
        question : "What color is an apple?",
        answers: {
                    a: " Purple ",
                    b: " Yellow ",
                    c: " Red ",
                    d: " Blue ",
        },
        correctAnswer : "Red"
    },
]


$("#start-button").on("click", startGame);

function startGame() {

    console.log("Game Started")
    $(this).hide();
    function buildQuiz() {

      setTimeout(endGame, 31000);
      if(!clockRunning){
        intervalID = setInterval(count, 1000);
        clockRunning = true;
      }else if(time == 0){
        clockRunning = false;
        endGame();
      }
      function count(){
        $("#timer").text("Timer: " + time + " Seconds");
        time--;
      }
      
        for (var i =0; i < questions.length; i++){
          console.log(questions.length);
          var q = $("<div>");
          q.text(questions[i].question);
          $("#form").append(q);
          for (var k=0; k<4; k++){
            var a = $("<label>");
            var letters = ["a", "b", "c", "d"];
            a.append($('<input>', {
              type: 'radio',
              name: letters[i],
              val: questions[i].answers[letters[k]],
            }));
            
            a.append(questions[i].answers[letters[k]]);
            a.append($("<br>"));
            $("#form").append(a);
          }      
        }
        var submit = ($('<input>', {
          type: 'submit',
          value: 'Submit',
        }));
        $("#form").append(submit);

        $('input:radio').change(function(){
          var value = $("form input[type='radio']:checked").val();
          console.log("Value of Changed Radio is : " + value);
          });

        function endGame (){
          var userSubmit = document.getElementsByTagName("form");
          userSubmit[0].submit;
          $("#game").text("Game Over");
          $("#game").append("Score: ")
        
        }
      }
    buildQuiz();
  }