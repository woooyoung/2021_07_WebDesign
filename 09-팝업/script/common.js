$(document).ready(function () {

    $(".slide").click(function () {
        $(".layer").show();
        $(".layer-bg").show();
        //        $(".layer").css("display","block");
    });

    $(".close-btn").click(function () {
        $(".layer").hide();
        $(".layer-bg").hide();
        //        $(".layer").css("display","none");
    });

});
