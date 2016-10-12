$(window).load(function() { 
    $("#wrapper").animate({
        opacity: 1
    });
});

var slideshow_t;
var bAutoAdvance = false;
var photos_num = 0;
$(document).ready(function() {
    $("#gifs .gif").each(function(index,value) {
        $(this).css({
            "background-image": "url('"+$(this).data("src")+"')"
        });
    });

    photos_num = $("#gifs .gif").length;

    slideShow();

    $(document).keyup(function(event){
        console.log( event.keyCode );
        
        switch (event.keyCode) {
            case 37:
                prevPhoto();
                break;
            case 39:
                nextPhoto();
                break;
            case 76:
                bAutoAdvance = !bAutoAdvance;
                slideshow_t = setTimeout(function() {
                    nextPhoto();
                }, 3000);
                break;
            default:
                if( (event.keyCode - 48) < photos_num ) {
                    goToPhoto((event.keyCode - 48));    
                }
                break;
        }
    });
});

function slideShow() {
    clearTimeout( slideshow_t );
    
    $("#gifs .gif").first().addClass("on");

    if( bAutoAdvance ) {
        slideshow_t = setTimeout(function() {
            nextPhoto();
        }, (60 * 1000));
    }
}

function goToPhoto(index) {
    clearTimeout( slideshow_t );

    $("#gifs .on").removeClass("on");
    $("#gifs .gif:eq("+index+")").addClass("on");

    if( bAutoAdvance ) {
        slideshow_t = setTimeout(function(){
            nextPhoto();
        }, (60 * 1000));
    }
}

function nextPhoto() {
    clearTimeout( slideshow_t );

    if( $("#gifs .on").next().length ) {
        $("#gifs .on").removeClass("on").next().addClass("on");
    } else {
        $("#gifs .gif .on").removeClass("on");
        $("#gifs .gif").first().addClass("on");
    }

    if( bAutoAdvance ) {
        slideshow_t = setTimeout(function() {
            nextPhoto();
        }, (60 * 1000));
    }
}

function prevPhoto() {
    clearTimeout( slideshow_t );

    if( $("#gifs .on").prev().length ) {
        $("#gifs .on").removeClass("on").prev().addClass("on");
    } else {
        $("#gifs .gif .on").removeClass("on");
        $("#gifs .gif").last().addClass("on");
    }

    if( bAutoAdvance ) {
        slideshow_t = setTimeout(function(){
            nextPhoto();
        }, (60 * 1000));
    }
}
