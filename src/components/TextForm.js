import React, {useState} from 'react'


//Changed for="myBox" in textarea bootstrap

//changed id to id="myBox"

/*

React Hooks are functions that let you use state and other React features without writing a class. They were introduced in React 16.8. Some of the most commonly used hooks are useState, useEffect, and useContext.

useState: This hook lets you add React state to function components.
useEffect: This hook lets you perform side effects in function components.
useContext: This hook lets you subscribe to React context without introducing nesting.

*/


/*

The line const [text, setText] = useState('Enter text here'); is using the useState hook from React.

Here's a breakdown of what's happening:

useState('Enter text here'): This is a call to the useState hook with the initial state set to 'Enter text here'. useState returns an array with two elements: the current state and a function to update that state.

const [text, setText] =: This is array destructuring in JavaScript. It's a way to unpack values from arrays, or properties from objects, into distinct variables. In this case, it's creating a text variable with the current state and a setText function to update the text state.

So, text is a state variable, and setText is a function to update that state. Whenever you want to change the value of text, you would call setText with the new value.

// This line will be inside our TextForm() function and before return() statement

//thus state-variable, "text" inside where is req. tag under as 'value={text}'

//to make changes we've done onClicke = {handleUpClick}, defined a method to handle upper case conversion of letters

//main method that handles change of text in text area id handleOnChange with event variable that uses setText(event.target.value); to make changes

//Inside text area written sytle={{backgroundColor: props.mode==='light'?'dark':'light'}} same logic used keyword backgroundCOlor to style
*/

export default function TextForm(props) {

    //2).
    const handleUpClick = ()=> {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = ()=> {
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    //3).
    const handleOnChange = (event)=> {
        console.log("OnChange was clicked");
        setText(event.target.value);
    }

    //4).
    const handleCopy = ()=> {
        console.log("handleCopy was clicked");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    //5). 
    const handleExtraSpaces = () => {
        let newText = text.replace(/\s+/g, " ").trim();
        setText(newText);
    }

    //6).
    const handleClearText = () => {
        let newText = '';
        setText(newText);
    }


    // 1).
    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    </div>
                    <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>

  )
}
