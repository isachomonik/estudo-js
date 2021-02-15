$(function(){
	$('#yellow').click(function(){
		$('p').css("color", "purple");
		$('p').fadeOut(10);
		$('p').delay(3000);
		$('p').fadeIn(10000);
	});

	$('#grey').click(function(){
		$('p').css("background-color", "grey");
		$('#sms').text("Han Solo shoot first");
		$('#sms').delay(3000);
		$('#sms').fadeOut();

	});
});