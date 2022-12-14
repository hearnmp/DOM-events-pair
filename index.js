// cookie constants
const cookieButton = document.querySelector('#cookieClick');
let cookieCounter = 0;

cookieButton.addEventListener('click', function () {
    // console.log("i work!");
    cookieCounter ++;
    const cookieCountTotal =document.querySelector("#cookieClick-count");
    cookieCountTotal.textContent = cookieCounter
});

// magnifying glass constants
const biggerButton = document.querySelector('#bigger');
const smallerButton = document.querySelector('#smaller');
let paragraphText = document.querySelector('#text');
paragraphText.style.fontSize = '20px'

biggerButton.addEventListener('click', function () {
    console.log("this works!");
    if(paragraphText.style.fontSize = '20px'){
        return paragraphText.style.fontSize = '50px'
    }

})

smallerButton.addEventListener('click', function () {
    console.log("this also works!");
    if(paragraphText.style.fontSize = '20px'){
        return paragraphText.style.fontSize = '5px'
    }
})
