
(function($){
	$(function(){



  var docEl = $(document),
  headerEl = $('header'),
  headerWrapEl = $('.wrapHead'),
  navEl = $('nav'),
  linkScroll = $('.scroll');

  if (docEl.scrollTop() > 100) {
    headerEl.addClass('fixed-to-top');
    headerWrapEl.addClass('fixed-to-top');
    navEl.addClass('fixed-to-top');
}
docEl.on('scroll', function () {
  if (docEl.scrollTop() > 100) {
      headerEl.addClass('fixed-to-top');
      headerWrapEl.addClass('fixed-to-top');
      navEl.addClass('fixed-to-top');
  } else {
      headerEl.removeClass('fixed-to-top');
      headerWrapEl.removeClass('fixed-to-top');
      navEl.removeClass('fixed-to-top');
  }
});

linkScroll.click(function (e) {
  e.preventDefault();
  
   //Calculate the target scroll position, subtracting 86 pixels
  var targetScrollPosition = $(this.hash).offset().top 

  //const targetScrollPosition = ( $(window).width() > 768 ) ? $(this.hash).offset().top - headerEl.innerHeight() - 0 : $(this.hash).offset().top - 86;

  $('body, html').animate({
      scrollTop: targetScrollPosition
  }, 1000);
});
    

        if ($("select#mobile-dropdown").length) {
          $("select#mobile-dropdown").selectric({
          });
      }


      var header = new Headroom(document.querySelector('header'), {
        tolarence: 80,
        offset: 55,
        classes: {

            initial: 'headroom',
            pinned: 'slidedown',
            unpinned: 'slideup',
            top: "headroom--top",
            notTop: "headroom--not-top",
            bottom: "headroom--bottom",
            notBottom: "headroom--not-bottom",
            frozen: "headroom--frozen",

        }
    });
    header.init();




  //Review Section Slider
  if ($('.review-slider-wrap').length) {
    $('.review-slider-wrap').slick({
        arrows:true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 1500,
        speed: 700,
        navigation:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
        centerMode: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    speed: 2500,
                    swipe: true,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    speed: 1500,
                    swipe: true,
                }
            },

        ]
    })
}



//accordian + image

var slider = '#slider-accordion';
                    $(slider).find(".experiences-accordion > ul > li ").eq(0).addClass('active')
                    $(slider).find(".experiences-accordion > ul > li > h5").eq(0).addClass('active')
                    $(slider).find("div.accordionslider-inner > div.accordion-slider-item").eq(0).addClass('thumb-show')
                    $(slider).find(".experiences-accordion > ul > li").each(function(i){
                        var $this = $(this);
                        $this.find(" > h5").on("click touch", function(){
                            if( $(this).hasClass('active') ) return false
                            else{
                                var sliderID = $(this).parents('.experiences-row').attr('id');

                                $('#'+sliderID).find(".experiences-accordion > ul > li").removeClass("active")
                                $this.addClass("active");
                                $('#'+sliderID).find(".experiences-accordion > ul > li > h5").removeClass("active")
                                $(this).addClass('active')

                                $('#'+sliderID).find(".experiences-item-content").slideUp();
                                 $this.find(" > .experiences-item-content").slideDown();
                                 $('#'+sliderID).find("div.accordionslider-inner > div.accordion-slider-item").removeClass('thumb-show')
                                 $('#'+sliderID).find("div.accordionslider-inner > div.accordion-slider-item").eq(i).addClass('thumb-show')

                            }
                        })
                    }) 




//faq

$(".faqs-item").each(function () {
  var $this = $(this);
  $this.find(" > h5").on("click touch", function () {
      $(".faqs-item").removeClass("active")
      $(".faqs-item .faqs-accordion-item-content").slideUp();
      if ($this.find(".faqs-accordion-item-content:visible").length) {
          $(".faqs-item").removeClass("active")
          $(".faqs-item .faqs-accordion-item-content").slideUp();
      } else {
          $this.addClass("active")
          $(".faqs-item .faqs-accordion-item-content").slideUp();
          $this.find(" > .faqs-accordion-item-content").slideDown();
      }
  })
})



// Function to initialize the Tab Slick Slider 
function initializeSlider() {
  var slider = $('.slider-tab');
  slider.slick({
      slidesToShow: 3, // Adjust the number of visible slides as needed for desktop
      slidesToScroll: 1,
      responsive: [
          {
              breakpoint: 768, // Adjust the breakpoint as needed for mobile
              settings: {
                  slidesToShow: 1, // Number of visible slides on mobile
                  autoplay: true,
                  arrows: false,
                  dots: false,
              }
          }
      ]
  });
}

// Initialize the slider on page load
initializeSlider();

// Function to handle tab button clicks
function handleTabClick(tabId) {
  $('.tab-button').removeClass('active');
  $('.tab-panel').removeClass('active');
  $('#' + tabId).addClass('active');
  $(`.tab-button[data-tab="${tabId}"]`).addClass('active');

  // Use Slick's next and previous methods to force a refresh
  $('.slider-tab').slick('slickNext').slick('slickPrev');
}

// Handle tab button clicks
$('.tab-button').click(function () {
  const tabId = $(this).data('tab');
  handleTabClick(tabId);
});

// Mobile dropdown toggle
$('#mobile-dropdown').change(function () {
  const tabId = $(this).val();
  handleTabClick(tabId);
});

// Initialize the slider when the window is resized
$(window).resize(function () {
  initializeSlider();
});



// Counter Tab slider

var $slider = $('.slider-for');
        if ($slider.length) {
            var currentSlide;
            var slidesCount;
            var sliderCounter = document.createElement('div');
            sliderCounter.classList.add('slide-count-wrap');

            var updateSliderCounter = function(slick, currentIndex) {
                currentSlide = slick.slickCurrentSlide() + 1;
                slidesCount = slick.slideCount;
                $(sliderCounter).html('<span class="current">'+ currentSlide + '</span>' + '<em>' + ' / ' + '</em>' + '<span class="total">'+ slidesCount + '</span>')
            };

            $slider.on('init', function(event, slick) {
                $slider.append(sliderCounter);
                updateSliderCounter(slick);
            });

            $slider.on('afterChange', function(event, slick, currentSlide) {
                updateSliderCounter(slick, currentSlide);
            });

            $slider.slick({
                dots: false,
                arrows:true,
                autoplay:false,
                autoplaySpeed:2000,
                smartspeed: 100,
                infinite: true,
                asNavFor: '.slider-nav',
                navigation:false,
                fade: true,
                slidesToShow:1,
                slidesToScroll: 1,
            });
        }



$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
 arrows:false,
  asNavFor: '.slider-for',
  dots: false,
  focusOnSelect: true
  
});



