nose_X = 0;
nose_Y = 0;
function preload() 
{
    clown_nose= loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}

function modelLoaded() {
    console.log("posenet Is Initialized")
    

}



function draw() {
    image(video, 0, 0, 300, 300);
image(clown_nose,nose_X-15,nose_Y+5,40,30)



}

function take_snapshot() {
    save('myFilterImage.png');
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);
        nose_X = result[0].pose.nose.x
        nose_Y = result[0].pose.nose.y
        console.log("nose x = " + result[0].pose.nose.x);
        console.log("nose y = " + result[0].pose.nose.y);

    }
}
