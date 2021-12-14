function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent('canvas');
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
	posenet = ml5.poseNet(video, modelloaded);
	posenet.on("poses", gotposes);
}

function draw() {
	game()
}

function modelloaded() {
	console.log("model has been loaded correctly")
}

function gotposes(results) {
	console.log("inside the gotposes ")
	if(results.length > 0){
		console.log(results)
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("noseX = " + noseX + "noseY = " + noseY);
	}
}


