// id colors to use
let color1 = 'green';
let color2 = 'red';

//button select
let btnShow = document.querySelector('button');

//div box select
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');


//function to change box1 to green
function clickMe() {
    box1.style.background = color1;
}

//function to change box2 to red
function clickMe2() {
    box2.style.background = color2;
}

//running both functions on click of button
btnShow.addEventListener('click', () => {
    clickMe();
    clickMe2();

})
