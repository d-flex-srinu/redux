import React, {useState} from "react"


export default function TextForm(props) {
    const handleUpClick = ()=> {
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted into Uppercase", "Success")
    }

    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted into LowerCase", "Success")

    }

    const handleCopy = ()=> {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been Copied", "Successfully")
    }

    const handleExtraSpaces =()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Space has been Removed", "Successfully")
    }

    const handleClearClick = ()=> {
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared", "Success")
    }

    const handleOnChange =(event)=>{
        console.log("On change");
        setText(event.target.value);
    }

const [text, setText] = useState("");
// text = "new text";  // Wrong way to change state
// setText("new text"); //Correct way to change the state
    return (
        <>
        <div className="container"> 
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <div className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</div>
            <div className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</div>
            <div className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</div>
            <div className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</div>
            <div className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</div>
        </div>
        <div className="container my-3">
            <h1>Your text Summary</h1>
            {/* <p>{text.split(" ").length} Words and {text.length} characters</p> */}
            {/* <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p> */}
            <p>{text.length>0 ? text.trim().split(" ").length : 0}  words and {text.replace(/\s+/g, '').length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text: "Enter something in the above textbox to preview it here"}</p>
        </div>
        </>
    )
}