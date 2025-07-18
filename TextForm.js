import React, { useState } from 'react';
import '.././index.css';

export default function TextForm(props) {
    const handleUpClick = ()=>{
      //console.log("Upppercase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to upper case","Success");
    }

    const handleDownClick = ()=>{
      //console.log("Upppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lower case","Success");
    }
    const handleReClick = ()=>{
      //console.log("Upppercase was clicked" + text);
      let newText=text.split('').reverse().join('');
      setText(newText)
      props.showAlert("Converted to reverse case","Success");
    }

    const handleCopy= ()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard","Success");
    }
    
    const handleExtraSpace = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Removed all spaces","Success");
    }
    const handleClear = ()=>{
      //console.log("Upppercase was clicked" + text);
      let newText = '';
      setText(newText)
      props.showAlert("Cleared","Success");
    }

    const handleOnChange = (event)=>{
      //console.log("On Change");
      setText(event.target.value);
    }

  const [text, setText] = useState('Enter Text Here');
  return (
    <>
    <div className='center' style= {{color:props.mode === 'dark'?'white':'#12385e'}} >
      <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea className="form-control" value = {text} onChange={handleOnChange} style= {{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'#12385e'}}id="myBox" rows="8"></textarea>
        </div>
        <button  className="btn btn-primary mx-2"onClick={handleUpClick} type="button">Upper Case</button>
        <button  className="btn btn-primary mx-2" onClick={handleDownClick} type="button">Lower Case</button>
        <button  className="btn btn-primary mx-2" onClick={handleReClick} type="button">Reverse Case</button> 
        <button  className="btn btn-primary mx-2" onClick={handleCopy} type="button">Copy Text</button>
        <button  className="btn btn-primary mx-2" onClick={handleExtraSpace} type="button">Remove Extra Space</button>
        <button  className="btn btn-primary mx-2" onClick={handleClear} type="button">Clear Text</button> 
    </div>
    <div className='center my-2'  style= {{color:props.mode === 'dark'?'white':'#12385e'}}>
      <h2>Your text summery</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.length} Minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter somthing here to preview"}</p>
    </div>
    </>
    
  )
}