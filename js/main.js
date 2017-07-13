var whp = $(window).height() * 1.1;

$(document).ready(function(){
    $('#show-nav').click(function(event){
        $('.slide-nav').animate({width:'210px'},350);
    });
    $('#hide-nav').click(function(event){
        $('.slide-nav').animate({width:'0'},350);
    });

    var introEL = $('.intro');
    var introHeading = introEL.find('img').height();
    console.log(introHeading);
    var windowH = window.innerHeight;
    introEL.css('padding', 100  + 'px 0');
    window.onresize = function(){
        windowH = window.innerHeight;
        introEL.css('padding', 100 + 'px 0');
    };

    $('.fa-css3, .fa-pencil, #fa-clock, .fa-life-ring').mouseover(function(event){
        $(this).animate({
            backgroundColor: '#161f32',
        },200);
    });
    $('.fa-css3, .fa-pencil, #fa-clock, .fa-life-ring').mouseout(function(event){
        $(this).animate({
            backgroundColor: '#3d506f',
        },200);
    });
    $('.purchase').mouseover(function(event){
        $(this).animate({
            backgroundColor: '#fff',
            color: '#1d263a'
        },200);
    });
    $('.purchase').mouseout(function(event){
        $(this).animate({
            backgroundColor: '#222c40',
            color: '#fff'
        },200);
    });
    $('.profile').mouseover(function(event){
        $(this).animate({
            backgroundColor: '#fff'
        },200);
    });
    $('.profile').mouseout(function(event){
        $(this).animate({
            backgroundColor: '#161f32'
        },200);
    });

    $(document).scroll(function(event){
        console.log("scroll");
        revealOnScroll();
    });

    $('.menu-items').click(function(event){
        var str = $(event.target).text();
        switch(str){
            case 'Home':
            goToDiv('#intro-div');
            break;
            case 'Services':
            goToDiv('#services-div');
            break;
            case 'Portfolio':
            goToDiv('#portfolio-div');
            break;
            case 'About':
            goToDiv('#about-us-div');
            break;
            case 'Contact':
            goToDiv('#contact-us-div');
            break;
            default:
        }
    });

    $('.about-us-icons').click(function(event){
        $('#story-div').removeClass('hidden').stop().hide().fadeIn();
        var pos = $(this).offset().left;
        var width = Math.round($(this).width()/2) ;
        $('.arrow-up').css('left',pos+width+'px');

    });
    $('#hide-story').click(function(event){
        $('#story-div').addClass('hidden').stop().hide().fadeOut();
    });

    $('#header-logo').click(function(event){
        goToDiv('#intro-div');
    });

    var arr = ['portfolio1.jpg','portfolio2.jpg','portfolio3.jpg',
                'portfolio4.jpg','portfolio5.jpg','portfolio6.jpg','portfolio7.jpg','portfolio8.jpg'];
    $('.portfolio-items').click(function(event){
                var faElement = "<i class='fa fa-arrow-up fa-border' aria-hidden=true style='text-align: center;'></i>";
        $(this).append(faElement);
        if(!$('#portfolio-items-fit').hasClass('hidden')){
            $('#portfolio-items-fit').addClass('hidden');
            $('.fa-arrow-up').remove();
        }
        else{
            $('#portfolio-items-fit').removeClass('hidden');
        }



        var id = $(this).attr('id');
        switch (id){
            case 'portfolio1':
                break;
                case 'portfolio-item-1':
                $('#portfolio-items-fit').css({'background-image':'url(images/' + arr[0] + ')','background-size':'cover','background-repeat':'no-repeat'});
                break;
                case 'portfolio-item-2':
                $('#portfolio-items-fit').css({'background-image':'url(images/' + arr[1] + ')','background-size':'cover','background-repeat':'no-repeat'});
                break;
                case 'portfolio-item-3':
                $('#portfolio-items-fit').css({'background-image':'url(images/' + arr[2] + ')','background-size':'cover','background-repeat':'no-repeat'});
                break;
                case 'portfolio-item-4':
                $('#portfolio-items-fit').css({'background-image':'url(images/' + arr[3] + ')','background-size':'cover','background-repeat':'no-repeat'});
                break;
                case 'portfolio-item-5':
                $('#portfolio-items-fit').css({'background-image':'url(images/' + arr[4] + ')','background-size':'cover','background-repeat':'no-repeat'});
                break;
                case 'portfolio-item-6':
                $('#portfolio-items-fit').css({'background-image':'url(images/' + arr[5] + ')','background-size':'cover','background-repeat':'no-repeat'});
                break;
                case 'portfolio-item-7':
                $('#portfolio-items-fit').css({'background-image':'url(images/' + arr[6] + ')','background-size':'cover','background-repeat':'no-repeat'});
                break;
                case 'portfolio-item-8':
                $('#portfolio-items-fit').css({'background-image':'url(images/' + arr[7] + ')','background-size':'cover','background-repeat':'no-repeat'});
                break;
            default:
        }

                    $('#portfolio-items-fit').backgroundDraggable();

    });

    // $('.portfolio-items').mouseout(function(event){
    //     //$('#portfolio-items-fit').addClass('hidden');
    // });

});

function goToDiv(divId){
    $('html,body').animate({
        scrollTop: $(divId).offset().top},'slow');
}

function revealOnScroll(){
    var scrolled = $(window).scrollTop();
    var offsetTop;
    $(".revealOnScroll:not(.animated)").each(function () {
      offsetTop = $(this).offset().top;
      if (scrolled + whp > offsetTop) {
        if ($(this).data('timeout')) {
          window.setTimeout(function(){
            $(this).addClass('animated ' + $(this).data('animation'));
        }, parseInt($(this).data('timeout'),10));
      } else {
          $(this).addClass('animated ' + $(this).data('animation'));
      }
  }
});
}