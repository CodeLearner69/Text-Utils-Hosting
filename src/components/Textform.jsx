
import React, { useState } from 'react'

export default function Textform(props) {
    const [txt, setTxt] = useState(" ");
    const handleOnChange = (e) => {
        setTxt(e.target.value);
    }
    const handleUpperCase = () => {
        setTxt(txt.toUpperCase());
        props.showAlert("Successfully converted to upper case", "success");
    }
    const handleLowerCase = () => {
        setTxt(txt.toLowerCase());
        props.showAlert("Successfully converted to lower case", "success");
    }
    const handleClearCase = () => {
        let newtxt = '';
        setTxt(newtxt);
        props.showAlert("Text Cleared", "danger");
    }
    const handleCopyCase=()=>{
        navigator.clipboard.writeText(txt);
        props.showAlert("Copied to clipboard", "success");
    }
    return (
        <>
            <div className="container">
                <h1 className={` my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Text Editor</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.mode === 'dark' ? 'light' : 'dark'}`}><h3>Enter text to enalyze</h3></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={txt} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#524a4a':'white',color:props.mode==='dark'?'white':'black'}} rows="6"></textarea>
                </div>
                <button type="button" className="btn btn-primary m-2" onClick={handleUpperCase}>Convert to uppercase</button>
                <button type="button" className="btn btn-primary m-2" onClick={handleLowerCase}>Convert to lowercase</button>
                <button type="button" className="btn btn-secondary m-2" onClick={handleClearCase}>Clear</button>
                <button type="button" className="btn btn-info m-2" onClick={handleCopyCase}>Copy</button>
                <h3 className={`my-2 text-${props.mode === 'dark' ? 'light' : 'dark'}`} >Text Summary</h3>
                <p className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{txt.split(/\s+/).filter((elm) => { return elm.length !== 0 }).length} words and {txt.length} characters</p>
                <h3 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Preview</h3>
                <p className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{txt.length<=0?"Nothing to preview":txt}</p>
            </div>
        </>
    )
}
