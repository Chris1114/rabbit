var playerOneStrokes = [0];
var playerTwoStrokes = [0];
var playerThreeStrokes = [0];
var playerFourStrokes = [0];
var rabbitStatus = 0;
var pars = [0];
var strokes;

for (let i=0; i < 18; i++) {
    let par = Math.floor(Math.random() * 3) + 3;
    pars.push(par);
}

for (let i=0; i < 18; i++) {
    let strokes = Math.floor(Math.random() * 3) + pars[i + 1];
    playerOneStrokes.push(strokes);
}

for (let i=0; i < 18; i++) {
    let strokes = Math.floor(Math.random() * 3) + pars[i + 1];
    playerTwoStrokes.push(strokes);
}

for (let i=0; i < 18; i++) {
    let strokes = Math.floor(Math.random() * 3) + pars[i + 1];
    playerThreeStrokes.push(strokes);
}

for (let i=0; i < 18; i++) {
    let strokes = Math.floor(Math.random() * 3) + pars[i + 1];
    playerFourStrokes.push(strokes);
}

pars.shift();
playerOneStrokes.shift();
playerTwoStrokes.shift();
playerThreeStrokes.shift();
playerFourStrokes.shift();

console.log(pars);
console.log(playerOneStrokes);
console.log(playerTwoStrokes);
console.log(playerThreeStrokes);
console.log(playerFourStrokes);
 
document.getElementById('player-one').textContent = 'Player 1: ' + playerOneStrokes;
document.getElementById('player-two').textContent = 'Player 2: ' + playerTwoStrokes;
document.getElementById('player-three').textContent = 'Player 3: ' + playerThreeStrokes;
document.getElementById('player-four').textContent = 'Player 4: ' + playerFourStrokes;

//console.log(playerOneScore);
//console.log(playerTwoScore);
//console.log(playerThreeScore);
//console.log(playerFourScore);

