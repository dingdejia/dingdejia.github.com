$(function () {

});

//��ʾ�˵�
function showMenu(obj) {
	var divMenu = document.getElementById("divMenu");
	divMenu.style.display = "block";
	divMenu.style.top = obj.offsetTop + "px";
	divMenu.style.left = (obj.offsetLeft - divMenu.clientWidth - 10) + "px";
}
//���ز˵�
function hidMenu(obj) { 
	var divMenu = document.getElementById("divMenu");
	divMenu.style.display = "none"	
}

//�˵����
function menuClick(obj) {
	if (obj.title) {		
		var divMenu = document.getElementById("divMenu");
		if (divMenu) {
			divMenu.style.display = "none"
		}
		$("#iframe").attr("src", obj.title + ".html");
	}
}

//�˵������ͣЧ��
function menuOn(obj) {
	obj.style.backgroundColor = "black";
	obj.style.color = "white";
}

function menuOff(obj) {
	obj.style.backgroundColor = "white";
	obj.style.color = "black";
}