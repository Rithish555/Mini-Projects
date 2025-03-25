import { useEffect, useRef, useState } from "react";
function Pass(){
    const [length,setlength] = useState(5);
    const [charss,setcharss] = useState(false);
    const [numss,setnumss] = useState(false);
    const [pass,setpass] = useState("");
    const [cpy,setcpy] = useState("Copy");
    const passref = useRef(null);
    const cpbtn = document.getElementById("copybtn");

    function lengthchange(e){
        setlength(e.target.value);
    }
    function changechar(){
        setcharss(!charss);
    }
    function changenum(e){
        setnumss(!numss);
    }

    useEffect(()=>{
        passgen();
        setcpy("Copy")
        },[length,charss,numss]);

    function passgen(){
        setcpy("Copy")
        let password = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(charss){
            str+="!@#$%^&*()_+=?><";
        }
        if(numss){
            str+="1234567890";
        }
        for(let i=0 ; i<length ; i++){
            let index = Math.floor(Math.random()*str.length);
            password += str.charAt(index);
        }
        setpass(password);
    }

    function copufun(){
        window.navigator.clipboard.writeText(pass);
        setcpy("Copied!")
    }

    return(
        <div className="bg-[#000000d8] w-full h-screen">
            <h1 className="text-center text-5xl text-teal-300 font-bold pt-50">Password Generator</h1>
            <div className="flex justify-center mt-10 ">
                <input type="text" value={pass} className="bg-amber-200 rounded-br-0 rounded-tr-0 rounded-tl-2xl rounded-bl-2xl p-2" readOnly />
                <button id="copybtn" className="bg-sky-400 font-bold w-20 rounded-bl-0 rounded-tl-0 rounded-tr-2xl rounded-br-2xl p-2 cursor-pointer" ref={passref} onClick={copufun}>{cpy}</button>
            </div>
            <button className="mt-10 ml-150 cursor-pointer bg-teal-400 text-black font-bold rounded-3xl p-2" onClick={passgen}>Regenrate</button>
            <div className="flex justify-center mt-20">
                <label htmlFor="lenght" className="mr-5 text-teal-400">Length: {length}</label>
                <input type="range"  onChange={lengthchange} min={5} max={20} className="mr-10" />
                <input type="checkbox" name="chars" id="checkchar" className="mr-2" onChange={changechar} />
                <label htmlFor="checkchar" className="text-teal-400 mr-10">Characters</label>
                <input type="checkbox" name="nums" id="checknums" className="mr-2" onChange={changenum}/>
                <label htmlFor="checknums" className="text-teal-400">Numbers</label>
            </div>
        </div>
    );
}

export default Pass