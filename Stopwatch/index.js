timerdisplay= document.getElementById("timer");
timerid=null;
let stattime=0;
isrunning=false;
let elapsedtime=0;

function start(){
    if(!isrunning){
        starttime= Date.now();
        isrunning=true;
        timerid= setInterval(update,10);
        
    }
}
function stop(){
    clearInterval(timerid);
    isrunning=false;

}
function lap(){
    const newp=document.createElement("div");
    newp.textContent=timerdisplay.textContent;
    document.getElementById("divs").append(newp);
}
function reset(){
    stop();
    timerdisplay.textContent = "00:00:00:00";
}
function update(){
    currenttime = Date.now();
    elapsedtime = currenttime-starttime;
    let hours = Math.floor(elapsedtime/(1000*60*60));
    let mins = Math.floor(elapsedtime/(1000*60)%60);
    let secs = Math.floor(elapsedtime/1000 %60);
    let millisecs = Math.floor(elapsedtime%1000/10);
    hours=String(hours).padStart(2,"0");
    mins=String(mins).padStart(2,"0");
    secs=String(secs).padStart(2,"0");
    millisecs=String(millisecs).padStart(2,"0");
    timerdisplay.textContent = `${hours}:${mins}:${secs}:${millisecs}`;


}
