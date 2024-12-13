"use strict";

$(document).ready( () => {
	// preload images
	$("#image_list a").each( (index, element) => {
		const swappedImage = new Image();
		swappedImage.src = $(element).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click( evt => {
		const link = evt.currentTarget;

		// Fade out the current image and caption
        $("#image, #caption").fadeOut(1000, () => {
            // Callback function to update the image and caption after fade-out completes
            const imageURL = $(link).attr("href");
            const caption = $(link).attr("title");

            // Update the image and caption
            $("#image").attr("src", imageURL);
            $("#caption").text(caption);

            // Fade in the new image and caption
            $("#image, #caption").fadeIn(1000);
        });

		// cancel the default action of the link
	    evt.preventDefault();
	}); // end click
	
	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready