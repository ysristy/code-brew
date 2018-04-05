$(document).ready(function() {
$("img").attr('data-no-ratina');

    $(function(){
$(".icon a").hover(function(){
$(this).parents(".text-center").children('.more_effect').toggleClass('dd');
$(this).parents(".text-center").find('.more_effect a').toggleClass('dd1');
});

});
$(document).scroll(function() {
$ss = 0;
  var y = $(this).scrollTop();
  if (y > 1600) {
  //  $('.dd02').addClass('dd01_ani');
$ss = 1;
  }
if($ss==1){
setTimeout(function(){
//$(".dd01").removeClass('dd02');
//$(".dd01").addClass('dd02_ani');
},600);
}
});


var windowWidth = $(window).width();
            for(var i=0; i<13; i++) {
                // var top = Math.random()*2200 - 50;
                // var left = Math.random()*(windowWidth-20) - 20;
                // var x = Math.random()*2000-1000;
                // var y = Math.random()*2000-1000;
                // var z = Math.random()*1500-1000;
                // var rotateZ = Math.random()*600-300;
                // var fromScroll = Math.max(0, top - 200 - Math.random()*800);
                // var distance = 200+Math.random()*100;
                // if(left>windowWidth)
                // {
                //     left=windowWidth;
                // }
                // if(fromScroll>windowWidth)
                // {
                //     fromScroll=windowWidth;
                // }
                var top = Math.random()*450 - 100;
                var left = Math.random()*(windowWidth) - 200;
                var x = Math.random()*1500-1200;
                var y = Math.random()*1500-1200;
                var z = Math.random()*1000-1000;
                var rotateZ = Math.random()*600-300;
                var fromScroll = Math.max(0, top - 200 - Math.random()*800);
                var distance = 20+Math.random()*10;
               /* $(".main-header").append('<div class="st star'+((Math.random()>.5)?'1':'2')+'" style="top:' + top + 'px; left:' + left + 'px;" data-parallax=\'{"x":' + x + ',"y":' + y + ',"z":' + z + ',"rotateZ":' + rotateZ + ',"from-scroll":' + fromScroll + ',"distance":' + distance + '}\'><img src="<?php echo get_template_directory_uri();?>/images/ic-blur.png" alt="blur"/></div>');*/
            }



$("#talk1").click(function(){
$("#myModal").modal();
});



$('#frm22 input,textarea,select').tooltipster({ 
                                                trigger: 'custom', // default is 'hover' which is no good here
                                                onlyOne: false,    // allow multiple tips to be open at a time
                                                position: 'top',  // display the tips to the right of the element
                                        timer : 2000,
                                         theme: 'tooltipster-shadow'
                                             });

        $("#frm22").validate({
 errorPlacement: function (error, element) {
            $(element).tooltipster('update', $(error).text());
            $(element).tooltipster('show');
        },
  success: function (label, element) {
            $(element).tooltipster('hide');
        },
  
  
 /*onkeyup: false,*/
 rules: {
    uname:{required:true},
  email: { 
   required: true,email:true,

  },
phone_number:{required:true},
projects:{required:true},
deadlines:{required:true},
spend_amount:{required:true},
custom_file:{required:true}
  
 },
 
 messages: {
  uname: {
   required: "Fill Name.",
    
  },
  
  email: {
   required: "Fill Email.",
    
  },
  phone_number: {
   required: "Fill Phone.",
    
  },
projects:{required:"Write about Projects"},
deadlines:{required:"Mention your Deadlines"},
spend_amount:{required:"Choose Spend Amount"},
custom_file:{required:"Chhose File"}
  
  
 },
 
 
});




     $("#input-6").intlTelInput({
         // allowDropdown: false,
      //autoHideDialCode: false,
      autoPlaceholder: false,
      dropdownContainer: "body",
      // excludeCountries: ["sh"],
      //  geoIpLookup: function(callback) {
      //   $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
      //     var countryCode = (resp && resp.country) ? resp.country : "";
      //     callback(countryCode);
      //   });
      // },
       initialCountry: "us",
       nationalMode: false,
      // numberType: "MOBILE",
      // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
      // preferredCountries: ['cn', 'jp'],
      // separateDialCode: true

      });

     
   // alert('123');
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});

	// Waypoints
	$('.work').waypoint(function() {
		$('.work').addClass('animated fadeIn');
	}, {
		offset: '75%'
	});
	$('.download').waypoint(function() {
		$('.download .btn').addClass('animated tada');
	}, {
		offset: '75%'
	});

	// Fancybox
	//$('.work-box').fancybox();
	// Flexslider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
	});

	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
});


$(document).ready(function() {
    //'use strict';

    // init cubeportfolio
    $('#js-grid-awesome-work').cubeportfolio({
        filters: '#js-filters-awesome-work',
        loadMore: '#js-loadMore-awesome-work',
        loadMoreAction: 'click',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'scaleSides',
        gapHorizontal: 30,
        gapVertical: 30,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 2
        }, {
            width: 768,
            cols: 2
        },{
            width: 640,
            cols: 2
        }, {
            width: 480,
            cols: 1,
			
        }, {
            width: 320,
            cols: 1
        }],
        caption: 'zoom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 400,

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function(url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;
            //console.log(url);
            //return;
            $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 10000
                })
                .done(function(result) {
                    t.updateSinglePage(result);
                })
                .fail(function() {
                    t.updateSinglePage('AJAX Error! Please refresh the page!');
                });
        },
    });
});



