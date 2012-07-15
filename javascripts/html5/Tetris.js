$(function () {
	var canvas = document.getElementById('canvasTetris');
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = '#DDDDFF';
	ctx.fillRect(0, 0, 600, 600);
	Tetris(ctx);
});

function Tetris(ctx) {
	ctx.fillStyle = '#FFFFFF';
	ctx.fillRect(50, 50, 250, 500);
	ctx.fillStyle = '#000000';
	ctx.lineWidth = "50px";
	ctx.strokeRect(50, 50, 250, 500)

	ctx.fillStyle = "#0000FF";
	ctx.strokeRect(150, 350, 25, 25)
	ctx.strokeRect(175, 350, 25, 25)
	ctx.strokeRect(150, 375, 25, 25)
	ctx.strokeRect(125, 350, 25, 25)
}