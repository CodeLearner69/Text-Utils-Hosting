import React from 'react'

export default function Textform(props) {
    return (
        <>
            <div className="container">
                <h1 className={`text-${props.mode==='dark'?'light':'dark'}`}>Text Editor</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.mode==='dark'?'light':'dark'}`}>Enter text to enalyze</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                </div>
                <button type="button" className="btn btn-primary m-2">Convert to uppercase</button>
                <button type="button" className="btn btn-primary m-2">Convert to lowercase</button>
                <button type="button" className="btn btn-secondary m-2">Clear</button>
                <h3 className={`my-2 text-${props.mode==='dark'?'light':'dark'}`} >Text Summary</h3>

            </div>
        </>
    )
}
