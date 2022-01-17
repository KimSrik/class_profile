let windowScrollTop;
$(window).scroll(function(){
    windowScrollTop = $(window).scrollTop();
    console.log(windowScrollTop);
    if(windowScrollTop==0){
        $('.header').css({
            backgroundColor : 'rgb(177, 177, 255)',
        });
        $('.nav-list li').css({
            color: '#000',
            backgroundColor: '#fff',
        });
    }else{
        $('.header').css({
            backgroundColor : '#ffff7d',
        });
        $('.nav-list li').css({
            color: '#fff',
            backgroundColor: '#000',
        });
    }

    if(windowScrollTop >= 0 && windowScrollTop < 400){
        $('.header img').css({
            border: '2px solid #f00',
        })
        $('.nav-list li:first-child').css({
            border: 'none',
        })
        $('.nav-list li:nth-child(2)').css({
            border: 'none',
        })
        $('.nav-list li:last-child').css({
            border: 'none',
        })
    }else if(windowScrollTop >= 400 && windowScrollTop < 800){
        $('.header img').css({
            border: 'none',
        });
        $('.nav-list li:first-child').css({
            border: '2px solid #f00',
        })
        $('.nav-list li:nth-child(2)').css({
            border: 'none',
        })
        $('.nav-list li:last-child').css({
            border: 'none',
        })
    }else if(windowScrollTop>=800 && windowScrollTop < 1120){
        $('.header img').css({
            border: 'none',
        });
        $('.nav-list li:first-child').css({
            border: 'none',
        })
        $('.nav-list li:nth-child(2)').css({
            border: '2px solid #f00',
        })
        $('.nav-list li:last-child').css({
            border: 'none',
        })
    }else if(windowScrollTop>=1120){
        $('.header img').css({
            border: 'none',
        });
        $('.nav-list li:first-child').css({
            border: 'none',
        })
        $('.nav-list li:nth-child(2)').css({
            border: 'none',
        })
        $('.nav-list li:last-child').css({
            border: '2px solid #f00',
        })
    }
})