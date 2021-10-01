window.onload = () => {
    const addButton = document.getElementById('addButton');
    addButton.addEventListener('click', add);
    const subButton = document.getElementById('subButton');
    subButton.addEventListener('click', subtract);
    const mulButton = document.getElementById('mulButton');
    mulButton.addEventListener('click',multiply);
    const divButton = document.getElementById('divButton');
    divButton.addEventListener('click', division);
}
function add() {
    const boxOne = document.getElementById('boxOne');
    const boxTwo = document.getElementById('boxTwo'); 
    const addition = parseInt(boxOne.value) + parseInt(boxTwo.value);
    console.log(addition);
}
function subtract() {
    const boxOne = document.getElementById('boxOne'); 
    const boxTwo = document.getElementById('boxTwo'); 
    const subtract = boxOne.value - boxTwo.value;
    console.log(subtract);

}
function multiply() {
    const boxOne = document.getElementById('boxOne'); 
    const boxTwo = document.getElementById('boxTwo'); 
    const multiply = boxOne.value * boxTwo.value;
    console.log(multiply);

}
function division() {
    const boxOne = document.getElementById('boxOne'); 
    const boxTwo = document.getElementById('boxTwo'); 
    const division = boxOne.value / boxTwo.value;
    console.log(division);

}