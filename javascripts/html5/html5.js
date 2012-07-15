$(function () {

});

function menuClick(obj) {
	if (obj.title) {
		$("#iframe").attr("src", obj.title + ".html");
	}
}