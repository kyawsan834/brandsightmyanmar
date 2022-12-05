$(document).ready(function () {
    // console.log('hi');

    // Start Back To Top
    $(".btn-backtotops").hide();
    $(window).scroll(function () {
        let getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        if (getscrolltop >= 300) {
            $(".btn-backtotops").fadeIn(1000);
        } else {
            $(".btn-backtotops").fadeOut(1000);
        }
    });
    // End Back To Top

    // Start Header Section

    //Start Banner Section

    $('.carousel').carousel({
        interval: 1500
    })

    //End Banner Section

    // Start Typed Js

    var typed = new Typed("#banner-h2",{
        strings :[
            "Welcome From Brand Sight Myanmar.",
            "We are Digital Marketing Agency.",
            "Your brand is our priority.",
            ""
        ],
        typeSpeed: 150,
        backSpeed: 45,
        loop: true,
    }); 

    // End Typed Js

    // Start fixedtop
    // $(".btn-backtotops").hide();
    $(window).scroll(function () {
        let getscrolltop = $(this).scrollTop();
        console.log(getscrolltop);

        if (getscrolltop >= 50) {
            $(".navbs").addClass("fixed-top-navbs");
        } else {
            $(".navbs").removeClass("fixed-top-navbs");
        }
    });
    //End fixedtop

     // Start animation
    // $(".btn-backtotops").hide();
    $(window).scroll(function () {
        let getscrolltop = $(this).scrollTop();
        console.log(getscrolltop);

        if(getscrolltop>=60){
            $(".selectparagraph").addClass("paraanni");
        }else{
            $(".selectparagraph").removeClass("paraanni");
        }

        if(getscrolltop>=150){
            $(".btn-anni").addClass("paraanni");
        }else{
            $(".btn-anni").removeClass("paraanni");
        }

        if(getscrolltop>=370){
            $(".deptboxes").addClass("paraanni");
        }else{
            $(".deptboxes").removeClass("paraanni");
        }

        if(getscrolltop>=1240){
            $(".annis").addClass("paraanni");
        }else{
            $(".annis").removeClass("paraanni");
        }

        if(getscrolltop>=2599 && getscrolltop==300){
            $(".iconboxes").addClass("paraanni");
        }else{
            $(".iconboxes").removeClass("paraanni");
        }  

        if(getscrolltop>=3368){
            $(".member").addClass("paraanni");
        }else{
            $(".member").removeClass("paraanni");
        }

        
    });

    //End animation


    // End Header Section 

    // Start who we are section

    // var rellax = new Rellax('.rellax');

    // End who we are section



    window.addEventListener( 'load', function() {
        var box = document.getElementById('animate'),
            docHeight = document.documentElement.offsetHeight;
            console.log(docHeight);
        
        window.addEventListener( 'scroll', function() {
              // normalize scroll position as percentage
          var scrolled = window.scrollY / ( docHeight - window.innerHeight ),
              transformValue = 'scale('+scrolled+')';
      
          box.style.WebkitTransform = transformValue;
          box.style.MozTransform = transformValue;
          box.style.OTransform = transformValue;
          box.style.transform = transformValue;
          
        }, false);
        
      }, false);

      setTimeout(function(){
        $("#preloader").fadeToggle();
      }, 3600);

    //   let preloader = document.getElementById("#preloader");
    //   window.addEventListener("load",function(){
    //     preloader.style.display = "none";
    //   });
    







    // Start ADV Section 
    $("#videos").click(function () {
        var getmodal = $(this).data("bs-target");
        var getvideosrc = $(this).data("video");
        var videourlwithauto = getvideosrc + "?autoplay=1";

        $(getmodal + " iframe").attr("src", videourlwithauto);

        $(getmodal + " button.btn-close").click(function () {
            $(getmodal + " iframe").attr("src", getvideosrc);
        });

        $(getmodal).click("hidden.bs.modal", function () {
            $(getmodal + " iframe").attr("src", getvideosrc);
        });
    });
    // End ADV Section  

    // Start Join Us Section
    $('#accordion').accordion();
    // End Join Us Section

    // Start Footer Section
    $('#getyear').text(new Date().getUTCFullYear());

    // End Footer Section

    // Start Progress 
    $(window).scroll(function () {
        var getprogress = $("#progress");
        var getprogressval = $("#progressvalues");
        var getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        // ----------------------------------------------------------------
        // By Jquery 
        // var getscrollheight = $(document).height();
        // console.log(getscrollheight);
        // var getclientheight = $(window).height();
        // console.log(getclientheight);

        // var calcheight = getscrollheight - getclientheight;
        // var getfinalheight = Math.round(getscrolltop * 100 / calcheight)

        // getprogressval.text(`${getfinalheight}%`)

        // getprogress.css({
        //     "background":`conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
        // })
        // ----------------------------------------------------------------
        // By Javascript 

        var getscrollheight = document.documentElement.scrollHeight;
        // console.log(getscrollheight);
        var getclientheight = document.documentElement.clientHeight;
        // console.log(getclientheight);
        var calcheight = getscrollheight - getclientheight;
        var getfinalheight = Math.round(getscrolltop * 100 / calcheight);
        // console.log(getfinalheight);

        getprogressval.text(`${getfinalheight}%`);
        getprogress.css({
            "background": `conic-gradient(#EA2027 ${getfinalheight}%,#eee ${getfinalheight}%)`,

        });
        // console.log(getprogress);

        document.addEventListener('DOMContentLoaded',function () {
            
              daisyjs(document.getElementById('hello'), {
            
                dotColor: "white",
                lineColor: "red",
                particleRadius: 7,
                lineWidth: 1,
                curvedLines:false,
                promiximity:100,
                parallax:true,
                parallaxMultiplier:5,
            
              });
            
            },false);
            

    });
    // End Progress

    // Start animation









});