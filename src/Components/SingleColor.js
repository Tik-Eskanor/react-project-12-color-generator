import React from "react"
import rgbToHex from "../utils"

export default function SingleColor({props,index,hexColor})
{
    let [alert,setAlert] = React.useState(false)
    let bg = props.rgb.join(",")
    let hex = `#${props.hex}`

    function handleClick()
    {
        setAlert(true)
        navigator.clipboard.writeText(hex)
    }

     React.useEffect(()=>{
        let time =  setTimeout(()=>{
            setAlert(false)
        }
         ,3000)  
     return ()=> clearTimeout(time) },[alert])

    return(
        <div className={`color-box ${index > 10 ? 'color-light' : null}`} style={{backgroundColor:`rgb(${bg})`}} onClick={handleClick}>
            <p>{props.weight}%</p>
            <p>{hex}</p>
            <small>{alert && "Copied to clipboard"}</small>
        </div>
    )
}