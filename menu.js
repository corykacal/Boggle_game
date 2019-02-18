var board;




$(document).ready(function(){
	//$('.controls').hide();
	//$('.result').hide();
	//$('.howtoplay').hide();


	$('.game').hide();

    //Load menu when select 4x4 or 5x5
	$('.menu').on('tap','.play-btn',function(){
		$('.menu').delay(200).fadeOut();
        //selectedSize is 4 or 5 based on 'size' html tag
		var selectedSize = parseInt($(this).data("size"));
        load_board(selectedSize);
		//$('.controls').delay(500).fadeIn();
        $('.game').delay(500).fadeIn();
	});
});


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

/*
<tbody style="font-size: 32px;">
    <tr>
    <td style="width: 58px; height: 58px;">O</td>
    <td style="width: 58px; height: 58px;">E</td>
    <td style="width: 58px; height: 58px;">E</td>
    <td style="width: 58px; height: 58px;">E</td>
    </tr>
    <tr>
    <td style="width: 58px; height: 58px;">S</td>
    <td style="width: 58px; height: 58px;">N</td>
    <td style="width: 58px; height: 58px;">J</td>
    <td style="width: 58px; height: 58px;">S</td>
    </tr>
    <tr>
    <td style="width: 58px; height: 58px;">T</td>
    <td style="width: 58px; height: 58px;">R</td>
    <td style="width: 58px; height: 58px;">M</td>
    <td style="width: 58px; height: 58px;">U</td>
    </tr>
    <tr>
    <td style="width: 58px; height: 58px;">W</td>
    <td style="width: 58px; height: 58px;">I</td>
    <td style="width: 58px; height: 58px;">C</td>
    <td style="width: 58px; height: 58px;">T</td>
    </tr>
</tbody>
*/
