$(document).ready(function () {
    function slider() {
        var num = 0;
        var result;
        setInterval(function () {
            result = num * -300;
            num++;
            console.log(num);
//            console.log(result);
            if (num == 3) {
                num = 0;
            }
            console.log(num);
            $(".slider").stop().animate({
               top : result + 'px'
            });
        },1000);
    }
    slider();
});
