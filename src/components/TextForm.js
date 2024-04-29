import React, { useState } from "react";
import './TextForm.css';

export default function TextForm(props) {
  // to convert into upper case
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " +  text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  // to lowercase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  //for clearing the text
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };
  // whenever a textArea / input files change
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  // Credits: A
  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  };

  // Credits: Coding Wala
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  // handleToTitleCase
  const handletoTitleCase = () => {
    console.log("title case is called");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    if(text.length<=0) return;
    let temText = "";
    var fch = text[0];
    temText += fch.toUpperCase();
    for (var i = 1; i < text.length; i++) {
      if (text[i - 1] === " ") {
        let ch = text[i];
        temText += ch.toUpperCase();
      } else {
        let ch = text[i];
        temText += ch.toLowerCase();
      }
    }
    setText(temText);
    props.showAlert("Convert into Title Case!", "success");
  };

  const [text, setText] = useState("");
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 style={{fontFamily:'cursive'}}>{props.heading}</h1>
        <br></br>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "5px",
            
          }}
        >
          
            <button className="btn btn-primary mx-1" style={{ fontSize:'40px', backgroundColor:'green' ,width:"370px",border:'solid red 5px',borderRadius:'17px',cursor:'pointer' }} onClick={handleUpClick}>
              Convert to Upper
            </button>
            <button style={{ fontSize:'40px',width:"370px",border:'solid red 5px',borderRadius:'17px',cursor:'pointer', backgroundColor:'green' }} className="btn btn-primary mx-1" onClick={handleLoClick}>
              Convert to Lower
            </button>
            <button  style={{fontSize:'40px',width:"370px",border:'solid red 5px',borderRadius:'17px' ,cursor:'pointer', backgroundColor:'green'}}className="btn btn-primary mx-1" onClick={handleClearClick}>
              Clear Text
            </button>
            <button style={{fontSize:'40px',width:"370px",border:'solid red 5px',borderRadius:'17px' ,cursor:'pointer', backgroundColor:'green' }} className="btn btn-primary mx-1" onClick={handleCopy}>
              Copy Text
            </button>
            <button style={{fontSize:'40px',width:"370px",border:'solid red 5px',borderRadius:'17px',cursor:'pointer' , backgroundColor:'green'}}
              className="btn btn-primary mx-1"
              onClick={handletoTitleCase}
            >
              Title Case
            </button>
            <button style={{fontSize:'40px',width:"370px",border:'solid red 5px',borderRadius:'17px', cursor:'pointer' , backgroundColor:'green'}}
              className="btn btn-primary mx-1"
              onClick={handleExtraSpaces}
            >
              Remove Spaces
            </button>
          
        </div>
      </div>
      <div className="container my-3" style={{ color: "gray" }}>
        <div className="container">
          {" "}
          <h2>Your text summary</h2>
          <h3>Size: {text.length} characters</h3>
          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Enter something in the textbox above to preview it here"}
          </p>
        </div>
      </div>
    </>
  );
}
