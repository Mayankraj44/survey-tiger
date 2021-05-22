import React from 'react';

const Options = ({data,updateOptions,addOption,delOption}) => {
    // console.log(data)
    return (
        <div className="col-md-8 offset-md-2 col-12 input-group my-3">
            <input type='text' className='form-control' placeholder="options" value={data.value} onChange={(event=>updateOptions(data.id,event.target.value))}></input>
            <div className='input-group-append'>
            <button type="button" className="btn btn-outline-primary" onClick={()=>addOption()}>+</button> 
            <button type="button" className="btn btn-outline-primary" onClick={()=>delOption(data.id)}>-</button>
            </div>
            
        </div>
    );
};

export default Options;