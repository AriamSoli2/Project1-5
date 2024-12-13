// $(document).ready(function(){
//     // Only target a tags that are not within the nav links
//     $("a:not(.nav-link)").click(function(e){
//         e.preventDefault(); // Prevent default link behavior
//         var target = $(this).attr("href");
        
//         // Toggle visibility of the corresponding section
//         if ($(target).hasClass("hide")) {
//             $(target).removeClass("hide");
//             $(this).text("Show Less");
//         } else {
//             $(target).addClass("hide");
//             $(this).text("Show More");
//         }
//     });
// });


$(document).ready(function(){
    // Toggle the "Show More" / "Show Less" for each FAQ item
    $("a:not(.nav-link)").click(function(e){
        e.preventDefault(); // Prevent default link behavior
        var target = $(this).attr("href");

        // Get the div immediately before the clicked link (the answer)
        var targetDiv = $(this).prev();

        // Toggle the visibility of the hidden content
        if (targetDiv.hasClass("hide")) {
            targetDiv.removeClass("hide");
            $(this).text("Show Less");
        } else {
            targetDiv.addClass("hide");
            $(this).text("Show More");
        }
    });
});