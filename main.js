var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
var car1X= 10;
var car1y= 10;
var car1width= 120;
var car1height= 70;
var car1img = "car1.png"
var car2X= 10;
var car2y= 100;
var car2width= 120;
var car2height= 70;
var car2img = "car2.png"
var backgroundimg = "racing.jpg"
function add(){
    bg = new Image()
    bg.onload = uploadbackground
    bg.src = backgroundimg

    car_1 = new Image()
    car_1.onload = uploadcar1
    car_1.src = car1img

    car_2 = new Image()
    car_2.onload = uploadcar2
    car_2.src = car2img


}

function uploadbackground(){
    ctx.drawImage(bg,0,0,canvas.width,canvas.height)
}

function uploadcar1(){
    ctx.drawImage(car_1,car1X,car1y,car1width,car1height)
}

function uploadcar2(){
    ctx.drawImage(car_2,car2X,car2y,car2width,car2height)
}

window.addEventListener("keydown",kd)
function kd(e){
x = e.keyCode
console.log(x)
if (x=='37') {
    car_1left()
    console.log("left arrow key")
}

if (x=='38') {
    car_1up()
    console.log("up arrow key")
}

if (x=='40') {
    car_1down()
    console.log("down arrow key")
}

if (x=='39') {
    car_1right()
    console.log("right arrow key") 
}

if (x=='87') {
    car_2up()
    console.log("w key")
}

if (x=='65') {
    car_2left()
    console.log("a key")
}
if (x=='68') {
    car_2right()
    console.log(" key")
}

if (x=='83') {
    car_2down()
    console.log("s key")
}

}

function car_1left(){
    if (car1X > 0) {
        car1X = car1X - 10
        uploadbackground()
        uploadcar1()
        uploadcar2()
    }
}

function car_1up(){
    if (car1y > 0) {
        car1y = car1y - 10
        uploadbackground()
        uploadcar1()
        uploadcar2() 
    }
}

function car_1right(){
    if (car1X < 700) {
        car1X = car1X + 10
        uploadbackground()
        uploadcar1()
        uploadcar2() 
    }
}

function car_1down(){
    if (car1y < 500) {
        car1y = car1y + 10
        uploadbackground()
        uploadcar1()
        uploadcar2() 
    }  
}

function car_2left(){
    if (car2X > 0) {
        car2X = car2X - 10
        uploadbackground()
        uploadcar2()
        uploadcar1()
    }
}

function car_2up(){
    if (car2y > 0) {
        car2y = car2y - 10
        uploadbackground()
        uploadcar2()
        uploadcar1() 
    }
}

function car_2right(){
    if (car2X < 700) {
        car2X = car2X + 10
        uploadbackground()
        uploadcar2()
        uploadcar1() 
    }
}

function car_2down(){
    if (car2y < 500) {
        car2y = car2y + 10
        uploadbackground()
        uploadcar2()
        uploadcar1() 
    }  
}

if (car1X > 700) {
   console.log("Car 1 won");
    document.getElementById("game-status").innerHTML = "Car 1 won!";
}

if (car2X > 700) {
    console.log("Car 2 won");
     document.getElementById("game-status").innerHTML = "Car 2 won!";
 }