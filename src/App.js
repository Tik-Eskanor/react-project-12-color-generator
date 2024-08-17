import React, {useState} from "react"
import Values from "values.js"
import SingleColor from "./Components/SingleColor"

export default function App()
{
  let [input,setInput] = useState('')
  let [error,setError] = useState(false)
  let [list,setList] = useState(new Values("#333").all(10))

  function handleSubmit(e)
  {
     e.preventDefault();
     try {
       let colors = new Values(input).all(10)
       setList(colors)
     } 
     catch(error){
        setError(true)
     }
  }
  

  function handleChange(e)
  {
     let colorValue = e.target.value
     setInput(colorValue)
  }

  let colors  = list.map((color,index)=>{
    return(
      <SingleColor key={index} props={color} index={index} hexColor={color}/>
    )
  })

  return (
    <main>
      <div className="container">
      <h2>Tired of boring old lorem ipum</h2>
        <form onSubmit={handleSubmit}>
            <p>Color generator:</p>
            <div style={{marginLeft:"15px"}} >
              <input type="text" onChange={handleChange} className={ error ? "error" : ""} value={input} placeholder="#f15025"/>
              <button>Generate</button>
            </div>
        </form>
       <div className="colors-container">
         {colors}
       </div>
      </div>
    </main>
  )
}