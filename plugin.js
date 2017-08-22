var images= [{src:"http://www.prelovac.com/vladimir/wp-content/uploads/2008/03/example.jpg",alt:'alt la prima poza', text:'Lorem ipsum 1'},
  {src:"http://szotarunk.hu/keptar_idegenszavak/kozepeskep/886_1.jpg", alt:"alt la a doua poza", text:'Lorem ipsum 2'},
  {src:"https://www.w3schools.com/bootstrap/sanfran.jpg", alt:"alt la a treia poza", text:'Lorem ipsum 3'},
  {src:"https://c1.staticflickr.com/9/8488/8226533621_a6544cd733_b.jpg", alt:"alt la a patra poza", text:'Lorem ipsum 4'},
  {src:"http://www.electriclemonade.photography/wp-content/uploads/2017/04/portland-bill-012.jpg", alt:"alt la a cincea poza", text:'Lorem ipsum 5'}];
$(function(){
	
	for(var i=0; i < images.length; i++){
		var img = "<img src='"+ images[i].src + "' alt='" + images[i].alt +"'>";
		$("#slider").append(img);

	}
	$("#slider").slider({
		animate: true, 
		transitionTime: 115000,
		vertical: true,
		displayPrevNext: true,
		infinitTransition: true,
		slideEl: "img"
	});
	
	$("#test").slider({
		animate: true, 
		transitionTime: 115000,
		vertical: false,
		displayPrevNext: true,
		infinitTransition: false,
		slideEl: "li"
	});
	$("#test1").slider({
		animate: true, 
		transitionTime: 5000,
		vertical: false,
		displayPrevNext: true,
		infinitTransition: true,
		slideEl: "li"
	});

});

