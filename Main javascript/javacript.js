$(document).ready(function () {
    $(".dark1").on("click", function () {
        if ($("body").hasClass("dark")) {
            $("body").removeClass("dark")
            $("#demo").removeClass("dark")
            $(".upper-in").removeClass("dark")
            $("#change").text("Dark ")
        }
        else {
            $("body").addClass("dark")
            $("#demo").addClass("dark")
            $(".upper-in").addClass("dark")
            $("#change").text("Light ")
        }
    });


    $(".category-button").click(function () {
        console.log("Clicked")
        var filterValue = $(this).attr('data-filter');

        if (filterValue == "all") {
            $(".all").show("slow");
            console.log("Clicked again")
        }
        else {
            $(".all").not('.' + filterValue).hide("slow");
            $(".all").filter('.' + filterValue).show("slow");
            console.log("Task Confirm . . ")
        }
    })

});

