import React, { useState }  from 'react';
import Options from './Options';
import Questions from './Questions';
import TypeSelector from './TypeSelector';
import {useHistory} from 'react-router-dom'

const CreateSurvey = ({question,setQuestion}) => {
   
    const getId=()=>Math.floor(Math.random()*1000);
    const defaultOptions=[{id:getId(),value:''},{id:getId(),value:''}]
    const [qType,setQType] =useState(0);
    const [qText,setQText] = useState('');
    const [options,setOptions] = useState(defaultOptions) 
    const history=useHistory();
    // console.log(qType,qText,options);
    const addOption=()=>{
        
        
        let updatedOptions=[...options,{id:getId(),value:""}];
        setOptions(updatedOptions)
        
    }
    const delOption=(id)=>{
        if(options.length===2)
        {
            alert("a question should have atlease 2 options")
            return
        }
        // console.log("deleting id is ",id);
        let updatedOptions=options.filter((data)=>data.id!==id)
        // console.log(updatedOptions)

        setOptions(updatedOptions)
        
        
    }
    const updateOptions=(id,text)=>{
        // console.log(id,text);
        let updateOptions=[...options];
        const val=updateOptions.findIndex((data)=>data.id===id);
        updateOptions[val].value=text;
        setOptions(updateOptions);

    }
    const addQuestion=()=>{
        if(qType!==0)
        {
            let updatedQuestion=[...question]
        let newQuestion= {
            qType,qText,options
        }
        updatedQuestion.push(newQuestion);
        setQuestion(updatedQuestion);
        setQText("");
        setQType(0);
        setOptions(defaultOptions)
        }
        
        
    }
    const publish=()=>{
        addQuestion();
        history.push('/publish');
    }
    return (
        <>
        
        <TypeSelector qType={qType} setQType={setQType}/>
        {qType!==0?
            <>
            <Questions setQText={setQText}/>
            {options.map((data,ind)=>(
                <Options key={ind} data={data} setOptions={setOptions} updateOptions={updateOptions}
                addOption={addOption} delOption={delOption}/>
            ))}
            </>
            :null
        }
       <button type="button" className="btn btn-outline-primary" onClick={()=>addQuestion()}>Add</button>
       <button type="button" className="btn btn-outline-primary" onClick={()=>publish()}>Publish</button>

        </>
    );
};

export default CreateSurvey;