//faq destination


$(".destination-tab").each(function () {
  var $this = $(this);
  $this.find(" > h5").on("click touch", function () {
      $(".destination-tab").removeClass("active")
      $(".destination-tab .experiences-item-content").slideUp();
      if ($this.find(".experiences-item-content:visible").length) {
          $(".destination-tab").removeClass("active")
          $(".destination-tab .experiences-item-content").slideUp();
      } else {
          $this.addClass("active")
          $(".destination-tab .experiences-item-content").slideUp();
          $this.find(" > .experiences-item-content").slideDown();
      }
  })
})


// Content animation in-view

  var $animation_elements1 = $('.fadeIn-from-bottom');
  function check_if_in_view1() {
      var window_height1 = $window.height() / 1.15;
      var insetAmount1 = window_height1 / 10 // fifth of the screen
      var window_top_position1 = $window.scrollTop();
      var window_bottom_position1 = (window_top_position1 + window_height1) - insetAmount1;

      $.each($animation_elements1, function () {
          var $element1 = $(this);
          var element_height1 = $element1.outerHeight();
          var element_top_position1 = $element1.offset().top;
          var element_bottom_position1 = (element_top_position1 + element_height1);

          //check to see if this current container is within viewport
          if (element_top_position1 <= window_bottom_position1) {
              $element1.addClass('is-visible');

          }
      });
  }
  $window.on('scroll orientationchange resize', check_if_in_view1);
  $window.trigger('scroll');




	})// End ready function.




//text bottom scroll hide

   
    var $animationElements = $(".anim-el"); // Select all elements with class "anim-el"
