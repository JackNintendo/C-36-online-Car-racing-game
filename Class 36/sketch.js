var database, position;
var gameState = 0;
var playerCount;
var form, player, game;

function setup(){
    createCanvas(0,0,400,400);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();

    /* .ref(); means ref function
       .ref(); is used to refer to the location of the database
    */

    /*
      .on(); creates a listener which keeps listening to the changes in the database
      every time a change occurs in the database it is allerted 
      
    */
}

function draw(){
 
}
