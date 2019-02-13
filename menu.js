$(document).ready(function(){
	//$('.controls').hide();
	//$('.result').hide();
	//$('.howtoplay').hide();
	$('.menu').on('tap','.play-btn',function(){
		$('.menu').delay(200).fadeOut();
		var selectedSize = parseInt($(this).data("size"));
        load_board(selectedSize);
		//$('.controls').delay(500).fadeIn();
	});
});


function load_board(size) {


}
