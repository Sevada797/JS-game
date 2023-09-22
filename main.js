/*        let uparr = document.getElementById("up");
        let downarr = document.getElementById("down");
        let leftarr = document.getElementById("left");
        let rightarr = document.getElementById("right");
       */
(function () {
function gameOver() {
            clearInterval(_top);
            snake.style.visibility = "hidden";
            food.style.visibility = "hidden";
            score.innerHTML = "Game Over";
}
    let _bigger = document.getElementById("forbigsnake");
    let score = document.getElementById("sc");
    let score_num = 0;
    //function FatalError(){ Error.apply(this, arguments); this.name = "FatalError"; }
    //FatalError.prototype = Object.create(Error.prototype);
    function random(min, max) {
        return Math.random() * (max - min) + min;
    }
    let food = document.getElementById("ker");
    food.style.marginLeft = parseInt(random(0, 584)) + "px";
    food.style.marginTop = parseInt(random(0, 584)) + "px";
    let right; 
    let left;
    let _top;
    let _bottom;
    let x = 300;
    let y = 300;

    let snake = document.getElementById("player");
let canvas = document.getElementById("canv");
//canvas.addEventListener("keydown", move);
document.onkeydown = checkKey;
function checkKey(e) {
    /*
    uparr.addEventListener("click", up);
        downarr.addEventListener("click", down);
        leftarr.addEventListener("click", left);
        rightarr.addEventListener("click", right); */
    e = e || window.event;
    if (e.keyCode == '38') {
        // up arrow
        clearInterval(_top);
        _top = setInterval(gotop, 5);
       clearInterval(left);
       clearInterval(right);
       clearInterval(_bottom);
       function gotop() {
        y--;
        snake.style.transform = "translate(" + x + "px," + y + "px)";
                if (y == -1) {
            gameOver()
}
    }
    }
    else if (e.keyCode == '40') {
        // down arrow
        clearInterval(_bottom);
        _bottom = setInterval(godown, 5);
       clearInterval(left);
       clearInterval(right);
       clearInterval(_top);
       function godown() {
        y++;
        snake.style.transform = "translate(" + x + "px," + y + "px)";
                if (y == 585) {
    gameOver()
    }
    }
    }
    else if (e.keyCode == '37') {
       // left arrow
       clearInterval(left);
       left = setInterval(goleft, 5);
       clearInterval(right);
       clearInterval(_top);
       clearInterval(_bottom);
       function goleft() {
        x--;
        snake.style.transform = "translate(" + x + "px," + y + "px)";
        if (x == -1) {
	gameOver()        }
       }
    }
    else if (e.keyCode == '39') {
       // right arrow
        clearInterval(right);
       right = setInterval(goright, 5);
       clearInterval(left);
       clearInterval(_top);
       clearInterval(_bottom);
       function goright() {
        x++;
        snake.style.transform = "translate(" + x + "px," + y + "px)";
                if (x == 585) {
	gameOver()        }
       }
    }

/*
if (snake.getBoundingClientRect().y > (food.getBoundingClientRect().y - 13) < (food.getBoundingClientRect().y + 13))
{
    alert("")
}*/
}   
function disapear() {
if (snake.getBoundingClientRect().x  > (food.getBoundingClientRect().x - 13.5) && snake.getBoundingClientRect().x < (food.getBoundingClientRect().x + 13.5) && snake.getBoundingClientRect().y  > (food.getBoundingClientRect().y - 13.5) && snake.getBoundingClientRect().y < (food.getBoundingClientRect().y + 13.5))
{
    food_random();
    get_big();
    clearInterval(_dsp);
    setTimeout(ap, 20)
}}
let dsp;
function ap() {
_dsp = setInterval(disapear, 2)}
ap();
function food_random() {
    food.style.marginLeft = parseInt(random(0, 567)) + "px";
    food.style.marginTop = parseInt(random(0, 567)) + "px";
    score_num++;
    score.innerHTML = "Score: " + score_num;
    snake.style.backgroundColor = food.style.backgroundColor;
        food.style.backgroundColor = "rgb(" + parseInt(random(0, 160)) + "," + parseInt(random(0, 160)) + "," + parseInt(random(0, 160)) + ")";
        if (score_num == 5) {
            harderlev();
        }
}
function get_big() {
//let partofsnake = snake.cloneNode(true);
//_bigger.appendChild(partofsnake)
}
     food.style.backgroundColor = "rgb(" + parseInt(random(0, 255)) + "," + parseInt(random(0, 255)) + "," + parseInt(random(0, 255)) + ")";
         

    })();
    {
    let securitytest = 5
    console.log(securitytest)    
}
//    console.log(securitytest)
