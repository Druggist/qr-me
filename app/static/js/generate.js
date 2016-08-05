$(document).ready(function(){
	$(".card-panel").removeClass('slide-up');
});

$("#submit").click(function () {

	var main = $("#main").val();
	var bg = $("#bg").val();
	var qr = kjua({
		text: $("#content").val(),
		render: 'image',
		ecLevel: 'H',
		fill: rgb2hex(main), 
		back: rgb2hex(bg),  
		rounded: ($("#rounded").is(':checked'))? 100 : 0,
		quiet: 1,
		size: 1500
	});
	
	$("#qr img").remove();
	$(".card-panel").addClass('slide-up');
	setTimeout(function(){
	$("form").addClass("hide");
	$("#qr").removeClass("hide");
	$("#qr").prepend(qr);
	$("#qr img").removeAttr("style");
	$("#qr img").addClass("materialboxed");
	$('.materialboxed').materialbox();
	$(".card-panel").removeClass('slide-up');
	},750);
});

$("#return").click(function () {
	$(".card-panel").addClass('slide-up');
	setTimeout(function(){
		$("#qr img").remove();
		$("form").removeClass("hide");
		$("#qr").addClass("hide");
		$(".card-panel").removeClass('slide-up');
	},750);
});

function rgb2hex(rgb){
	var red = rgb.red.toString(16);
	var green = rgb.green.toString(16);
	var blue = rgb.blue.toString(16);
	return '#' + red + green + blue;
}