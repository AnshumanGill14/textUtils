import { useState } from "react"
import React from 'react'

export default function Textform(props) {

    const onhandle =(event) => {
        console.log("Text changed");
        setText(event.target.value)
    }

    const btnupclick = ()=> {
        console.log("bt up was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("success","The text has been converted to upper case")
    }

    const btnloclick = ()=> {
        console.log("bt up was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("success","The text has been converted to lower case")
    }

    const btncltext = ()=> {
        console.log("bt up was clicked");
        setText("");
        props.showAlert("success","The text has been cleared")
    }


    const [text, setText]=useState("Enter Your text");
  return (
    <>
    <div className="container" >
        <h1 className="my-3" style={{color: props.mode ==="light"?"black":"white"}}>{props.heading}</h1>


        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={onhandle} style={{backgroundColor: props.mode ==="light"?"white":"#213555",color: props.mode ==="light"?"black":"white"}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary"  onClick={btnupclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2"  onClick={btnloclick}>Convert to Lowercase</button>
        <button className="btn btn-primary "  onClick={btncltext}>Clear Text</button>
    </div>

    <div className="mx-2">
        <h3 style={{color: props.mode ==="light"?"black":"white"}} >Your text summary:</h3>
        <p style={{color: props.mode ==="light"?"black":"white"}}>{text.split(/\s+/).filter((element,)=>{return element.length!==0}).length} words and {text.length} characters</p>

    </div>

    <div className="mx-2">
        <h3 style={{color: props.mode ==="light"?"black":"white"}}>Time to read:</h3>
        <p style={{color: props.mode ==="light"?"black":"white"}}>{text.length===0?0:0.0066*text.split(" ").length} minutes</p>
    </div>
    <div className="mx-2">
        <h3 style={{color: props.mode ==="light"?"black":"white"}}>Your text Preview:</h3>
        <p style={{color: props.mode ==="light"?"black":"white"}}>{text}</p>
    </div>

    
    </>
  )
}
