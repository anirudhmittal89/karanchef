$(window).load(function() {
/*		$("#columns").masonry({

			itemSelector:".pin",
			columnWidth: 135,
			   isFitWidth: true
		});imagesLoaded(function() {
   $('#columns').masonry('reload');
  });
*/
/*
var $container = $('#columns');

$container.isotope({
    itemSelector : '#columns div.pin',
});


$('#ncont a').click(function(){
    $.scrollTo( '#fcont', 1200, {axis:'y'} );   
});

$('#filters a').click(function(){
    var selector = $(this).attr('data-filter');
    $container.isotope({ filter: selector });
    return false;
});
*/

    var $container = $('.portfolioContainer');

    $container.imagesLoaded( function(){
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            columnWidth: 435,
            queue: false
        }

    });
});

    $("div.pin a img").lazyload({
     effect : "fadeIn"
 });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 


	});