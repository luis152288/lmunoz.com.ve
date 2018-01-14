$(document).ready( function(){

	$('.fa-home').on('click', function () {
		
		$('.content1').slideDown();
		$('.content2').slideUp();
		$('.content3').slideUp();
		$('.content4').slideUp();
	})

	$('.fa-folder').on('click', function () {
		
		$('.content2').slideDown();
		$('.content1').slideUp();
		$('.content3').slideUp();
		$('.content4').slideUp();
	})

	$('.fa-envelope').on('click', function () {
		
		$('.content3').slideDown();
		$('.content1').slideUp();
		$('.content2').slideUp();
		$('.content4').slideUp();
	})

	$('.fa-share-alt').on('click', function () {
		
		$('.content4').slideDown();
		$('.content1').slideUp();
		$('.content2').slideUp();
		$('.content3').slideUp();
	})

	$('.img-show').on('click', function (show) {
		var name_src = (show).target.src;

		$('html').append('<div class="modal"><div class="modal-img"><span class="fa fa-times close"></span><img src="'+ name_src +'"></div></div>');

		$('body').addClass("body2");

		$('.close').on('click', function () {
			$('.modal').remove();
			$('body').removeClass("body2");
		})
	})

	$(window).resize(function(){
		
		if($(window).width() <= 1180 ){

			$('.content3').fadeIn();
			$('.content1').fadeIn();
			$('.content2').fadeIn();
			$('.content4').fadeIn();
		}else{
			$('.content1').slideDown();
			$('.content2').slideUp();
			$('.content3').slideUp();
			$('.content4').slideUp();
		}

	})

	if($(window).width() <= 1180 ){

			$('.content3').fadeIn();
			$('.content1').fadeIn();
			$('.content2').fadeIn();
			$('.content4').fadeIn();
		}else{
			$('.content1').slideDown();
			$('.content2').slideUp();
			$('.content3').slideUp();
			$('.content4').fadeIn();
		}

})

