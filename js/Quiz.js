class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
   

    textSize(30);
    text("Result of the Quiz",300,50);

 
  //if(allContestants !== undefined){
      fill("blue");
      textSize(20);
      text("**NOTE: Contestant who answered correct is highlighted in green colour!",130,260);
 //}
 if(contestant.answer===3){
  console.log("Correct");
  }
    
  }

}
