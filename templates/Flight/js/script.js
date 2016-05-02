$(document).ready(function(){

	// admin bar fix
    $(function(){
    if($('#adminbar').length > 0){
        $('html').addClass('admin');
    }
    });
	
	
	// when scrolled to position, highlight the buttons at the top of the page	
	$(function() {
	    //caches a jQuery object containing the header element
	    var navigation = $(".navigation");
	    $(window).scroll(function() {
	        var scroll = $(window).scrollTop();

	        if (scroll >= 800) {
	            navigation.addClass("active");
	        } else {
	            navigation.removeClass("active");
	        }
	    });
	});	
			
			
	// show hide nav on mobile
	$("nav").click(function(){
		$("nav ul").toggleClass("active");
	});
		
			
	// show hide nav
	$(function() {
		$('.nav-icon').on('click', function() {
			$(this).toggleClass('open');
			$("nav.nav-select").toggleClass('highlight');
			$("nav.navigation").toggleClass('open');
			$("body").toggleClass('scroll');
		});
	});


    // relocate blog meta info
    $('.blogList').children('ul').children('li').each(function(){
		var blogMetaInfo = $('.postInfo',this);
		$(blogMetaInfo).remove();
		$('.postTitle',this).after(blogMetaInfo);
    });


    // hide address bar when page loads on mobile devices
    window.top.scrollTo(0, 1);


    // fix zoom issue when switching to landscape on iOS
    if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
        var viewportmeta = document.querySelector('meta[name="viewport"]');
        if (viewportmeta) {
            viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
            document.body.addEventListener('gesturestart', function () {
                viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
            }, false);
        }
    }

	// rewrites 
    $('.productDetailQuantity label').replaceWith(' Qty: ');  // products quantity
    $('th.cartDescription').replaceWith(' <th colspan="2" class="cartDescription">Things You Want</th> ');  // checkout products description
    $('th.cartQuantity').replaceWith(' <th class="cartQuantity">Quantity</th> ');  // checkout products quantity
    $('td.cartDiscount label').replaceWith(' <label>Discount Code</label>');   // discount code label

});


document.createElement("article");
document.createElement("section");
document.createElement("nav");
document.createElement("header");
document.createElement("footer");
document.createElement("aside");