//function rabbit() {
console.log(rabbitStatus);
for (let i = 0; i < 18; i++) {
   console.log(rabbitStatus);
    
    //**********************if player 1 wins hole outright***********************
        if (playerOneStrokes[i] < playerTwoStrokes[i] && playerOneStrokes[i] < playerThreeStrokes[i] && playerOneStrokes[i] < playerFourStrokes[i]) { 
              if (rabbitStatus == 0) {
                document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] +  '. Player 1 catches the rabbit';
                  rabbitStatus = 1;
            } else if (rabbitStatus == 2  || rabbitStatus == 3 || rabbitStatus == 4) {
                document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. player 1 frees the rabit';
                rabbitStatus = 0;
              } else if (rabbitStatus = 1 ) {
                document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] +  '. Player 1 keeps the rabbit';
                }
            
            //**************************player 2 wins hole**************************8
        } else if (playerTwoStrokes[i] < playerOneStrokes[i] && playerTwoStrokes[i] < playerThreeStrokes[i] && playerTwoStrokes[i] < playerFourStrokes[i]) {
              if (rabbitStatus == 0) {
                document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] +  '. Player 2 catches the rabbit';
                  rabbitStatus = 2;
              } else if (rabbitStatus == 1  || rabbitStatus == 3 || rabbitStatus == 4) {
                document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. player 2 frees the rabit';
                  rabbitStatus = 0;
              } else if (rabbitStatus = 2 ){
               document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] +  '. Player 2 keeps the rabbit'   
              }
            
            //************************Player 3 wins hole************************
            
            
        } else if (playerThreeStrokes[i] < playerOneStrokes[i] & playerThreeStrokes [i] < playerTwoStrokes[i] && playerThreeStrokes[i] < playerFourStrokes[i]) {
              if (rabbitStatus == 0) {
                document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] +  '. Player 3 catches the rabbit'; 
                  rabbitStatus = 3;
              } else if (rabbitStatus == 2  || rabbitStatus == 1 || rabbitStatus == 4) {
                document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. player 3 frees the rabit';
                  rabbitStatus = 0;
              } else if (rabbitStatus = 3 ){
                document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] +  '. Player 3 keeps the rabbit'   
              } 
          
            //*************************Player 4 wins hole***********************
            
        } else if (playerFourStrokes[i] < playerOneStrokes[i] && playerFourStrokes[i] < playerTwoStrokes[i] && playerFourStrokes[i] < playerThreeStrokes[i]) {
              if (rabbitStatus == 0) {
                document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] +  '. Player 4 catches the rabbit'; 
                  rabbitStatus = 4;
              } else if (rabbitStatus == 2  || rabbitStatus == 1 || rabbitStatus == 3) {
                document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. player 4 frees the rabbit';
                  rabbitStatus = 0;
              } else if (rabbitStatus = 4 ){
                document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] +  '. Player 4 keeps the rabbit'   
              } 
            
             //**********************if 1 and 2 tie***********************
            
        } else if (playerOneStrokes[i] == playerTwoStrokes[i] && playerOneStrokes[i] < playerThreeStrokes[i] && playerOneStrokes[i] < playerFourStrokes[i]) {
                if (rabbitStatus == 3 || rabbitStatus ==4) {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. The rabbit is released';
                    rabbitStatus = 0;
                } else if (rabbitStatus == 1) {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 1 keeps the rabbit';
                } else if (rabbitStatus ==2) {
                     document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 2 keeps the rabbit';
                } else {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. The rabbit stays loose';
                    rabbitStatus = 0;
                }
            
    //***************************1 and 3 tie********************************
            
        } else if (playerOneStrokes[i] == playerThreeStrokes[i] && playerOneStrokes[i] < playerTwoStrokes[i] && playerOneStrokes[i] < playerFourStrokes[i]) {
                if (rabbitStatus == 2 || rabbitStatus ==4) {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. The rabbit is released';
                    rabbitStatus =0;
                } else if (rabbitStatus == 1) {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 1 keeps the rabbit';
                } else if (rabbitStatus ==3) {
                     document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 3 keeps the rabbit';
                } else {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. The rabbit stays loose';
                }
            
            
    //****************************1 and 4 tie*********************************        
            
        } else if (playerOneStrokes[i] == playerFourStrokes[i] && playerOneStrokes[i] < playerThreeStrokes[i] && playerOneStrokes[i] < playerTwoStrokes[i]) {
                if (rabbitStatus == 3 || rabbitStatus ==2) {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. The rabbit is released';
                    rabbitStatus =0;
                } else if (rabbitStatus == 1) {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 1 keeps the rabbit';
                } else if (rabbitStatus ==4) {
                     document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 4 keeps the rabbit';
                } else {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. The rabbit stays loose';
                }

            //***********************2 and 3 tie********************************
            
        } else if (playerTwoStrokes[i] == playerThreeStrokes[i] && playerTwoStrokes[i] < playerOneStrokes[i] && playerTwoStrokes[i] < playerFourStrokes[i]) {
                if (rabbitStatus == 1 || rabbitStatus == 4) {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. The rabbit is released';
                    rabbitStatus= 0;
                } else if (rabbitStatus == 3) {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 3 keeps the rabbit';
                } else if (rabbitStatus ==2) {
                     document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 2 keeps the rabbit';
                } else {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. The rabbit stays loose';
                }
            
            //***********************2 and 4 tie***********************************
            
        } else if (playerTwoStrokes[i] == playerFourStrokes[i] && playerTwoStrokes[i] < playerThreeStrokes[i] && playerTwoStrokes[i] < playerOneStrokes[i]) {
                if (rabbitStatus == 1 || rabbitStatus == 3) {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. The rabbit is released';
                    rabbitStatus = 0;
                } else if (rabbitStatus == 4) {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 4 keeps the rabbit';
                } else if (rabbitStatus == 2) {
                     document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 2 keeps the rabbit';
                } else {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. The rabbit stays loose';
                }
            
            //************************3 and 4 tie**************************************
            
        } else if (playerThreeStrokes[i] == playerFourStrokes[i] && playerThreeStrokes[i] < playerOneStrokes[i] && playerThreeStrokes[i] < playerTwoStrokes[i]) {
                if (rabbitStatus == 1 || rabbitStatus ==2) {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. The rabbit is released';
                    rabbitStatus = 0;
                } else if (rabbitStatus == 3) {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 3 keeps the rabbit';
                } else if (rabbitStatus == 4) {
                     document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 4 keeps the rabbit';
                } else {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. The rabbit stays loose';
                }
            
            //*********************1, 2, and 3 tie**************************************
            
        } else if (playerOneStrokes[i] == playerTwoStrokes[i] && playerOneStrokes[i] == playerThreeStrokes[i] && playerOneStrokes[i] < playerFourStrokes[i]) {
                if (rabbitStatus == 4) {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. The rabbit is released';
                    rabbitStatus = 0;
                } else if (rabbitStatus == 1) {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 1 keeps the rabbit';
                } else if (rabbitStatus == 2) {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 2 keeps the rabbit';
                } else if (rabbitStatus ==3) {
                     document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 3 keeps the rabbit';
                } else {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. The rabbit stays loose';
                }
            
            //**********************1, 2, and 4 tie*********************************
            
        }else if (playerOneStrokes[i] == playerTwoStrokes[i] && playerOneStrokes[i] == playerFourStrokes[i] && playerOneStrokes[i] < playerThreeStrokes[i]) {
                if (rabbitStatus == 3) {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. The rabbit is released';
                    rabbitStatus = 0;
                } else if (rabbitStatus == 1) {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 1 keeps the rabbit';
                } else if (rabbitStatus == 2) {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 2 keeps the rabbit';
                } else if (rabbitStatus == 4) {
                     document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 4 keeps the rabbit';
                } else {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. The rabbit stays loose';
                }
            
            //*********************1, 3, and 4 tie*********************************
            
        } else if (playerOneStrokes[i] == playerFourStrokes[i] && playerOneStrokes[i] == playerThreeStrokes[i] && playerOneStrokes[i] < playerTwoStrokes[i]) {
                if (rabbitStatus == 2) {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. The rabbit is released';
                    rabbitStatus = 0;
                } else if (rabbitStatus == 1) {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 1 keeps the rabbit';
                } else if (rabbitStatus == 3) {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 3 keeps the rabbit';
                } else if (rabbitStatus ==4) {
                     document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 4 keeps the rabbit';
                } else {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. The rabbit stays loose';
                } 
   
            
            //*****************************2,3,and 4 tie*************************
                
            } else if (playerTwoStrokes[i] == playerThreeStrokes[i] && playerTwoStrokes[i] == playerFourStrokes[i] && playerTwoStrokes[i] < playerOneStrokes[i]) {
                if (rabbitStatus == 1) {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. The rabbit is released';
                    rabbitStatus = 0;
                } else if (rabbitStatus == 4) {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 4 keeps the rabbit';
                } else if (rabbitStatus == 2) {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 2 keeps the rabbit';
                } else if (rabbitStatus ==3) {
                     document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 3 keeps the rabbit';
                } else {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. The rabbit stays loose';
                }
                
                //**************************4 way tie****************************
                
            } else if (playerOneStrokes[i] == playerTwoStrokes[i] && playerOneStrokes[i] == playerThreeStrokes[i] && playerOneStrokes[i] == playerFourStrokes[i]) {
                if (rabbitStatus == 1) {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 1 keeps the rabbit';
                } else if (rabbitStatus == 2) {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 2 keeps the rabbit';
                } else if (rabbitStatus ==3) {
                     document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 3 keeps the rabbit';
                } else if (rabbitStatus ==4) {
                     document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. Player 4 keeps the rabbit';
                } else {
                    document.getElementById('rabbit-status-' + [i]).textContent = [i + 1] + '. The rabbit stays loose';
                }
            }
}
