  //variables



  //crystals
  var crystals = {
    ruby: {
      name: "ruby",
      value: 0
    },
    sapphire: {
      name: "sapphire",
      value: 0
    },
    crystal: {
      name: "crystal",
      value: 0
    },
    emerald: {
      name: "emerald",
      value: 0
    }
  
  };
  
    //current score
    //target score
    var currentScore = 0;
    var targetScore = 0;
  
    //wins
    //losses
    var winCount = 0;
    var lossCount = 0;
  
  
  
  
  
  //functions
  var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min +1)) +min;
  }
  
  var startGame = function() {
  
  //target score
  targetScore = getRandom(19, 120);
  
  //current score
  var currentScore = 0;
  
  //crystals values
  crystals.ruby.value = getRandom (19, 120);
  crystals.sapphire.value = getRandom (19, 120);
  crystals.crystal.value =  getRandom (19, 120);
  crystals.emerald.value = getRandom (19, 120);
  
  //show changes on page
  $("#currentScore").html(currentScore);
  $("#targetScore").html(targetScore);
  
  console.log(crystals.value);
  
  }
  
  
  //respond to clicks
  var addvalues = function(crystals) {
  
  currentScore = currentScore + crystals.value;
  
  $("#currentScore").html(currentScore);
  
  }
  
  
  //var addWin = function() {
  //  if (currentScore === targetScore){
  //  alert("You Win");
  //}
  //  else if (currentScore > targetScore) {
  //    alert("You Lose");
  //}
  
  
  
  // main process
  $("#ruby").click(function() {
    addvalues(crystals.ruby);
  });
  
  $("#sapphire").click(function() {
    addvalues(crystals.sapphire);
  });
  
  $("#crystal").click(function() {
    addvalues(crystals.crystal);
  });
  
  $("#emerald").click(function() {
    addvalues(crystals.emerald);
  });
  
  startGame();