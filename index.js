// cookie constants
const cookieButton = document.querySelector('#cookieClick');
let cookieCounter = 0;

cookieButton.addEventListener('click', function () {
    // console.log("i work!");
    cookieCounter ++;
    const cookieCountTotal =document.querySelector("#cookieClick-count");
    cookieCountTotal.textContent = cookieCounter;
});

// magnifying glass constants
const biggerButton = document.querySelector('#bigger');
const smallerButton = document.querySelector('#smaller');
let paragraphText = document.querySelector('#text');
let paragraphSize = paragraphText.style.fontSize;
paragraphText.style.fontSize = "20px";

biggerButton.addEventListener('click', function () {
    // console.log("this works!");
    paragraphSize++;
    if(paragraphSize < 100){
        return document.body.querySelector('#text').style.fontSize = paragraphSize + 'px';
    }

})

smallerButton.addEventListener('click', function () {
    // console.log("this also works!");
    paragraphSize--;
    if(paragraphSize > 1){
        return document.body.querySelector('#text').style.fontSize = paragraphSize + 'px';
    }
})
