var img = "";
var statusweb = "";

function preload() {
    img = loadImage("refrigrator.jpg");
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("statusLbl").innerHTML = "Detecting..";
}

function modelLoaded() {
    console.log("Model Loaded");
    statusweb = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
    }
}

function draw() {
    image(img, 0, 0, 600, 400);
}

function goBack() {
    window.location = "index.html"
}