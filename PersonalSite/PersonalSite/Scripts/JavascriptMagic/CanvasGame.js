document.addEventListener('DOMContentLoaded', OnReady);

var gameScreen;

//This applies to the page after it is loaded
function OnReady() {
    gameScreen = {
        canvas: document.getElementById('game-screen'),
        context: document.getElementById('game-screen').getContext('2d'),
        active: false,
        objects: []
};
}

function Start() {

    gameScreen.objects.push({
        Name: 'player',
        X: 10,
        Y: 10,
        Height: 20,
        Width: 20,
        Dead: false
    });

    setInterval(UpdateScreen, 20);
}

function UpdateScreen() {
    gameScreen.context.clearRect(0, 0, gameScreen.canvas.width, gameScreen.canvas.height);

    gameScreen.objects.forEach(function(object) {

    });
}