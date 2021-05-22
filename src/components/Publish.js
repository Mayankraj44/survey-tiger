import React from 'react';

const Publish = ({question}) => {
    console.log(question)
    return (
        <>
         {question.length!==0? 
         <>
         {question.map(ques=>(
             <>
             {ques.qType===1 ? 
                <>
                <div>{ques.qText}</div>
                {ques.options.map(values=>(
                    <>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label" for="flexRadioDefault2">
                        {values.value}
                    </label>
                    </div>
                    </>
                ))}
                </>
             :
             <>
             <div>{ques.qText}</div>
             {ques.options.map(values=>(
                 <>
                 <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                    {values.value}
                </label>
                </div>
                 </>
             ))}
             </> }
            </>   
         ))}
           <button type="button" className="btn btn-outline-primary" >Submit</button>
         </>
         : `No Questions`}
        </>
    );
};

export default Publish;