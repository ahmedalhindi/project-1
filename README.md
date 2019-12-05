<!-- md => markdown -->
<!-- Github markdown -->

<!-- heading part -->
# Tic tac toe

This project is the fun little game of X and O, with the goal of applying skills learned as part of the GA Software Engineering Immersive 

# Skills :

- Javascript :
    * Objects
    * Arrays
    * functions
    * methods

- Jquery :
    * Asynchronous programming
    * Interfacing Js, html and css.

- Front End
    * HTML
    * CSS

# Approach :

* The develompent started with an object orianted approach. The core of the game is an object that contains important keys and methods to interact with the game variables.

```js
const game = {
    // grid key contains an empty array of 9 elements
    grid: [0,0,0,0,0,0,0,0,0],
    win: [],
    p1Plays: [],
    p2Plays: [],
    p1Score: 0,
    p2Score: 0,
    playData:[],
    vsCPU: false,
    turn:0,
    winConditions: [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]
    ]
```
    
* The check win logic uses a `Set()` object that uses a `.has()` method the only issue it accepts an element at a time so it needs a loop and a counter to check if the player satisfied one of the win conditions
    
```js
        //5-method checks players turns and checks if it contains a win condition
    isWin: function (set) {
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
```
* Interaction from the HTML, CSS and JS happens in these lines of code:
```js
function play(event){
    //The function that is called when a div is press
    
    //switching players 
    if(game.turn%2==0){
        $(event.target).css({
            'background-image':'url("./img/x.png")',
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
            'background-image':'url("./img/o.png")',
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
    game.turn +=1;
}

$('.grid div').on('click',play);
```

* Interaction from the JS to the HTML and CSS is in the form of jquery lines contained in some of the game object methods as follows:

```js
newGame: function(){
        //This collects previous game playes and result
        game.playData.push(
            game.p1Plays,game.p2Plays,
            game.win)
        game.grid=[0,0,0,0,0,0,0,0,0];
        game.p1Plays=[];
        game.p2Plays=[];
        game.win=[];
        $('.grid div').css('background-image','none');
        $('.grid div').off();
        $('.grid div').on("click", play);

        
    }
```
# Features:

1. Game keeps score.
2. Players can enter their names.
3. Win prompt displays plaer's name.
4. Winner starts the new game.
5. A new game button is added incase the players decided to clear the grid but their scores are kept.
6. Resposive design.
7. Collecting data for training an AI agent in the form of a csv which can be easily imported to any machine learning library to train a neural network.



