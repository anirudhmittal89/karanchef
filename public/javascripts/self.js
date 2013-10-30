



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

/*
$(".nochrome").click(function(){
    var value=$("#demo1").val();
    var src="";
    console.log(value);
    for(each in search){
      
      if(search[each].name == value){
        console.log(search[each].name);
        src=search[each].src;
        window.location="/info?src="+search[each].src+"&caption="+search[each].name;
      }
    }
    
});
*/
/*
            $(function() {
                $('#ei-slider').eislideshow({
                    animation           : 'center',
                    autoplay            : true,
                    slideshow_interval  : 3000,
                    titlesFactor        : 0
                });
            });
        

    var $container = $('.portfolioContainer');
    */
/*
    $container.imagesLoaded( function(){
    $container.isotope({
        filter: '*',
          transformsEnabled: false,
         layoutMode: 'masonry',
            onLayout: function () {
                $(window).trigger("scroll");
            },
        animationOptions: {
            duration: 200,
            easing: 'linear',
            columnWidth: function(containerWidth){
                return containerWidth/4;
            },
            queue: false
        }

    });
});
*/

    $('img.lazy').lazyload({
  effect: "fadeIn",
  skip_invisible : false
});

     $('img').lazyload({
  effect: "fadeIn",
  skip_invisible : false
});

     $("button.navbar-toggle").live("click",function(){
       $(this).toggleClass("in"); 
       $(".navbar-collapse").toggleClass("in");
     });
 /*
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
*/

	});