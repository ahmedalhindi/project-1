//These are additional basic math Set functions
const intersection= function(setA, setB) {
    var _intersection = new Set();
    for (var elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}

const isSuperset = function(set, subset) {
    for (var elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}

//1-The game initializes with a game object.
// console.log('file begging');
const game = {
    // grid key contains an empty array of 9 elements
    grid: [0,0,0,0,0,0,0,0,0],
    win: [],
    p1Plays: [],
    p2Plays: [],
    p1Score: 0,
    p2Score: 0,
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
        /*console.log('current grid is :\n',
            game.grid.slice(0,3),'\n',
            game.grid.slice(3,6),'\n',
            game.grid.slice(6,9),'\n\n',
            game.p1Plays,'\n',
            game.p2Plays);
        */
            //console.log(this.isWin(this.p1Plays))
        let p1 = this.isWin(this.p1Plays);
        let p2 = this.isWin(this.p2Plays);

        if(p1){
            //alert("player 1 wins")
            game.win="p1"
            game.p1Score +=1;
            $('.p1Score').text(game.p1Score);
            Swal.fire(`${$('.p1').val()}Wins`)

        } else if(p2) {
            //alert("player 2 wins")
            game.win="p2";
            game.p2Score +=1;
            $('.p2Score').text(game.p2Score);
            Swal.fire(`${$('.p2').val()}Wins`)
        }
    
        
        
    },
    //5-method checks players turns and checks if it contains a win condition
    isWin: function (set) {
        //######
        // let i = 0;
        // set = new Set(set);
        // const subsets =  game.winConditions.map(subset => new Set(subset))
        // // console.log(subsets)
        // for(const subOfSubset of subsets){
        //     for (const elem of subOfSubset) {
        //         if (set.has(elem)) {
        //             i +=1;
        //             if(i>=3){
        //                 return true;
        //             }
        //         }
        //     }
        // }
        // return false;

        //########
        //Attempt2
        // let listOfWinConditions = game.winConditions;
        // for(const winCondition of listOfWinConditions){
        //     for(const winElement of winCondition){
        //         if(set.has(winElement)){}
        //         if()
        //     }
        // }

        //#########
        //Attempt3
        // set = game.winConditions.map(winset => new Set(winset));
        // subset = new Set(subset);
        // for(winSet of set){
        //     for (let elem of subset) {
        //         if (!winSet.has(elem)) {
        //             return false;
        //         }
        //     }
          
        // }
        
           //##########
        // //Attempt4
        let i = 0;
        set = new Set(set);
        const listOfWinConditionsSets = game.winConditions.map(
            winCondition => new Set(winCondition));
        for(const winConditionSet of listOfWinConditionsSets){
            for(const winElement of winConditionSet){
                if(set.has(winElement))
                    i += 1;}
                    
            if(i===3){return true}else{
                i = 0;
            }
        }
        
        //##########
        // //Attempt5
        // set = new Set(set);
        
        // const listOfWinConditionsSets = game.winConditions.map(
        //     winConditionSet => new Set(winCondition));

        // for(winConditionSet of listOfWinConditionsSets){
        //     if(intersection(winConditionSet, set).size>=3){
        //         return true
        //     }
        // }
    }
    
}
//###########
//Testing the game manually
// game.p1Play(0);
// game.p2Play(4);
// game.p1Play(8);
// game.p2Play(6);
// game.p1Play(2);
// game.p2Play(1);
// game.p1Play(5);
// game.checkWinner();



//5-Adding reset game method.

//#############
//Interfacing to HTML CSS
let turn = 0;
function play(event){
    //The function that is called when a div is press
    turn +=1;
    //switching players 
    if(turn%2==0){
        $(event.target).css({
            'background-image':'url("../img/x.png")',
            'background-size':'80%',
            'background-repeat':'no-repeat',
            'background-position':'center'});
        $(event.target).off();
        //this turns the class id to a number to be pushed to the
        //game.p1Plays array
        let n = parseFloat($(event.target).attr('class'));
        game.p1Play(n);
        game.checkWinner();
    }else{
        $(event.target).css({
            'background-image':'url("../img/o.png")',
            'background-size':'80%',
            'background-repeat':'no-repeat',
            'background-position':'center'});
        $(event.target).off();
        //this turns the class id to a number to be pushed to the
        //game.p1Plays array
        let n = parseFloat($(event.target).attr('class'));
        game.p2Play(n);
        game.checkWinner();
    }
}

$('.grid div').on('click',play);


// //###########
// //input from jquery to object
// function playObject(event){
//     //This works but i'll try to find a less human intrusive proceadure
//     //Because i had to manually name the div class names
//     $(event.target).attr('class')
// }

// $('.grid div').on('click',playObject);

