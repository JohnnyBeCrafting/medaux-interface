$(document).ready(function(){
	$('.article_body_content_video').controls = false;
	$('.article_body_content_video').parent().click(function () {
		if($(this).children(".article_body_content_video").get(0).paused){
	        $(this).children(".article_body_content_video").get(0).play();
	        $(this).children(".play_btn").fadeOut();
	    }else{
	       $(this).children(".article_body_content_video").get(0).pause();
	        $(this).children(".play_btn").fadeIn();
	    }
	});
})