$(document).ready(function() {

    // init cubeportfolio
    $('#js-grid-meet-the-team').cubeportfolio({
        filters: '#js-filters-meet-the-team',
        layoutMode: 'grid',
        defaultFilter: '.finance',
        animationType: 'sequentially',
        gapHorizontal: 0,
        gapVertical: 0,
		
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1366,
            cols: 1,
			margin:0
        }, {
            width: 1100,
            cols: 1
        }, {
            width: 800,
            cols: 1
        },
		{
            width: 768,
            cols: 1
        },
		 {
            width: 480,
            cols: 1
        }, {
            width: 320,
            cols: 1
        }],
        caption: 'fadeIn',
        displayType: 'lazyLoading',
        displayTypeSpeed: 100,
		

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function(url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;
           // alert(url);
            //return;
            $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 10000,
					
					
                })
                .done(function(result) {
                    t.updateSinglePage(result);
                })
                .fail(function() {
                    t.updateSinglePage('AJAX Error! Please refresh the page!');
                });
        },
    });
});





















if("ontouchstart" in window){
    document.documentElement.className = document.documentElement.className + " touch";
}
if(!$("html").hasClass("touch")){
    /* background fix */
    $(".parallax").css("background-attachment", "fixed");
}



/* fix vertical when not overflow
call fullscreenFix() if .fullscreen content changes */
function fullscreenFix(){
    var h = $('body').height();
    // set .fullscreen height
    $(".content-b").each(function(i){
        if($(this).innerHeight() <= h){
            $(this).closest(".fullscreen").addClass("not-overflow");
        }
    });
}
$(window).resize(fullscreenFix);
fullscreenFix();

/* resize background images */
function backgroundResize(){
    var windowH = $(window).height();
    $(".background").each(function(i){
        var path = $(this);
        // variables
        var contW = path.width();
        var contH = path.height();
        var imgW = path.attr("data-img-width");
        var imgH = path.attr("data-img-height");
        var ratio = imgW / imgH;
        // overflowing difference
        var diff = parseFloat(path.attr("data-diff"));
        diff = diff ? diff : 0;
        // remaining height to have fullscreen image only on parallax
        var remainingH = 0;
        if(path.hasClass("parallax") && !$("html").hasClass("touch")){
            var maxH = contH > windowH ? contH : windowH;
            remainingH = windowH - contH;
        }
        // set img values depending on cont
        imgH = contH + remainingH + diff;
        imgW = imgH * ratio;
        // fix when too large
        if(contW > imgW){
            imgW = contW;
            imgH = imgW / ratio;
        }
        //
        path.data("resized-imgW", imgW);
        path.data("resized-imgH", imgH);
        path.css("background-size", imgW + "px " + imgH + "px");
    });
}
$(window).resize(backgroundResize);
$(window).focus(backgroundResize);
backgroundResize();

/* set parallax background-position */
function parallaxPosition(e){
    var heightWindow = $(window).height();
    var topWindow = $(window).scrollTop();
    var bottomWindow = topWindow + heightWindow;
    var currentWindow = (topWindow + bottomWindow) / 2;
    $(".parallax").each(function(i){
        var path = $(this);
        var height = path.height();
        var top = path.offset().top;
        var bottom = top + height;
        // only when in range
        if(bottomWindow > top && topWindow < bottom){
            var imgW = path.data("resized-imgW");
            var imgH = path.data("resized-imgH");
            // min when image touch top of window
            var min = 0;
            // max when image touch bottom of window
            var max = - imgH + heightWindow;
            // overflow changes parallax
            var overflowH = height < heightWindow ? imgH - height : imgH - heightWindow; // fix height on overflow
            top = top - overflowH;
            bottom = bottom + overflowH;
            // value with linear interpolation
            var value = min + (max - min) * (currentWindow - top) / (bottom - top);
            // set background-position
            var orizontalPosition = path.attr("data-oriz-pos");
            orizontalPosition = orizontalPosition ? orizontalPosition : "50%";
            $(this).css("background-position", orizontalPosition + " " + value + "px");
        }
    });
}
if(!$("html").hasClass("touch")){
    $(window).resize(parallaxPosition);
    //$(window).focus(parallaxPosition);
    $(window).scroll(parallaxPosition);
    parallaxPosition();
}

      // $(".navbar-fixed-top").autoHidingNavbar();

    // very simple to use!
    $(document).ready(function() {
        if($(window).width() < 767)
    {
         $('.js-activated').dropdown();
    }else{
         $('.js-activated').dropdownHover().dropdown();
    }
     
    });

$(function(){

$('#flex_bottom').flexslider({
        animation: "slide",
         itemWidth: 400
    });
    $("#apply_btn").click(function(){
            $('html, body').animate({
        scrollTop: $(".apply_div").offset().top
    }, 1400);
        });


});
