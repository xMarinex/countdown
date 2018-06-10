function updateTimer(deadline){
    var time = deadline - new Date();
    return {
        'jours': Math.floor( time/(1000*60*60*24) ),
        'heures': Math.floor( (time/(1000*60*60)) % 24 ),
        'minutes': Math.floor( (time/1000/60) % 60),
        'secondes': Math.floor( (time/1000) % 60),
        'total': time
    };
}

function animateClock(span){
    span.className = "turn";
    setTimeout(function(){
    span.className = "";
}, 700);
}

function startTimer(id, deadline){
    var timerInterval = setInterval(function(){
    var clock = document.getElementById(id);
    var timer = updateTimer(deadline);

clock.innerHTML = '<span>' + timer.jours + '</span>' 
                + '<span>' + timer.heures + '</span>' 
                + '<span>' + timer.minutes + '</span>' 
                + '<span>' + timer.secondes + '</span>';

 // animations
 var spans = clock.getElementsByTagName("span");
animateClock(spans[3]);
if (timer.secondes == 59) animateClock(spans[2]);
if (timer.minutes == 59 && timer.secondes == 59) animateClock(spans[1]);
if (timer.heures == 23 && timer.minutes == 59 && timer.secondes == 59) animateClock(spans[0]);


if (timer.total < 1) {
    clearInterval(timerInterval);
    clock.innerHTML = '<span>0</span><span>0</span><span>0</span><span>0</span>';
            }
        }, 1000);
}

window.onload = function (){
    var deadline = new Date("Oct 31, 2018 00:00:01");
    startTimer("clock", deadline);
}
