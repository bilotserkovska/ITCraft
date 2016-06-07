$(document).ready(function(){
	$('.carousel').carousel()
	$('figure').on('inview', function(event, isInView) {
		$('.sign-left').animate({
				opacity: 1
			},800, function(){
				$('.sign-center').animate({
					opacity: 1
				},800, function(){
					$('.sign-right').animate({
						opacity: 1
					},800);
				});
		});			

	});
});