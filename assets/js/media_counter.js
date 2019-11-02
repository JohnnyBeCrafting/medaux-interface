/*
PURPOSE OF CODE: to append and/or remove thumbnail media elements and increase/decrease the amount of 
thumbnail media elements by implementing a toggle function. 
*/

$(document).ready(function() {
  // **************************GLOBAL VARIABLES ************************ //

  //DOM: image counter id
  var $imageCounter = $("#image_counter");

  //this variable stores the amount of media files selected and will be displayed as a counter
  var media_file_counter = 0;

  //DOM: gallery wrapper
  var $thumbnailDisplayBox = $("#thumbnail_display");

  //this variable stores the media file from both the image and videos tabs
  var $media_files = $(".thumbnail_overlay_container").find("img");

  //call function that shows "0 items selected" if there are no thumbnails in gallery
  display_zero_items($thumbnailDisplayBox, $imageCounter);

  //click handler
  $(".thumbnail_overlay_container").click(function() {
    var img_source = $(this).children("img").attr("src");

    // this variable stores the button element that will have toggleable classes for the checkmark
    var $media_file_button = $(this).find("button");

    var $thumbnail_unit_container = $(
      '<div class="expert_media_container"></div>'
    );

    var $appended_thumbnail_unit_container = $(".expert_media_container");
    
    var imgContainer = $(this).closest(".thumb").index();         // ADDED
    console.log("Container index: "+imgContainer);                // ADDED
    
    var $thumbnailMedia = $('<img id="thumb_'+imgContainer+'" src="' + img_source + '"/>').addClass(    // MODIFIED
      "thumbnail_frame"
    );
    //Store the index position of each media file
    var media_index = media_file_index_pos(
      $(".thumbnail_overlay_container"),
      this
    );

    // increase the counter
    toggle_media($media_file_button, "hidden", imgContainer);   // MODIFIED

    function toggle_media(element, className, imgContainer) {   // MODIFIED
      if (element.hasClass(className)) {
        element.removeClass(className);
        increase_counter();
        appendImage(img_source);
      } else {
        element.addClass(className);
        decrease_counter();
        removeImage($appended_thumbnail_unit_container);
        console.log("#thumb_"+imgContainer);                    // ADDED
        $(document).find("#thumb_"+imgContainer).remove();      // ADDED
      }
    }

    function appendImage(imgSrc) {
      console.log("append image called- the image source", imgSrc);
      $thumbnail_unit_container.append($thumbnailMedia);
      $thumbnailDisplayBox.append($thumbnail_unit_container);
    }

    function removeImage(thumbnail_gallery_container) {
      //if imgSource === imgSource of the thumbnail
      // if(img_source === thumbnail.find('img').attr('src')){
      //   thumbnail.remove();
      // }
      console.log(
        "removed image",
        thumbnail_gallery_container.find("img").attr("src")
      );
      //remove the thumbnail
      // console.log($thumbnail_unit_container.find('img'));
    }
  });

  //return index position of the media file

  function display_zero_items(element, target) {
    if (element.children().length === 0) {
      target.text("0");
    }
  }
  function media_file_index_pos(parent, element) {
    return parent.index(element);
  }

  var increase_counter = function() {
    media_file_counter++;
    $imageCounter.html(media_file_counter);
  };

  var decrease_counter = function() {
    media_file_counter--;
    $imageCounter.html(media_file_counter);
  };
});
