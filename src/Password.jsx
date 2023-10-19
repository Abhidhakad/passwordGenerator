import './P.css';
import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react'

function Password(){
 const [password,setPassword] = useState("");
 const [range,setRange] = useState(8);
 const [num,setNum] = useState(false);
 const [spchar,setSpChar] = useState(false);
 const [copySuccess, setCopySuccess] = useState(false);

function rangeHandler(event){
  setRange(event.target.value)
}
useEffect(()=>{
    const str = 
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const speChar = "!@#$%^&*";
    let pass = "";
    
    if(spchar && num){
      let newstr = str+number+speChar;
      for(let i=1; i<=range; i++){
        let rand = Math.floor(Math.random()*newstr.length+1);
          pass +=newstr.charAt(rand);
          setPassword(pass);
      }   
    }
    else if(spchar){
      let newstr = str+speChar;
      for(let i=1; i<=range; i++){
      let rand = Math.floor(Math.random()*newstr.length+1);
        pass +=newstr.charAt(rand);
        setPassword(pass);
      }   
    }
     else if(num){
        let newstr = str+number;
        for(let i=1; i<=range; i++){
        let rand =Math.floor(Math.random()*newstr.length+1);
            pass +=newstr.charAt(rand);
            setPassword(pass);
        }
      }
      
    else{
      for(let i=1; i<=range; i++){
        let rand = Math.floor(Math.random()*str.length+1);
          pass +=str.charAt(rand);
          setPassword(pass);
    }
    }
},[range,num,spchar])

const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(password);
      alert("text copied to clipboard: " + password);
      // setCopySuccess('Text copied to clipboard!');
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 1500);
      
      
    } catch (error) {
      console.error('Failed to copy text: ', error);
      setCopySuccess('Copy failed');
    }
  };

  return(
    <>
     <div className='container'>
       <h2>Made By Abhishek Nagar</h2>
       <div className='wraper'>
         {/* section 01 */}
         <div className='section-1'>
            <div className='input_box'>
              <input id='ip' type='text'placeHolder="password" 
            readOnly value={password} 
            className={copySuccess ? 'input-copied' : ''}/>
            </div>

            <div className='cpbtn'>
              <button onClick={copyToClipboard} >Copy</button>
            </div>
         </div>

         {/* section 02 */}
         <div className='section-2'>
            <div className='rangebtn'>
               <input type='range' min='8' max='20' value= 
               {range}
              onChange={rangeHandler} />
               <span>Length ({range})</span>
            </div>

            <div className='cpbtn'>
              <input type='checkbox' id="number"
        onChange={ (event)=> setNum(event.target.checked)}/> 
               <label htmlFor='number'>Number</label>
            </div>

            <div className='cpbtn'>
                <input type='checkbox' id='sp'
                onChange={(event)=> 
                setSpChar(event.target.checked)} /> 
                 <label htmlFor='sp'>Character</label>
            </div>
           
         </div>
         
       </div>
     </div>
    </>
  )
};
export default Password;