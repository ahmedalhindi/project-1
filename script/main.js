//1-The game initializes with a game object.
// console.log('file begging');
const game = {
    // grid key contains an empty array of 9 elements
    grid: [0,0,0,0,0,0,0,0,0],
    win: [],
    p1Plays: [],
    p2Plays: [],
    winConditions: [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]
    ],

    //2-Adding p1Play method. accpts the index number and turns it to X
    p1Play: function(n){
        game.grid[n]=1;
        game.p1Plays.push(n);
    },
    //3-Adding p2Play method. accpts the index number and turns it to O
    p2Play: function(n){
        game.grid[n]=2;
        game.p2Plays.push(n);
    },
    //4-Adding a check winner method.
    checkWinner(){
        //Logic for checking winner goes here
        console.log('current grid is :\n',
            game.grid.slice(0,3),'\n',
            game.grid.slice(3,6),'\n',
            game.grid.slice(6,9),'\n\n',
            game.p1Plays,'\n',
            game.p2Plays);

            //console.log(this.isWin(this.p1Plays))
        if(this.isWin(this.p1Plays)){

            console.log("player 1 wins")
        } else if(this.isWin(this.p2Plays)) {
            console.log("player 2 wins")
        }
    
        
        
    },
    //5-method checks players turns and checks if it contains a win condition
    isWin: function (set) {

        set = new Set(set);
        const subsets =  game.winConditions.map(subset => new Set(subset))
        // console.log(subsets)
        for(const subOfSubset of subsets){
            for (const elem of subOfSubset) {
                if (set.has(elem)) {
                    return true;
                }
            }
        }
        return false;
    }
    
}

game.p1Play(0);
game.p2Play(4);
game.p1Play(8);
game.p2Play(6);
game.p1Play(2);
game.p2Play(1);
game.p1Play(5);


game.checkWinner();



//5-Adding reset game method.

