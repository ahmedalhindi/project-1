//1-The game initializes with a game object.
const game = {
    grid: [,,,,,,,],
    //2-Adding p1Play method. accpts the index number and turns it to X
    p1Play: function(n){
        game.grid[n]=1;
    },
    //3-Adding p2Play method. accpts the index number and turns it to O
    p2Play: function(n){
        game.grid[n]=2;
    }
}

//4-Adding a check winner method.
//5-Adding reset game method.
