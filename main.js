img = "";
status = "";

function preload() {
    img = loadImage('traffic-jam-on-a-german-highway-two-bikes-between-the-cars-slow-driving-2CBXK5B.jpg')
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Car", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 200, 150);

    fill("#FF0000");
    text("Car", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 250);

    fill("#FF0000");
    text("Bike", 210, 120);
    noFill();
    stroke("#FF0000");
    rect(200, 100, 100, 150);

}

function setup() {
    canvas = createCanvas(600, 370);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult() {
    if (error) {
        console.log(error);
    }
    console.log(results);
}