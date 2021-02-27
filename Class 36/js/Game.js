class Game{
    constructor(){

    }
    
    //will read the gameState from the database
    getState(){
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value", function(data){
          gameState = data.val();
      });
    }
    
    //will update the gameState in database to a value of the state (parameter)
    update(state){
      database.ref('/').update({
          gameState: state
      });
    }

    start(){
      if(gameState === 0){
        player = new Player();
        player.getCount();
        form = new Form();
        form.display();
      }  
    }
}