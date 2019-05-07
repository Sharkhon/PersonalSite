document.addEventListener('DOMContentLoaded', OnReady);

//This applies to the page after it is loaded
//Sets up events on elements and shows scene one.
function OnReady() {
    var sceneChangers = document.getElementsByClassName('scene-button');
    for (var button of sceneChangers) {
        button.addEventListener('click', sceneChangers)
    }

    ShowSceneOne();
}

//Changes the scene based on the direction given
//  initiater: the button that called the event.
//      It has a data attr that states to go the next/prev scene
function SceneChange(initiater) {
    var direction = initiater.DataList['direction'];


}

//Moves the items for scene one
function ShowSceneOne() {

}