(function ( $ ) {
  $.fn.slider = function( obj ) {
	var settings = $.extend({
      // These are defaults.
      animate: false,
      transitionTime: 3000,
      vertical: true,
      displayPrevNext: true,
      infinitTransition: true,
      slideEl: "li"
    }, obj );
	
	initializeSlider(this);
    function initializeSlider(slider){
		if (settings.vertical == true) {
			slider.wrap("<div class='slideshow-plugin vertical'></div>");
		} else {
			slider.wrap("<div class='slideshow-plugin'></div>");
		}
		if ((settings.displayPrevNext == true) && (settings.vertical !=true)) {
			var sliderWrapper = slider.parent();
			sliderWrapper.wrap("<div class='extended-slideshow-plugin'></div>");
			var extendedWrapper = sliderWrapper.parent();
			var elementsNumber = sliderWrapper.find(settings.slideEl).length - 1;
			
			extendedWrapper.prepend("<img src='' class='prev' index='"+ elementsNumber +"'>");
			extendedWrapper.append("<img src='' class='next' index='1'>");
			
			//Default images.
			if (settings.slideEl == 'img') {
				extendedWrapper.find('.prev').attr("src", slider.children().last().attr("src"));
				extendedWrapper.find('.next').attr("src", slider.children().eq(1).attr("src"));
			} else {
				extendedWrapper.find('.prev').attr("src", slider.children().last().find('img').attr("src"));
				extendedWrapper.find('.next').attr("src", slider.children().eq(1).find('img').attr("src"));
			}
			
			//Prev.
			extendedWrapper.find('.prev').click(function(){
				var index= parseInt($(this).attr("index"));
				var slider = $(this).parent().find('.slides');
				var pager = $(this).parent().find('.pager');
				updateSlide(index, slider);
				
				var nextId= (index == slider.children().length-1) ? 0 : index + 1; 
				var prevId= (index == 0) ? slider.children().length-1 : index - 1;
				
				$(this).attr('index', prevId);
				$(this).siblings('.next').attr('index', nextId);
				
				//Default images.
				if (settings.slideEl == 'img') {
					$(this).attr('src', slider.children().eq(prevId).attr('src'));
					$(this).siblings('.next').attr('src', slider.children().eq(nextId).attr('src'));
				} else {
					$(this).attr('src', slider.children().eq(prevId).find('img').attr('src'));
					$(this).siblings('.next').attr('src', slider.children().eq(nextId).find('img').attr('src'));
				}
				pager.find('span.active').removeClass('active');
				pager.find('span[index="'+ index +'"]').addClass('active');
			});
			
			//Next.
			extendedWrapper.find('.next').click(function(){
				var index= parseInt($(this).attr("index"));
				var slider = $(this).parent().find('.slides');
				var pager = $(this).parent().find('.pager');
				updateSlide(index, slider);
				
				var nextId= (index == slider.children().length-1) ? 0 : index + 1; 
				var prevId= (index == 0) ? slider.children().length-1 : index - 1;
				
				$(this).attr('index', nextId);
				$(this).siblings('.prev').attr('index', prevId);
				
				//Default images.
				if (settings.slideEl == 'img') {
					$(this).attr('src', slider.children().eq(nextId).attr('src'));
					$(this).siblings('.prev').attr('src', slider.children().eq(prevId).attr('src'));
				} else {
					$(this).attr('src', slider.children().eq(nextId).find('img').attr('src'));
					$(this).siblings('.prev').attr('src', slider.children().eq(prevId).find('img').attr('src'));
				}
				
				pager.find('span.active').removeClass('active');
				pager.find('span[index="'+ index +'"]').addClass('active');
			});
		} else if((settings.displayPrevNext == true) && (settings.vertical == true)){
			var sliderWrapper = slider.parent();
			sliderWrapper.wrap("<div class='extended-slideshow-plugin vertical'></div>");
			var extendedWrapper = sliderWrapper.parent();
			var elementsNumber = sliderWrapper.find(settings.slideEl).length - 1;
			
			extendedWrapper.prepend("<img src='' class='prev' index='"+elementsNumber+"'>");
			extendedWrapper.append("<img src='' class='next' index='1'>");
			
			//Default images.
			if (settings.slideEl == 'img') {
				extendedWrapper.find('.prev').attr("src", slider.children().last().attr("src"));
				extendedWrapper.find('.next').attr("src", slider.children().eq(1).attr("src"));
			} else {
				extendedWrapper.find('.prev').attr("src", slider.children().last().find('img').attr("src"));
				extendedWrapper.find('.next').attr("src", slider.children().eq(1).find('img').attr("src"));
			}
			//Prev.
			extendedWrapper.find('.prev').click(function(){
				var index= parseInt($(this).attr("index"));
				var slider = $(this).parent().find('.slides');
				var pager = $(this).parent().find('.pager');
				updateSlide(index, slider);
				var nextId= (index == slider.children().length-1) ? 0 : index + 1; 
				var prevId= (index == 0) ? slider.children().length-1 : index - 1;
				$(this).attr('index', prevId);
				$(this).siblings('.next').attr('index', nextId);
				
				//Default images.
				if (settings.slideEl == 'img') {
					$(this).attr('src', slider.children().eq(prevId).attr('src'));
					$(this).siblings('.next').attr('src', slider.children().eq(nextId).attr('src'));
				} else {
					$(this).attr('src', slider.children().eq(prevId).find('img').attr('src'));
					$(this).siblings('.next').attr('src', slider.children().eq(nextId).find('img').attr('src'));
				}
				pager.find('span.active').removeClass('active');
				pager.find('span[index="'+ index +'"]').addClass('active');
			});
			//Next.
			extendedWrapper.find('.next').click(function(){
				var index= parseInt($(this).attr("index"));
				var slider = $(this).parent().find('.slides');
				var pager = $(this).parent().find('.pager');
				updateSlide(index, slider);
				var nextId= (index == slider.children().length-1) ? 0 : index + 1; 
				var prevId= (index == 0) ? slider.children().length-1 : index - 1;
				$(this).attr('index', nextId);
				$(this).siblings('.prev').attr('index', prevId);
				
				//Default images.
				if (settings.slideEl == 'img') {
					$(this).attr('src', slider.children().eq(nextId).attr('src'));
					$(this).siblings('.prev').attr('src', slider.children().eq(prevId).attr('src'));
				} else {
					$(this).attr('src', slider.children().eq(nextId).find('img').attr('src'));
					$(this).siblings('.prev').attr('src', slider.children().eq(prevId).find('img').attr('src'));
				}
				pager.find('span.active').removeClass('active');
				pager.find('span[index="'+ index +'"]').addClass('active');
			});
		}
		slider.addClass("slides");	
		slider.children().addClass("slide");
		slider.children().first().addClass("active");
		addPager(slider.parent(), slider);
		setInterval(changeSlide, settings.transitionTime, slider);
	};
	
	function addPager(sliderWrapper, slider){
      var pager = $('<div class="pager"></div>');
      for(var i=0; i < sliderWrapper.find(settings.slideEl).length; i++){
        if (i == 0){
          var page= $("<span class='active' index="+ i +">" + (i+1) +"</span>");
         pager.append(page);

        }else{
          page= $("<span index="+ i +">" + (i+1) +"</span>");
          pager.append(page);
        }
		spanAction(slider,page, pager);
      }
	   sliderWrapper.append(pager);
	}
	
	function spanAction(slider,page,pager){
        page.click(function(){
          pager.find(".active").removeClass("active");
          var index= parseInt(page.attr("index"));
          page.addClass("active");
		  
		  updateSlide(index, slider);
		  if (settings.displayPrevNext == true) {
			  var prev = $(this).closest('.extended-slideshow-plugin').find('.prev');
			  var next = $(this).closest('.extended-slideshow-plugin').find('.next');
			  var nextId= (index == slider.children().length-1) ? 0 : index + 1; 
			  var prevId= (index == 0) ? slider.children().length-1 : index - 1;
			  prev.attr('index', prevId);
			  next.attr('index', nextId);
			  
			  //Default images.
			  if (settings.slideEl == 'img') {
			    prev.attr('src', slider.children().eq(prevId).attr('src'));
			    next.attr('src', slider.children().eq(nextId).attr('src'));
			  } else {
			    prev.attr('src', slider.children().eq(prevId).find('img').attr('src'));
			    next.attr('src', slider.children().eq(nextId).find('img').attr('src'));
			  }
		  }
        });
    }
	
	function updateSlide(index, slider){
		if (settings.vertical == true) {
			var margin = index * 300;
			if(settings.animate == true) {
				slider.animate({
					"margin-top": "-" + margin 
				}, 1000);
			}else {
				slider.css({
					"marginTop": "-" + margin + "px" 
				});
			}
		} else {
			var margin = index * 720;
			if(settings.animate == true) {
				slider.animate({
					"margin-left": "-" + margin 
				}, 1000);
			}else {
				slider.css({
					"marginLeft": "-" + margin + "px" 
				});
			}
		}	
	};
	
	function changeSlide(slider) {
		var index= parseInt(slider.parent().find(".pager span.active").attr("index"));
		if(settings.infinitTransition == true){
			var nextId= (index == slider.children().length-1) ? 0 : index + 1;
			updateSlide(nextId,slider);
			slider.parent().find(".pager span.active").removeClass("active");
			slider.parent().find(".pager span[index=" + nextId + "]").addClass("active");
		}else{
			if(index < slider.children().length-1){
				var nextId= index + 1; 
				updateSlide(nextId,slider);
				slider.parent().find(".pager span.active").removeClass("active");
				slider.parent().find(".pager span[index=" + nextId + "]").addClass("active");
			}
		}
		if (settings.displayPrevNext == true) {
			if (nextId != null) {
				var prev = slider.closest('.extended-slideshow-plugin').find('.prev');
			    var next = slider.closest('.extended-slideshow-plugin').find('.next');
				index = nextId;
				var nextId= (index == slider.children().length-1) ? 0 : index + 1; 
			    var prevId= (index == 0) ? slider.children().length-1 : index - 1;
			    prev.attr('index', prevId);
			    next.attr('index', nextId);
			    if (settings.slideEl == 'img') {
				  prev.attr('src', slider.children().eq(prevId).attr('src'));
				  next.attr('src', slider.children().eq(nextId).attr('src'));
			    } else {
				  prev.attr('src', slider.children().eq(prevId).find('img').attr('src'));
				  next.attr('src', slider.children().eq(nextId).find('img').attr('src'));
			    }
			}
		  }
	};
	
    // Greenify the collection based on the settings variable.
    return this;

  };
}( jQuery ));
