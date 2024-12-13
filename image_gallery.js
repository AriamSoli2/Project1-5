$(document).ready(() => {
    // Preload images
    $("#gallery ul li a").each(function () {
        const image = new Image();
        image.src = $(this).attr("href");
    });

    // Handle link click
    $("#gallery ul li a").on("click", function (evt) {
        evt.preventDefault();
        const newSrc = $(this).attr("href");
        const newCaption = $(this).attr("title");

        $("#main-image").attr("src", newSrc);
        $("#caption").text(newCaption);
    });

    // Move focus to the first link
    $("#gallery ul li:first-child a").focus();
});
