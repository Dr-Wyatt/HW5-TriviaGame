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

        
        submit.on("click", endGame);

        function endGame (){
          var valueA = $("form input[name= 'a']:checked").val();
          var valueb = $("form input[name= 'b']:checked").val();
          var valueC = $("form input[name= 'c']:checked").val();
          var valueD = $("form input[name= 'd']:checked").val();
          if (valueA == " Blue "){
            console.log("a is right");
            correct++
          } else{
            console.log("a is wrong");
            incorrect++
          }
          if (valueb == " Green "){
            console.log("b is right");
            correct++
          } else {
            console.log("b is wrong");
            incorrect++
          }
          var userSubmit = document.getElementsByTagName("form");
          userSubmit[0].submit;
          $("#game").text("Game Over").append($("<br>"));
          $("#game").append("Correct Score: " + correct).append($("<br>"));
          $("#game").append("Incorrect Score: " + incorrect).append($("<br>"));
        }
      }
    buildQuiz();
  }