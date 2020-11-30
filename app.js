let numCircles = 8;
let colors = generateRandomColor(numCircles)

let circles = document.querySelectorAll('main');
let colorPick = pickColor();
let colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = colorPick.toUpperCase();
let bgCustom = document.querySelector("h1")


//PLAY_MODE_BUTTON
let easyModeButton = document.querySelector('#easyBtn')
let mediumModeButton = document.querySelector('#mediumBtn')
let hardModeButton = document.querySelector('#hardBtn')

//PLAY_MODE_BUTTON_Function
easyModeButton.addEventListener('click',function () {
    mediumModeButton.classList.remove('selected');
    hardModeButton.classList.remove('selected');
    easyModeButton.classList.add('selected');
    numCircles = 4;
    colors = generateRandomColor(numCircles)
    message.style.display = 'none'
    colorPicker()
    for (let i=0; i < circles.length; i++){
        if (colors[i]){
            circles[i].style.background = colors[i]
            circles[i].classList.add('circle');
            circles[i].classList.remove('circle-six');
        }else{
            circles[i].style.display = 'none'
        }
    }
});

mediumModeButton.addEventListener('click',function () {
    easyModeButton.classList.remove('selected');
    hardModeButton.classList.remove('selected');
    mediumModeButton.classList.add('selected');
    numCircles = 6;
    colors = generateRandomColor(numCircles)
    colorPicker()
    message.style.display = 'none'
    for (let i=0; i < circles.length; i++){
        if (colors[i]){
            circles[i].style.background = colors[i]
            circles[i].style.display = 'block'
            circles[i].classList.add('circle-six');
            circles[i].classList.remove('circle');
        }else{
            circles[i].style.display = 'none'
        }
    }
});

hardModeButton.addEventListener('click',function () {
    easyModeButton.classList.remove('selected');
    mediumModeButton.classList.remove('selected');
    hardModeButton.classList.add('selected');
    numCircles = 8;
    colors = generateRandomColor(numCircles)
    colorPicker()
    message.style.display = 'none'
    for (let i=0; i < circles.length; i++){
        if (colors[i]){
            circles[i].style.background = colors[i]
            circles[i].style.display = 'block'
            circles[i].classList.add('circle');
            circles[i].classList.remove('circle-six');
        }
    }
});

function colorPicker() {
    colorPick = pickColor();
    colorDisplay.textContent = colorPick.toUpperCase();
}

//RESET_BUTTON
let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function () {
    colors = generateRandomColor(numCircles)
    colorPicker()
    for (let i = 0; i < circles.length;i++) {
        circles[i].style.background = colors[i]
    }
    bgCustom.style.background = this.style.background
    resetButton.textContent = "New Color"
    message.style.display = 'none'
});

//Message
let message = document.getElementById('message');

//GENERATE COLOR
for (let i = 0; i < circles.length;i++){
    circles[i].style.background = colors[i]
    circles[i].addEventListener('click',function(){
        let clickedColor = this.style.background;
        if (clickedColor === colorPick){
            message.style.display = 'block'
            message.textContent = "Correct!"
            message.style.color = colorPick
            changeColor(clickedColor)
            resetButton.textContent = "Play Again?"
            bgCustom.style.background = clickedColor
        }else {
            this.style.backgroundColor = "#8CD790";
            message.style.display = 'block'
            message.textContent = "Try Again"
            message.style.color = this.style.color
        }
    })
}

function changeColor(color){
    for (let i = 0; i < circles.length;i++){
        circles[i].style.background = color;
    }
}

function pickColor(){
    let randomColor = Math.floor(Math.random() * colors.length)
    return colors[randomColor];
}

function generateRandomColor(num){
    let arr = [];
    for (let i = 0; i < num; i++){
        arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
    let r = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`;
}