var correct = 0;
var incorrect = 0;
var time = 30;
var intervalID;
var clockRunning = false;
var questions = [
    {
        question : "What is Erin's first name?",
        answers:{
                    a: " Emily ",
                    b: " Kelly ",
                    c: " Mariah ",
                    d: " Amanda ",
        },
        correctAnswer : " Kelly "
    },
    {
        question : "What color is the grass?",
        answers:{
                    a: " Purple ",
                    b: " Green ",
                    c: " Red ",
                    d: " Blue ",
        },
        correctAnswer : " Green "
    },
    {
        question : "What color is an apple?",
        answers: {
                    a: " Purple ",
                    b: " Yellow ",
                    c: " Red ",
                    d: " Blue ",
        },
        correctAnswer : " Red "
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
            var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
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

          var valueQ1 = $("form input[name= 'a']:checked").val();
          var valueQ2 = $("form input[name= 'b']:checked").val();
          var valueQ3 = $("form input[name= 'c']:checked").val();
          var valueQ4 = $("form input[name= 'd']:checked").val();
          var valueQ5 = $("form input[name= 'e']:checked").val();
          var valueQ6 = $("form input[name= 'f']:checked").val();
          var valueQ7 = $("form input[name= 'g']:checked").val();
          var valueQ8 = $("form input[name= 'h']:checked").val();
          var valueQ9 = $("form input[name= 'i']:checked").val();
          var valueQ10 = $("form input[name= 'j']:checked").val();
          
          if (valueQ1 == questions[0].correctAnswer){
            console.log("a is right");
            correct++
          } else{
            console.log("a is wrong");
            incorrect++
          }
          if (valueQ2 == questions[1].correctAnswer){
            console.log("b is right");
            correct++
          } else {
            console.log("b is wrong");
            incorrect++
          }
          if (valueQ3 == questions[2].correctAnswer){
            console.log("a is right");
            correct++
          } else{
            console.log("a is wrong");
            incorrect++
          }
          if (valueQ4 == questions[3].correctAnswer){
            console.log("a is right");
            correct++
          } else{
            console.log("a is wrong");
            incorrect++
          }
          if (valueQ5 == questions[4].correctAnswer){
            console.log("a is right");
            correct++
          } else{
            console.log("a is wrong");
            incorrect++
          }
          if (valueQ6 == questions[5].correctAnswer){
            console.log("a is right");
            correct++
          } else{
            console.log("a is wrong");
            incorrect++
          }
          if (valueQ7 == questions[6].correctAnswer){
            console.log("a is right");
            correct++
          } else{
            console.log("a is wrong");
            incorrect++
          }
          if (valueQ8 == questions[7].correctAnswer){
            console.log("a is right");
            correct++
          } else{
            console.log("a is wrong");
            incorrect++
          }
          if (valueQ9 == questions[8].correctAnswer){
            console.log("a is right");
            correct++
          } else{
            console.log("a is wrong");
            incorrect++
          }
          if (valueQ10 == questions[9].correctAnswer){
            console.log("a is right");
            correct++
          } else{
            console.log("a is wrong");
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