// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .



$(document).ready(function(){

	//function for click on nav icon slide out off-canvas navigation
	$(".burger").on('click', function(){
		//NOT NEEDED - PREVIOUS CODE
		//$('.off-vp-nav').css('display','block');
		//$('.off-vp-nav').slideDown();
		$(".off-vp-nav").animate({width:'toggle'},350);
	});
	$(".burger").click(function(e){
		e.stopPropagation();
	});
	$(".off-vp-nav").click(function(e){
		e.stopPropagation();
	});

	//function to close off-canvas navigation on click elsewhere
	$(document).click(function(){
		if ($('.off-vp-nav').css('display') == 'block') {
			$(".off-vp-nav").animate({width:'toggle'},350);
		};
	});

	$(document).click(function(){
		$(".intro").fadeOut(2000)
	});

	$(document).click(function(){
	if ($('.intro').css('display') == 'none') {
				$('body').css("overflow", "scroll");
		};
		})
});