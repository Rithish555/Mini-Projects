import { useState } from "react"

function App() {
  const [tasks,settasks] = useState([])
  const [newtask,setnewtask] = useState("")

  function addtask(){
    if(newtask.length>0){
      settasks(t => [...t,newtask])
      setnewtask("")
    }
    else return
    
  }
  function moveup(i){
    let newarr = [...tasks];
    if(i>0){
      [newarr[i-1],newarr[i]] = [newarr[i],newarr[i-1]];
      settasks(newarr)
    }
    else return;
    
  }

  function movedown(i){
    let newarr = [...tasks];
    if(i<(tasks.length-1)){
      [newarr[i+1],newarr[i]] = [newarr[i],newarr[i+1]];
      settasks(newarr)
    }
    else return;
    
  }

  function deletetask(i){
    let newarr = tasks.filter((_,ind)=> ind!=i )
    settasks(newarr)
  }

  function taskupdate(e){
    setnewtask(e.target.value)
  }



  return(
    <div className="bg-[#cf123ee8] w-full min-h-screen h-full">
      <h1 className="text-5xl text-center text-sky-400 font-bold pt-10">To-Do's</h1>
      <div className="flex justify-center">
        <input  className="bg-amber-400 rounded-md pl-2 w-70 mt-20" type="text" name="tasks" id="task" autoFocus onChange={taskupdate} value={newtask}/>
        <button className="bg-[#000] ml-5 rounded-md cursor-pointer font-bold p-3 text-white mt-20" onClick={addtask}>Add</button>
      </div>
      <div className="mt-20">
        <ol>
          {tasks.map((taskk, indexx) => {
            return(
              <div className=" bg-[#000000ce] my-3 h-20 mx-50 flex justify-around items-center font-bold hover:scale-110 rounded-2xl cursor-pointer">
                <li  className="text-teal-300 text-3xl " key={indexx}>{taskk}</li>
                <div>
                  <button className="mx-5 border border-black p-2 cursor-pointer bg-red-600 rounded-sm" onClick={() => moveup(indexx)}>👆</button>
                  <button className="mx-5 border border-black p-2 cursor-pointer bg-red-600 rounded-sm " onClick={() => movedown(indexx)}>👇</button>
                  <button className="mx-5 border border-black p-2 cursor-pointer bg-sky-400 rounded-sm" onClick={() => deletetask(indexx)}>❌</button>
                </div>
              </div>
            )
          }
          )}
        </ol>
      </div>
    </div>
)
}
export default App
