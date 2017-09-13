function main() {

    $(".menu-icon").click(function() {
        $(".sidebar").toggleClass("show");
        $(".menu-icon").toggleClass("close-menu-icon");
    });
}
	$(".menu-hide-button").click(function() {
	    $(".sidebar").removeClass("show");
	    $(".menu-icon").toggleClass("close-menu-icon");
	});
$(main)
