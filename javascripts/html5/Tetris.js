$(function () {
	var canvas = document.getElementById('canvasTetris');
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = '#FFFFFF';
	ctx.fillRect(0, 0, 640, 600);
	ctx.fillStyle = '#000000';
	ctx.font = "25px Times New Roman";
	ctx.fillText("Tetris: To Be Continue...", 100, 40)
	Tetris(ctx);
});

function Tetris(ctx) {
	ctx.fillStyle = '#000000';
	ctx.lineWidth = "50px";
	//�����
	ctx.strokeRect(100, 50, 250, 500)
	//���ѿ�
	ctx.strokeRect(400, 50, 150, 150);
	//�÷ֿ�
	ctx.strokeRect(400, 250, 150, 100);
	//�÷�
	ctx.fillStyle = '#000000';
	ctx.font = "20px Times New Roman";
	ctx.fillText("Score:", 425, 275)
	ctx.font = "35px Times New Roman";
	ctx.fillText("999999", 425, 325)
	//��������
	ctx.strokeRect(400, 450, 50, 50)//��
	ctx.strokeRect(450, 400, 50, 50)//��
	ctx.strokeRect(450, 450, 50, 50)//��
	ctx.strokeRect(500, 450, 50, 50)//��
	ctx.strokeRect(450, 500, 50, 50)//��

	//�����
	ctx.fillStyle = "rgba(200, 225, 250, 0.5)";
	ctx.fillRect(250, 350, 25, 25)
	ctx.fillRect(275, 350, 25, 25)
	ctx.fillRect(250, 375, 25, 25)
	ctx.fillRect(225, 350, 25, 25)
	ctx.fillStyle = "rgba(0, 0, 0, 1)";
	ctx.strokeRect(250, 350, 25, 25)
	ctx.strokeRect(275, 350, 25, 25)
	ctx.strokeRect(250, 375, 25, 25)
	ctx.strokeRect(225, 350, 25, 25)
	//��һ��
	ctx.fillStyle = "rgba(200, 225, 250, 0.5)";
	ctx.fillRect(450, 100, 25, 25)
	ctx.fillRect(450, 125, 25, 25)
	ctx.fillRect(450, 150, 25, 25)
	ctx.fillRect(475, 100, 25, 25)
	ctx.fillStyle = "rgba(0, 0, 0, 1)";
	ctx.strokeRect(450, 100, 25, 25)
	ctx.strokeRect(450, 125, 25, 25)
	ctx.strokeRect(450, 150, 25, 25)
	ctx.strokeRect(475, 100, 25, 25)
}