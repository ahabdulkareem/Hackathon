

const  player = document.getElementById("player");

const enemy = document.getElementById("enemy");

const enemy2 = document.getElementById("enemy2");

const enemy3 = document.getElementById("enemy3");

const enemy4 = document.getElementById("enemy4");

//  window.addEventListener("keyup", ()=>{
//     switch(e.key){
//         case    'ArrowLeft':
//             player.style.left = parseInt(player.style.left) - moveBy + 'px';
//         case    'ArrowRight':
//             player.style.right = parseInt(player.style.right) + moveBy + 'px';
            
//     }


 //})


function jump(){
    if(player.classList != "jump"){
        
    player.classList.add("jump");
    

    setTimeout(function(){player.classList.remove("jump");}, 550);
    }
}

var makeSureAlive = setInterval(function(){
    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    //console.log(playerTop);


    var playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
    //console.log(playerBottom)

    var enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));
    console.log(enemyLeft);

     
     var enemy3Left = parseInt(window.getComputedStyle(enemy3).getPropertyValue("left"));
    // console.log(enemy3Left);



     var enemy4Left = parseInt(window.getComputedStyle(enemy4).getPropertyValue("left"));
   //  console.log(enemy4Left);



   var enemy2Left = parseInt(window.getComputedStyle(enemy2).getPropertyValue("left"));
    // console.log(enemy2Left);




     if( enemyLeft < -60  && enemyLeft > -132 && playerTop >= 290){
    // console.log("collision");
       //alert("Game Over!");        
       //window.location.reload(true);

      
    }//else if (enemy3Left < 160  && enemy3Left > 130 && playerTop >= 300){
        //alert("Game Over!");        
      //console.log("collision");
        
    //}
     else if( enemy4Left < -50  && enemy4Left > -132 && playerTop >= 308){
    //  console.log("collision");
     // alert("Game Over!");        
    //  window.location.reload(true);


    }else if ((enemy2Left < 0  && enemy2Left > -300  && playerTop >= 195 && playerTop < 320) ||
    ( playerBottom < -195 && playerBottom >  -205 && enemy2Left < -45  && enemy2Left > -100)){
        console.log("collision");
        alert("Game Over!");    

        window.location.reload(true);

    }
    //enemy2Left > -85 && enemy2Left < -115
    //   console.log("No collision!")

    // if(){

    // }

}, 10)

// windows.addEventListener("keypress", function(event)  {
//     if (event.keyCode === "32") {
//       console.log('Space pressed')
//       jump();
//     }
//   })

document.addEventListener("keydown", function(event){
    jump();
    countUp;
});


var Time =0;
var CountUp = setInterval(function(){
    ++Time;
   // document.getElementById("countup").innerHTML = Time;
})


var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  //minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "Time: 0" + valString;
  } else {
    return valString;
  }
}