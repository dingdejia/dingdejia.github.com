$(function () {
	var canvas = document.getElementById('canvasUmbrella');
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = '#FFFFFF';
	ctx.fillRect(0, 0, 640, 900);
	ctx.fillStyle = '#000000';
	ctx.font = "25px Times New Roman";
	ctx.fillText("Umbrella",100,40)
	umbrella(ctx);
});

function umbrella(ctx) {
	ctx.fillStyle = "rgba(0, 0, 200, 0.8)";
	ctx.beginPath();
	//伞顶
	ctx.moveTo(100, 200);
	ctx.bezierCurveTo(150, 0, 450, 0, 500, 200);
	ctx.bezierCurveTo(450, 230, 350, 250, 300, 250);
	ctx.bezierCurveTo(250, 250, 150, 230, 100, 200);	
	//伞杆
	ctx.moveTo(305, 250);
	ctx.lineTo(295, 250);
	ctx.lineTo(295, 450);
	ctx.lineTo(305, 450);
	//伞把
	ctx.moveTo(305, 450);
	ctx.bezierCurveTo(305, 495, 245, 495, 245, 450);
	ctx.lineTo(255, 450);
	ctx.bezierCurveTo(260, 480, 290, 480, 295, 450);
	ctx.closePath();
	ctx.fill();


	ctx.fillStyle = "rgba(255,255,255, 0.5)";
	ctx.beginPath();
	//伞骨
	//下伞骨
	//1
	ctx.moveTo(300, 75);
	ctx.bezierCurveTo(200, 80, 140, 120, 100, 200);
	ctx.lineTo(101, 201)
	ctx.bezierCurveTo(140, 122, 200, 82, 300, 75);
	//2
	ctx.moveTo(300, 75);
	ctx.bezierCurveTo(280, 80, 230, 120, 210, 240);
	ctx.lineTo(212, 240)
	ctx.bezierCurveTo(230, 122, 280, 82, 300, 75);
	//3
	ctx.moveTo(300, 75);
	ctx.bezierCurveTo(320, 80, 370, 120, 390, 240);
	ctx.lineTo(388, 240)
	ctx.bezierCurveTo(370, 122, 320, 82, 300, 75);
	//4
	ctx.moveTo(300, 75);
	ctx.bezierCurveTo(400, 80, 460, 120, 500, 200);
	ctx.lineTo(499, 201)
	ctx.bezierCurveTo(460, 122, 400, 82, 300, 75);
	//上伞骨
	//1


	//2


	ctx.closePath();
	ctx.fill();
}