function main() {

    $(".open-menu-icon").click(function() {
        $(".sidebar").toggleClass("show");
        $(".open-menu-icon").animate({
            opacity: 0
        }, 500);
    });
        $(".close-menu-icon").click(function() {
        	$(".sidebar").removeClass("show");
            $(".open-menu-icon").animate({
                opacity: 1
            }, 500);

        });
    }
$(main)
