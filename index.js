let less = 250;

// let score = localStorage.getItem("scoreKey");
// setInterval(gameOverF, 10);
// function gameOverF(){
   
//     if((pLeft+aLeft)==1200){
//             over.style.visibility = 'visible';
//             attacker.classList.remove("attackerAni");
//             attacker.style.left = `${less+100}px`;
        
        
//         }
// }
// if((pLeft+aLeft)==1200){
//     over.style.visibility = 'visible';
//     attacker.classList.remove("attackerAni");
//     attacker.style.left = `${less+100}px`;


// }

document.onkeydown = function(e){
    console.log(e.key);
    if(e.key == "ArrowUp"){

    //  score = score+1;

        //   let Hboard = document.getElementById('scoreCount');
            // Hboard.innerText = 'High Score : '+ score;
            // // var someVarName = "value";
            // localStorage.setItem("scoreKey", score);


        player = document.getElementById("player");
    // player.classList.add('animatePlayer');
player.classList.add("ap");
    //  score = score+1;

    //   let Hboard = document.getElementById('scoreCount');
    //     Hboard.innerText = 'High Score : '+ score;
    //     // var someVarName = "value";
    //     localStorage.setItem("jumpKey", score);



    setTimeout(()=>
    {
        player.classList.remove('ap')
    },700);
    }

    if(e.key == "ArrowLeft"){
        player = document.getElementById("player");
    // player.classList.add('animatePlayer');
    if(less>0)
    {
        less = less-50;
    } 
    
    // player.style.left("${less}px")
    // player.classList.add("moveLeft");
    player.style.left = `${less}px`;
    // setTimeout(()=>
    // {
    //     player.classList.remove('moveLeft')
    // },700);
    }

    if(e.key == "ArrowRight"){
        player = document.getElementById("player");
    // player.classList.add('animatePlayer');
    //   player.classList.add("moveRight");
  if(less<1000)
  {
    less = less+50;
  }
    
    player.style.left = `${less}px`;
    // setTimeout(()=>
    // {
    //     player.classList.remove('moveRight')
    // },700);
    }

    player = document.getElementById("player");
    attacker = document.getElementById("attacker");
    over = document.getElementById("over");

    // let calculate = 1200-less;
    // let newc = calculate+less;
    // console.log(newc);
    // if(newc==1300)
    // {
    //     over.style.visibility = 'visible';
        // over.style.visibility = 'visible';    
    // }

    // px = parseInt(window.getComputedStyle(player,null).getPropertyValue('left'));
    // py = parseInt(window.getComputedStyle(player,null).getPropertyValue('top'));
    
    // ax = parseInt(window.getComputedStyle(attacker,null).getPropertyValue('left'));
    // ay = parseInt(window.getComputedStyle(attacker,null).getPropertyValue('top'));
    // // console.log(px,ax)
    // // console.log(py,ay);
    // // px = console
    // offSetX = Math.abs(px-ax);
    // offSetY = Math.abs(py-ay);
//    console.log(offSetX,offSetY); 

//   let pLeft = less+100;
//   let aLeft = 1200-pLeft;
//   console.log(pLeft,aLeft);
// function scoreCount(){
//    score = score+1;

//           let Hboard = document.getElementById('scoreCount');
//             Hboard.innerText = 'High Score : '+ score;
//             // var someVarName = "value";
//             localStorage.setItem("scoreKey", score);   
// }


setInterval(() => {

    px = parseInt(window.getComputedStyle(player,null).getPropertyValue('left'));
    py = parseInt(window.getComputedStyle(player,null).getPropertyValue('top'));
    
    ax = parseInt(window.getComputedStyle(attacker,null).getPropertyValue('left'));
    ay = parseInt(window.getComputedStyle(attacker,null).getPropertyValue('top'));
    // console.log(px,ax)
    // console.log(py,ay);
    // px = console
    offSetX = Math.abs(px-ax);
    offSetY = Math.abs(py-ay);


    // console.log(px,ax)
//    console.log(py,ay)''
   
    // if(offSetX<53 && offSetY <63){

    //     over.style.visibility = 'visible';
    //     attacker.classList.remove("attackerAni");
    //     attacker.style.left = `${less+100}px`;

    // } 

//  if(ax-px<50 && ax>px){
    if(offSetX<70 && offSetY <63){
    
    

    
        over.style.visibility = 'visible';
        attacker.classList.remove("attackerAni");
        attacker.style.left = `${less+100}px`;

    }
   
}, 100);
    // if(offSetX<70 && offSetY<70){
        // over = document.style.visibility = 'visible';
    //     over.style.visibility = 'visible'; 
    // }
}
