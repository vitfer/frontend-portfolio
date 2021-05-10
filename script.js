$(window).on("scroll", function () {
    if ($(window).scrollTop() > 50){
        $("header").addClass("scrolled");
        $(".menu").addClass("scrolled");
    } else{
        $("header").removeClass("scrolled");
        $(".menu").removeClass("scrolled");
    }
})