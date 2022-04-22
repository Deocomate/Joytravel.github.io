$(document).ready(function () {
    $(".list-info").click(function (e) { 
        let k = $(this).attr("list-div");
        $(".list_div").removeClass("active");
        $(`.list_div:nth-of-type(${k})`).addClass("active")
    });
});