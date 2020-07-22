var cust = $('.search-block');

console.log(cust);

(function ($) {
    var delhi = $('[delhi');
    var overlay = $('.overlay');
    var loc = $('.a span')
    overlay.attr("style", "display: flex");
    delhi.on('mouseover', function(){
        loc.attr("style", "display:none");
        overlay.attr("style", "display:flex");
      })
      delhi.on('mouseleave', function(){
        loc.attr("style", "display:block");
        overlay.attr("style", "display:none");
      })



    }(jQuery));
   