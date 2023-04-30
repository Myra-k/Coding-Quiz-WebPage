var scoreboard = document.getElementById("scoreboard")
var goBack = document.getElementById("GoBack")

function onGoBack() {
    window.location.href = 'index.html';
    

}

for (var i = 0; i<localStorage.length; i++) {
    const name = localStorage.key(i);
    const score = localStorage.getItem(name);
    const result = document.createElement("div");
    //result.classList.add('result');
    
    result.innerHTML = `<div class="score-item">${name}</div>
    <div class="score-item">${score}</div>`

    scoreboard.appendChild(result);
}

goBack.addEventListener("click", onGoBack);