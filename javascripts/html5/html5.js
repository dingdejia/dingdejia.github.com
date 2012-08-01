$(function () {

});

//显示菜单
function showMenu(obj) {
	var divMenu = document.getElementById("divMenu");
	divMenu.style.display = "block";
	divMenu.style.top = obj.offsetTop + "px";
	divMenu.style.left = (obj.offsetLeft - divMenu.clientWidth - 10) + "px";
}
//隐藏菜单
function hidMenu(obj) { 
	var divMenu = document.getElementById("divMenu");
	divMenu.style.display = "none"	
}

//菜单点击
function menuClick(obj) {
	if (obj.title) {		
		var divMenu = document.getElementById("divMenu");
		if (divMenu) {
			divMenu.style.display = "none"
		}
		$("#iframe").attr("src", obj.title + ".html");
	}
}

//菜单鼠标悬停效果
function menuOn(obj) {
	obj.style.backgroundColor = "black";
	obj.style.color = "white";
}

function menuOff(obj) {
	obj.style.backgroundColor = "white";
	obj.style.color = "black";
}