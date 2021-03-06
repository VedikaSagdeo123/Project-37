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
    //write code here to hide question elements
     question.hide();
    

    //write code to change the background color here
    background('yellow');
  
     
    //write code to show a heading for showing the result of Quiz
      textSize(30)
      fill("black");
      text("RESULT OF THE QUIZ",300,50)
    //call getContestantInfo( ) here
     Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
       fill("blue")
     //write code to add a note here
     textSize(18);
     text("*NOTE*: Contestant who answered correct is highlighted in green colour!",130,230)
    
     var y=300;
    //write code to highlight contest who answered correctly
    for (var plr in allContestants){
      var correctAns="2"
      if(correctAns===allContestants[plr].answer){
        fill("green")
      }
      else{
        fill("red")
      }
      y=y+30;
      textSize(25)
      text(allContestants[plr].name+":" + allContestants[plr].answer,250,y);
    }
  }
}

}
