function main() {
    $(".burger-menu").click(function() {
        $(".sidebar").toggleClass("open");
        $(".burger-menu").toggleClass('open');
    });
}
$(main)
