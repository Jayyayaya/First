
let popup = document.getElementById('popup');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let popup1 = document.getElementById('popup1');
let popup2 = document.getElementById('popup2');
let popup3 = document.getElementById('popup3');


window.onload = function(){
    openPopup();
};
function openPopup(){
    popup.classList.add('open-popup');
} 
function closePopup(){
    popup.classList.remove('open-popup');
}
function handleYes() {
    alert('You are smart sweetie!\nGo ahead...');
    closePopup();
    closePopup1();
    closePopup2();
    closePopup3();
}
    
function handleNo() {
    alert('There is no way to decline!\nClick on "Ofcourse"...');
    openPopup();
} 

function openPopup1(){
    popup1.classList.add('open-popup1');
}
function closePopup1(){
    popup1.classList.remove('open-popup1');
}

function openPopup2(){
    popup2.classList.add('open-popup2');
}
function closePopup2(){
    popup2.classList.remove('open-popup2');
}

function openPopup3(){
    popup3.classList.add('open-popup3');
}
function closePopup3(){
    popup3.classList.remove('open-popup3');
}

function increaseSize() {
    // Get the first button element
    var button1 = document.getElementById("button1");

    // Get the current font size of the button1
    var currentWidth = parseInt(window.getComputedStyle(button1).width);
    var currentHeight = parseInt(window.getComputedStyle(button1).height);
    var currentFont = parseInt(window.getComputedStyle(button1).fontSize);
    var currentRadius = parseInt(window.getComputedStyle(button1).borderRadius);

    // Increase the font size of the first button
    button1.style.width = (currentWidth + 10) + "px"; // Increase by 4px each time
    button1.style.height = (currentHeight + 10) + "px";
    button1.style.fontSize = (currentFont + 2) + "px";
    button1.style.borderRadius = (currentFont + 25) + "px";
}

// document.querySelector('#popup').addEventListener('wheel', preventScroll, {passive: false});
// function preventScroll(e){
//     e.preventDefault();
//     e.stopPropagation();

//     return false;
// }


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}




