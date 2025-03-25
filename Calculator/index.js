inputbox=document.getElementById("input");

function append(value){
    inputbox.value+=value;
}
function clearinput(){
    inputbox.value="";
}
function equate(){
    try{
        inputbox.value=eval(inputbox.value);
    }
    catch(error){
        inputbox.value="Syntax Error";
    }
   
}