var board;
var current_text = "";
var dictionary

$(document).ready(function(){

    var dictionary = new Trie();

    $.getJSON("dictionary.json", function(json)
    {
        var word;
            for(var index in json)
            {
                word = json[index];
                dictionary.add(word);
            }
    });



    //Hide the game initially
	$('.game').hide();

    //Load menu when select 4x4 or 5x5
	$('.menu').on('tap','.play-btn',function(){
		$('.menu').delay(300).fadeOut();
        //selectedSize is 4 or 5 based on 'size' html tag
		var selectedSize = parseInt($(this).data("size"));
        load_board(selectedSize);
        $('.game').delay(500).fadeIn();
        var threeMinutes = 60 * 3, display = $('#time');
        startTimer(threeMinutes, display);
	});


    //user clicks on one of the letters
	$('.game').on('tap','.letter-block',function(){
        var letter = $(this).attr('id');
        add_to_word_box(letter);
	});



    //user submits answer through button
	$('.game').on('tap','#submit',function(){
        submit_word();
        reset_box();
	});

    //user submites answer through enter key
    $('#word-box').keypress(function(event) {
        if(event.keyCode == 13 || event.which == 13) {
            submit_word();
            reset_box();
        }
    });
});

function submit_word() {
    var submittedWord = $('#word-box').val();
    if(isValidInput(submittedWord)) {
        $('#found-words').append(submittedWord + "<br>");
        //change score, etc
    }
}
function isInBounds(position)
{
    var x = position[0];
    var y = position[1];
    if(x < 0 || x > board.length-1 || y < 0 || y > board.length-1)
    {
        return false;
    }
    return true;

}

function isValidInput(word) {
    var moves = [[1,0],[-1,0],[0,1],[0,-1],[1,-1],[-1,1],[1,1],[-1,-1]];
    var recursiveValid = function(word, visited, curPos)
    {
        if(word.length == 0)
        {
            return true;
        }
        if(word.charAt(0)!=board[curPos[0], curPos[1]])
        {
            return false;
        }
        else
        {
            visited[curPos[0], curPos[1]] = true;
            for(i = 0; i < moves.length; i++)
            {
                var currentMove = moves[i];
                var nextX = curPos[0] + currentMove[0];
                var nextY = curPos[1] + currentMove[1];
                var nextPos = [nextX, nextY]
                if(isInBounds(nextPos) && !visited[nextX,nextY])
                {
                    //set visited
                    var nextWord = word.substring(1);
                    var result = recursiveValid(nextWord, visited, nextPos);
                    if(result)
                    {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    var booleanArray = new Array(board.length);
    for(x = 0; x < board.length; x++)
    {
        booleanArray[x] = new Array(board.length).fill(false);
    }
    console.log(booleanArray);
    for(i = 0; i < board.length; i++)
    {
        for(j = 0; j < board.length; j++)
        {
            var letter = board[i][j];
            if(letter == word.charAt(0))
            {
                recursiveValid(word.substring(1), booleanArray, [i, j]);
            }
        }
    }
}

/*
 * Adds a letter to the user input box when a circle button is pushed.
 */
function add_to_word_box(letter) {
    var string = $('#word-box').val() + letter.toLowerCase();
    current_text = string;
    $('#word-box').val(current_text);
}


/*
 * Resets the user input box after they have submitted by button or enter key.
 */
function reset_box() {
    console.log($('#word-box').val());
    $('#word-box').val('');
    current_text = "";
}


/*
 * Loads the html board of letters into the page.
 * This needs to be aided by a get letter function eventually that
 * gets letter based on real boggle probabilities.
 */
function load_board(size) {

    //making the javascript gameboard
    board = new Array(size);
    for(var i=0; i<size; i++) {
        board[i]= new Array(size);
    }




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
                string+='<a class="letter-block" href="" id="'+letter+'">'+letter+'</a>';
                string+='</td>';
            }
            string+='</tr>';
        }
        string+='</tbody>';

        boardHTML.append(string);
}


/*
 * Starts the timer used to let the user know when the game is over
 */
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}


























