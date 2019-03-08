
 var board = [['a','b','c','d'],['e','f','g','h'],['i','j','k','l'],['m','n','o','p']];



 function isInBounds(x,y)
 {   
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
        //word is jsut a char and is equal to pos
        if(word.length == 1 && word ==  board[ curPos[0] ][ curPos[1] ])
        {
            return true;
        }
        if(word.charAt(0)!=board[ curPos[0] ][ curPos[1] ])
        {
            return false;
        }
        else
        {
            for(var i = 0; i < moves.length; i++)
            {
                var currentMove = moves[i];
                var nextX = curPos[0] + currentMove[0];
                var nextY = curPos[1] + currentMove[1];
                if(isInBounds(nextX,nextY) && !visited[nextX][nextY])
                {
                    visited[curPos[0]][curPos[1]] = true;
                    var nextWord = word.substring(1);
                    var result = recursiveValid(nextWord, visited, [nextX,nextY]);
                    if(result)
                    {
                        return true;
                    }
                    visited[curPos[0]][curPos[1]] = false;
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
    for(var i = 0; i < board.length; i++)
    {
        for(var j = 0; j < board.length; j++)
        {
            if(recursiveValid(word, booleanArray, [i, j]))
                 return true;
        }
    }
    return false;

}



console.log(isValidInput('ponmieabcdhlkjfg'));
console.log(isValidInput('abfea'));
console.log(isValidInput('afeb'));