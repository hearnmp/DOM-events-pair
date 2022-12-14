// cookie constants
const cookieButton = document.querySelector('#cookieClick');
let cookieCounter = 0;

cookieButton.addEventListener('click', function () {
    // console.log("i work!");
    cookieCounter ++;
    const cookieCountTotal =document.querySelector("#cookieClick-count");
    cookieCountTotal.textContent = cookieCounter
});