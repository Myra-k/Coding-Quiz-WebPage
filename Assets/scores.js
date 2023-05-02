
//here are the scores for the quiz and how they are presented etc

var scoreboard = document.getElementById("scoreboard")
var goBack = document.getElementById("GoBack")

function onGoBack() {
    window.location.href = 'index.html';
    

}
function displayscore() {
    var highscore= JSON.parse(localStorage.getItem("name"))||[];
    for (var i = 0; i<highscore.length; i++) {
        var litag=document.createElement("li")
        litag.textContent=highscore[i].name + ' - ' + highscore[i].score
        console.log(highscore[i])
        var resultel=document.getElementById("final")
        resultel.appendChild(litag)
        // const name = highscore.key(i);
        // const score = highscore.getItem(name);
        // const result = document.createElement("div");
        //result.classList.add('result');
        
//         result.innerHTML = `<div class="score-item">${name}</div>
//         <div class="score-item">${score}</div>`
    
//         scoreboard.appendChild(result);
   }
}
// for (var i = 0; i<localStorage.length; i++) {
//     const name = localStorage.key(i);
//     const score = localStorage.getItem(name);
//     const result = document.createElement("div");
//     //result.classList.add('result');
    
//     result.innerHTML = `<div class="score-item">${name}</div>
//     <div class="score-item">${score}</div>`

//     scoreboard.appendChild(result);
// }
displayscore()
goBack.addEventListener("click", onGoBack);