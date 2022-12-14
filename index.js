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
paragraphText.style.fontSize = "10px";

biggerButton.addEventListener('click', function () {
    // console.log("this works!");
    if(paragraphSize < 100){
        paragraphSize++;
        return document.body.querySelector('#text').style.fontSize = paragraphSize + 'px';
    }else if(paragraphSize == 100){
        return paragraphSize
    }
})

smallerButton.addEventListener('click', function () {
    // console.log("this also works!");
    if(paragraphSize > 1){
        paragraphSize--;
        return document.body.querySelector('#text').style.fontSize = paragraphSize + 'px';
    }else if(paragraphSize == 1){
        return paragraphSize
    }
})

// green screen const
let colors = ["Red", "Blue", "Green", "White", "Gray"]
const colorButton = document.querySelector("#colorChange")

colorButton.addEventListener('click', function () {
console.log(document.body.querySelector("#inputText").value)
})