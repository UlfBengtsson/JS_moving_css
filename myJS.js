"use strict";

var btnMoveLight = document.getElementById("btn-move-light");

var divLights = document.getElementById("divLights");

var listOfBoxLights = document.getElementsByClassName("boxLight");
console.log(listOfBoxLights);
var lightOrder = ["greenLight", "yellowLight", "redLight"];
var lightOrderIndex = 0;

btnMoveLight.addEventListener("click", moveLights);

function moveLights() {
  for (let index = 0; index < listOfBoxLights.length; index++) {
    const boxElement = listOfBoxLights[index];

    boxElement.className = "boxLight " + lightOrder[nextOrderIndex()];
  }
}

function nextOrderIndex() {
  lightOrderIndex++;
  if (lightOrderIndex < lightOrder.length) {
    return lightOrderIndex;
  } else {
    lightOrderIndex = 0;
    return lightOrderIndex;
  }
}
