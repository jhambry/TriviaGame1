var card = $("#quiz-area");

var questions = [
  {
    question: "What Is The Name Of Frank's Doctor Alter-Ego?",
    answers: ["Dr Cricket", "Dr Mantis Toboggan", "Dr Magnum Dong", "Dr Froggy"],
    correctAnswer: "Dr Mantis Toboggan"
  },
  {
    question: "In Season 10’s Opening Episode Which Baseball Player Does The Gang Attempt To Outdrink",
    answers: ["Boss Hogg", "Chase Utley", "Wade Boggs", "Ryan Howard"],
    correctAnswer: "Wade Boggs"
  },
  {
    question: "Which Iconic Action Film Series Does The Gang Attempt To Remake?",
    answers: ["Lethal Weapon", "Thundergun Express", "Speed", "Die Hard"],
    correctAnswer: "Lethal Weapon"
  },
  {
    question: "What Was Frank Reynold’s Business Nickname?",
    answers: ["The Tiger", "The Warthog", "The Honeybadger", "The Armadillo"],
    correctAnswer: "The Warthog"
  },
  {
    question: "What Is The Name Of The Italian Restaurant The Gang Frequent?",
    answers: ["Gino's", "Milo's", "Luigi's", "Guigino's"],
    correctAnswer: "Guigino's"
  },
  {
    question:"What Species Of Animal Does Dennis’ Ex-Wife, Maureen Ponderosa, Want To Become?",
    answers: ["Cat", "Mouse", "Raccoon", "Bird"],
    correctAnswer: "Cat"
  },
  {
    question: "Which High School Did The Male Members Of The Gang Attend?",
    answers: ["St. John's Preparatory School", "St. Edmund's Preparatory School", "St. Mark's Preparatory School", "St. Joseph's Preparatory School"],
    correctAnswer: "St. Joseph's Preparatory School"
  },
  {
    question: "Which Actor Played Mac’s Cousin, Country Mac?",
    answers: ["Thomas Ian Nicholas", "Chris Klein", "Eddie Kaye Thomas", "Seann William Scott"],
    correctAnswer: "Seann William Scott"
  }
];

var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 90,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
    );

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='finished'>Finished</button>");
  },

  done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};

$(document).on("click", "#start", function() {
  game.start();
});

$(document).on("click", "#finished", function() {
  game.done();
});
