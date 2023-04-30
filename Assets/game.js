var startquiz = document.getElementById("startquiz")
var savescore = document.getElementById("savescore")
var viewscores = document.getElementById("viewscores")
var playagain = document.getElementById("PlayAgain")



var title = document.getElementById("title")
var quiz = document.getElementById("quiz")
var result = document.getElementById("result")

var options = document.getElementById("options")
var message = document.getElementById("message")

var timer = document.getElementById("timer")

var info = document.getElementById("info")

var secondsleft = 0;
var score = 0;
var currentquestion = 0;
var countdown;

function stopGame() {
    clearInterval(countdown);
    timer.textContent = ""
    quiz.style.display= 'none';
    result.style.display='flex'
    info.textContent = "your score is " + score;
}

function onsavescore() {
    let name = document.getElementById("name").value
    if (name !=="") {
        localStorage.setItem(name, score);
        document.getElementById("name").value = "";

    }
}

function onviewscores() {
    window.location.href = 'scores.html';

}

function onpressAnswer(event) {
    const correctanswer = questions[currentquestion].answer;
    const useranswer = event.target.textContent;

    if (correctanswer === useranswer) {
        score++;

        displayMessage('correct!')

    }else {
        score--;
        displayMessage('incorrect:-(');
        secondsleft-=5;
    }
    displayQuestion();
}

function displayMessage(m) {
    message.textContent= m;
    setTimeout(function() {
        message.textContent="";
    }, 1000);
}

function displayQuestion() {
    currentquestion++;
    if (currentquestion >= questions.length){
      stopGame();
       return;

   }


var question = questions[currentquestion];
document.getElementById('questions').textContent = question.title

options.innerHTML='';

for (var i = 0; i < question.choices.length; i++) {
    const option = document.createElement("div");
    option.textContent = question.choices[i];
    option.onclick = onpressAnswer;
    option.classList.add("option");

    options.appendChild(option);
   }  
}

function onstartGame() {
    secondsleft = 75;
    currentquestion = -1;
    score=0;
    countdown=setInterval(function () {
        if (secondsleft > 0) {
            timer.textContent= secondsleft;
        }else {
            stopGame();
        }
        secondsleft--;
    },1000);

    title.style.display= 'none';
    result.style.display='none';
    quiz.style.display='flex';

   displayQuestion();
}

startquiz.addEventListener("click", onstartGame);
savescore.addEventListener("click", onsavescore);
playagain.addEventListener("click", onstartGame);
viewscores.addEventListener("click", onviewscores);
