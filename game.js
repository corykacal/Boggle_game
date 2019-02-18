var board;




$(document).ready(function(){
	//$('.controls').hide();
	//$('.result').hide();
	//$('.howtoplay').hide();


	$('.game').hide();

    //Load menu when select 4x4 or 5x5
	$('.menu').on('tap','.play-btn',function(){
		$('.menu').delay(300).fadeOut();
        //selectedSize is 4 or 5 based on 'size' html tag
		var selectedSize = parseInt($(this).data("size"));
        load_board(selectedSize);
		//$('.controls').delay(500).fadeIn();
        $('.game').delay(500).fadeIn();
	});


	$('.game').on('tap','#submit',function(){
        reset_box();
	});

    $('#word-box').keypress(function(event) {
        if(event.keyCode == 13 || event.which == 13) {
            reset_box();
        }
    });



});


function reset_box() {
    console.log($('#word-box').val());
    $('#word-box').val('');
}


function load_board(size) {

    //making the javascript gameboard
    board = new Array(size);
    for(var i=0; i<size; i++) {
        board[i]= new Array(size);
    }



    setTimeout(function() {

        //making the html graphic game board
        var boardHTML = $('.board');

        var string = "";
        string+='<tbody style="font-size: 32px">';
        for(var i=0; i<size; i++) {
            string+='<tr>';
            for(var j=0; j<size; j++) {
                var randValue = Math.floor(Math.random()*26+65);
                var letter = String.fromCharCode(randValue);
                board[i][j] = letter;
                string+='<td>';
                string+='<a class="letter-block" id="'+letter+'">'+letter+'</a>';
                string+='</td>';
            }
            string+='</tr>';
        }
        string+='</tbody>';

        boardHTML.append(string);



    },500)




}




