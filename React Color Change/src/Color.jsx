import { useState } from "react"
function Color(){
    const [color,setcolor] = useState("red");
    function colourchange(colors){
        setcolor(colors);
    }
    return(
        <div className="w-full h-screen" style={{backgroundColor: color}}>
            <div className="flex fixed bottom-70 left-120 bg-sky-500 p-10 rounded-3xl">
                <button className="bg-yellow-400 mr-3 p-3 w-20 rounded-3xl font-bold cursor-pointer" onClick={() =>colourchange("yellow")}>Yellow</button>
                <button className="bg-violet-400 mr-3 p-3 w-20 rounded-3xl font-bold cursor-pointer" onClick={() =>colourchange("violet")}>Violet</button>
                <button className="bg-green-500 mr-3 p-3 w-20 rounded-3xl font-bold cursor-pointer" onClick={() =>colourchange("green")}>Green</button>
            </div>

        </div>
    );
}
export default Color