function main() {

    $(".menu").click(function() {
        $(".sidebar").toggleClass("menushow");
        $(".sidebar").removeClass("sidebar");
        $(".menu").animate({
            opacity: 0
        }, 500);

        $(".close").click(function() {
            $(".menushow").toggleClass("sidebar")
            $(".menushow").removeClass("menushow");
            $(".menu").animate({
                opacity: 1
            }, 500);

        });
    });
}
$(main)