var $window = $(window);

function checkInView() {
    var windowHeight = $window.height();
    var scrollPosition = $window.scrollTop();
    var scrollThreshold = windowHeight / 5;

    // Show/hide an element with the ID "back-to-top" based on the scroll position
    if (scrollPosition > 200) {
        $("#back-to-top").fadeIn();
    } else {
        $("#back-to-top").fadeOut();
    }

    // Loop through all elements with class "anim-el"
    $animationElements.each(function () {
        var $element = $(this);
        var elementHeight = $element.outerHeight();
        var elementOffset = $element.offset().top;
        var elementBottom = elementOffset + elementHeight;
        var isInView = (elementOffset <= scrollPosition + windowHeight - scrollThreshold);

        // Add or remove the "in-view" class based on visibility in the viewport
        if (isInView) {
            $element.addClass("in-view");
        } else if (!$element.hasClass("anim-once")) {
            $element.removeClass("in-view");
        }
    });
}

$window.on("scroll", checkInView);
$window.trigger("scroll"); 



// Text animation in view

   
window.onload = function() {
    $('.hero-content h1').delay(700).css({'opacity' : 1 })
       
    $(window).scroll(function(){
        $(".top").css("opacity", 1 - $(window).scrollTop() / 300);
      });


    if ($('.split-heading').length) {
        
      let splitWords = function (selector) {
          var elements = document.querySelectorAll(selector);
    
          elements.forEach(function (el) {
              el.dataset.splitText = el.textContent;
              el.innerHTML = el.textContent
                  .split(/\s/)
                  .map(function (word) {
                      return word
                          .split("-")
                          .map(function (word) {
                              return '<dfn class="word">' + word + "</dfn>";
                          })
                          .join('<dfn class="hyphen">-</dfn>');
                  })
                  .join('<dfn class="whitespace"> </dfn>');
          });
      };
    
      let splitLines = function (selector) {
          var elements = document.querySelectorAll(selector);
    
          splitWords(selector);
    
          elements.forEach(function (el) {
              var lines = getLines(el);
    
              var wrappedLines = "";
              lines.forEach(function (wordsArr) {
                  wrappedLines += '<dfn class="line"><dfn class="words">';
                  wordsArr.forEach(function (word) {
                      wrappedLines += word.outerHTML;
                  });
                  wrappedLines += "</dfn></dfn>";
              });
              el.innerHTML = wrappedLines;
          });
      };
    
      let getLines = function (el) {
          var lines = [];
          var line;
          var words = el.querySelectorAll("dfn");
          var lastTop;
          for (var i = 0; i < words.length; i++) {
              var word = words[i];
              if (word.offsetTop != lastTop) {
                  // Don't start with whitespace
                  if (!word.classList.contains("whitespace")) {
                      lastTop = word.offsetTop;
    
                      line = [];
                      lines.push(line);
                  }
              }
              line.push(word);
          }
          return lines;
      };
    
      splitLines(".split-heading");
      
      
    
      let revealText = document.querySelectorAll(".split-heading");
    
     $('.split-heading').each(function () {
         var $this = $(this);
         $this.find('.words').each(function(i){
             $(this).css('transition', '1.2s cubic-bezier(0.19,1,0.22,1) transform')
             $(this).css('transition-delay', 0 + i * 0.2 + 's')
         })
     });
      
      var $animation_elements = $('.split-heading');
      var $window = $(window);
    
      function check_if_in_view() {
          var window_height = $window.height() / 1.1;
          var insetAmount = window_height / 10 // fifth of the screen
          var window_top_position = $window.scrollTop();
          var window_bottom_position = (window_top_position + window_height) - insetAmount;
    
          $.each($animation_elements, function () {
              var $element = $(this);
              var element_height = $element.outerHeight();
              var element_top_position = $element.offset().top;
              var element_bottom_position = (element_top_position + element_height);
    
              //check to see if this current container is within viewport
              if (element_top_position <= window_bottom_position) {
                  $element.addClass('is-visible');
    
              }
          });
      }
      $window.on('scroll orientationchange resize', check_if_in_view);
      $window.trigger('scroll');
    
    };
    }

 
    
	

})(jQuery)

