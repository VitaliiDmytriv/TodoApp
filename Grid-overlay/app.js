$(document).ready(function () {
    $(".toggle").click(function (e) {
        if ($(".show").css("display") === "none") {
            $(".show").slideDown();
        } else {
            $(".show").slideUp();
        }
    });
});
