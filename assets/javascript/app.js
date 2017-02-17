// Hide the questions to start, start the game with a button that when on click displays the questions
$('.questions').hide();

$('.complete').hide();
// create a countdown timer starting from 60 seconds and counting down. When this hits zero, display results. When user clicks submit, stop timer. Reset on start game reload. 
function startTimer(){
  var counter = 60;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
      $('.complete').hide();
    }
    // go to results section
    if (counter === 0) {
        alert("Time's Up!!");
        clearInterval(counter);
        $('.complete').fadeIn();
        $('.questions').hide();
        $('#start').fadeIn();
    }
  }, 1000);
}

function showQuestions(){
	var counter = 60;
	$('.questions').fadeIn();
}

// call the clock to start and questions to show
$("#startClock").click(function(){
    startTimer();
    showQuestions();
    $('#start').hide();
});

// create an object for each question 

// on each click, we want to measure if the answer was right or wrong, add a point if right
// on each click, we want to move onto the next question

// $('#right').click(function() {
//     finalScore.checkCorrect();
// });

// $('#wrong').click(function() {
// 	finalScore.checkIncorrect();
// });

// var firstQuestion = {
//     question: "What team did Michael Jordan play for?",
//     choices: ["Bulls", "Heat", "Lakers", "Magic", "Celtics"],
//     correctChoice: "Bulls"

//     // $("#right").html(correctChoice);

//     // $('#right').click(function() {
//     // 	finalScore.checkCorrect();
//     // });
// };

// var secondQuestion = {
//     question: "What state was the game of basketball invented in?",
//     choices: ["California", "Illinois", "Massachusetts", "Kansas", "New York"],
//     correctChoice: "Massachusetts"
// };

// var thirdQuestion = {
//     question: "Who founded the game of basketball?",
//     choices: ["The Pope", "James Naismith", "Mick Jagger", "Bill Russell", "Larry Bird"],
//     correctChoice: "James Naismith"
// }; 

// var fourthQuestion = {
//     question: "How many NBA teams does California have?",
//     choices: [3, 4, 2, 1, 5],
//     correctChoice: 3
// }; 

// var fifthQuestion = {
//     question: "What is the length of a standard NBA court in feet?",
//     choices: [80, 65, 98, 50, 94],
//     correctChoice: 94
// };

// compilation of results of questions 1-5
	var questionnaire = {
			questions: [
			{
			    question: "What team did Michael Jordan play for?",
			    choices: ["Bulls", "Heat", "Lakers", "Magic", "Celtics"],
			    correctChoice: "Bulls"
			}, {
			    question: "What state was the game of basketball invented in?",
			    choices: ["California", "Illinois", "Massachusetts", "Kansas", "New York"],
			    correctChoice: "Massachusetts"
			}, {
			    question: "Who founded the game of basketball?",
			    choices: ["The Pope", "James Naismith", "Mick Jagger", "Bill Russell", "Larry Bird"],
			    correctChoice: "James Naismith"
			}, {
			    question: "How many NBA teams does California have?",
			    choices: [3, 4, 2, 1, 5],
			    correctChoice: 3
			}, {
			    question: "What is the length of a standard NBA court in feet?",
			    choices: [80, 65, 98, 50, 94],
			    correctChoice: 94
			}
		],
		correct: 0,
		incorrect: 0,

		checkCorrect: function() {
			document.getElementById("correct").innerHTML = "Correct: " + this.correct;
			this.correct = this.correct + 1;
			console.log(this.correct);
		},

		checkIncorrect: function() {
			document.getElementById("incorrect").innerHTML = "Incorrect: " + this.incorrect;
			this.incorrect = this.incorrect + 1;
			console.log(this.incorrect);	
		},

		checkAnswer: function(q, a) {
   			if (this.questions[q].correctChoice == a) {
       		// Correct Answer!

   			} else {
       		// Wrong Answer!

   			}
		}
	};

// $(document).ready(function() {
//     for (i = 0; i < questionnaire.questions.length; i++) {
//         $(".questions").append('<div class="row"><div class="col-md-6 col-md-offset-3"> <div class="list-group text-center"><a href="#" class="list-group-item disabled">' + questionnaire.questions[i].question + '</a><a href="#" class="list-group-item" id="right">Bulls</a><a href="#" class="list-group-item" id="wrong">Heat</a><a href="#" class="list-group-item" id="wrong">Lakers</a><a href="#" class="list-group-item" id="wrong">Magic</a><a href="#" class="list-group-item" id="wrong">Celtics</a></div></div></div>');
//    }
//    var answers = "";
//        for (a = 0; a <questionnaire.questions.choices.length; a++) {
//                answers += '<a href="#" class="list-group-item" id="right">' + questionnaire.questions.choices[a] + '</a>';}
// });

$(document).ready(function() {
   for (i = 0; i < questionnaire.questions.length; i++) {
       var answers = "";
       for (a = 0; a <questionnaire.questions[i].choices.length; a++) {
               answers += '<a href="#" class="list-group-item answer" data-q="' + i + '">' + questionnaire.questions[i].choices[a] + '</a>';
       }
       // Look at the console!
       // console.log(answers);
       // How can you get the answers into the below string to append to your page?
		$(".questions").append('<div class="row"><div class="col-md-6 col-md-offset-3"> <div class="list-group text-center"><a href="#" class="list-group-item disabled">' + questionnaire.questions[i].question + '</a>' + answers + '</div></div></div>');   }
		
});

$(".questions").on("click", "a.answer", function() {
   		console.log("Answer Selected: " + $(this).text());
   		console.log(questionnaire.questions[$(this).data("q")].correctChoice);
   		questionnaire.checkAnswer($(this).data("q"), $(this).val());
   		$("#correct").html("Correct: " + questionnaire.correct);
   		$("#incorrect").html("Incorrect: " + questionnaire.incorrect);
   		var userChoice = this.text();
   		var correctChoice = this.data("q");
});


// check if user won or lost and reset the game
// var checkWin = function() {

// 	// Check if currentScore is larger than targetScore
// 	if(currentScore  targetScore) {
// 		alert("You Lost!");
// 		console.log("You Lost");

// 		// add to loss counter
// 		lossCount++

// 		// Change loss count
// 		$("#lossCount").html(lossCount);

// 		// restart the game
// 		startGame();
// 	}

// 	else if (currentScore == targetScore) {
// 		alert("Congrats, you win!");
// 		console.log("You win");

// 		// add to win counter
// 		winCount++

// 		// Change the win count
// 		$("#winCount").html(winCount);

// 		// Restart the game
// 		startGame();
// 	}

// }



// if(usersChoice === correctChoice) {
// 			game.winChange();
// }

// Restart the game

		// startGame();