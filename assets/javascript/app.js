var correct = 0;
var incorrect = 0;
var time = 90;
var intervalID;
var clockRunning = false;
var questions = [
    {
        question : "1. What is Erin's first name?",
        answers:{
                    a: " Emily ",
                    b: " Kelly ",
                    c: " Mariah ",
                    d: " Amanda ",
        },
        correctAnswer : " Kelly "
    },
    {
        question : "2. Which restaurant chain was Pam banned from?",
        answers:{
                    a: " Outback ",
                    b: " Chili's ",
                    c: " On The Border ",
                    d: " Chick-Fil-A ",
        },
        correctAnswer : " Chili's "
    },
    {
        question : "3. What is printed on Michael's coffee mug?",
        answers: {
                    a: " Most Beautiful Man ",
                    b: " Feed Me ",
                    c: " World's Best Boss ",
                    d: " I am not a Morning Person ",
        },
        correctAnswer : " World's Best Boss "
    },
    {
      question : "4. Who does Angela name her son after?",
      answers:{
                  a: " The Senator ",
                  b: " Dwight ",
                  c: " Her Cat ",
                  d: " Her Mom ",
      },
      correctAnswer : " Her Cat "
  },
  {
    question : "5. What is the name of the security guard?",
    answers:{
                a: " Bill ",
                b: " Jim ",
                c: " Paul ",
                d: " Hank ",
    },
    correctAnswer : " Hank "
},
{
  question : "6. Who's car is hit with a watermelon during the safety training episode?",
  answers:{
              a: " Stanley ",
              b: " Kelly ",
              c: " Jim ",
              d: " Meredith ",
  },
  correctAnswer : " Stanley "
},
{
  question : "7. What is the name of Michael's passion project film?",
  answers:{
              a: " Michael Scarn: Goldfinger ",
              b: " Scarnface ",
              c: " Threat Level Midnight ",
              d: " The Scarnfather ",
  },
  correctAnswer : " Threat Level Midnight "
},
{
  question : "8. Who wears the face mask while playing in the basketball game?",
  answers:{
              a: " Stanley ",
              b: " Jim ",
              c: " Darryl ",
              d: " Dwight ",
  },
  correctAnswer : " Dwight "
},
{
  question : "9. What is the name of Andy's college acapella group?",
  answers:{
              a: " The Golden Boys ",
              b: " Here Comes Treble ",
              c: " The Corny 5 ",
              d: " Treblemakers ",
  },
  correctAnswer : " Here Comes Treble "
},
{
  question : "10. What kind of company does Creed run out of his car?",
  answers:{
              a: " Fake-ID Company ",
              b: " Drug Company ",
              c: " Blood Donation Company ",
              d: " Pyramid Scheme ",
  },
  correctAnswer : " Fake-ID Company "
},
]


$("#start-button").on("click", startGame);

function startGame() {

    console.log("Game Started")
    $(this).hide();
    function buildQuiz() {

      setTimeout(endGame, 91000);
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