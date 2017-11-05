$(function() {
	var boton = $('#menumovil');
	var menu =     $('nav ul');
	menuHeight=menu.height();

	$(boton).on('click', function(e){
		e.preventDefault();
		menu.slideToggle();
	});
	$(window).resize(function(){

		var w=$(window).width();
		if(w > 320 && menu.is(':hidden')){
			menu.removeAttr('style');
		}
	});
});