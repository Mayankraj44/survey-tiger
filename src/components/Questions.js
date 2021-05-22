import React from 'react';

const Questions = ({setQText}) => {
    return (
        <div className='col-md-8 offser-md-2 col-12 input-group my-3'>
            <div className='input-group-prepend'>
                <span className='input-group-text' id="basic-addon1">?</span>
                </div>
            <input type="text"className='form-control' placeholder="Question" onChange={event=>setQText(event.target.value)}></input>
        </div>
    );
};

export default Questions;