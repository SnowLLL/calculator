import React, { useState } from 'react';
import './../index.css'
import './../_base.scss'


const Buttons = () => { 
               
   const resetType = 'Reset',
         num = [/\d/g],
         operator = [
             '+',
             '-',
             '*',
             '/',
             '='
         ],
    
         initial = {
            currentVal: ' ',
            preValue: '0',
            resultNum: 0
         },

    [state, setState] = useState(initial);
   
   const clear = () =>{
        setState (initial);
        console.log("clear");
   }

   const handleNum = (event) => {
       let vString = event.target.value,
           vNum = parseFloat(vString),
           disString = [];    

        // click on and display numbers 
        if(state === initial){
            setState(initial)
        } else if (state !==initial)
        {
            disString = [...disString].concat(state.currentVal);
            setState({
                currentVal: disString + event.target.value,
                // preValue: toString(state.resultNum)
                preValue:'0'
            })
            // operator below 
            if (vString === '+'){
                // remove +, only digitals left
                // let newArrString = ArrayUtils.removeElement(disString, operator);(Java)
                let newArrString = disString.filter ((item)=> item !== '+');

                let newArrNum = parseFloat(newArrString);

                // setState.resultNum = newArrNum.reduce(
                //     function (a,b){
                //         return a+b
                //     }
                //     , 0);
                console.log(newArrString)
                console.log("add")
                // console.log (state.resultNum);
            }

        } else {
            console.log ("wrong")
        }
   }

   return (
       <div className="square d-grid align-items-center justify-content-center">
           <div>
           <div className="border border-secondary border-2 ps-3 pe-3 pt-1 pb-1" id="calInterface">
                <div id="input" style={{color: 'yellow'}}>{state.currentVal}</div>
                <div id="output" style={{color: 'white'}}>{state.preValue}</div>
                <div className="row">
                    <div className="col-6">
                        <button onClick ={clear} id="reset" className="btn btn-danger" type="reset" value="Reset">AC</button>
                    </div>
                    <div className="col-3">
                        <button onClick ={handleNum} type="submit" value="/" className="btn btn-secondary">/</button>
                    </div>
                    <div className="col-3">
                        <button onClick ={handleNum} type="submit" value="*" className="btn btn-secondary">*</button>
                    </div>  
                </div>
                <div className="row">
                    <div className="col-3">
                        <button onClick ={handleNum} type="submit" value="7" className="btn btn-dark">7</button>
                    </div>
                    <div className="col-3">
                        <button onClick ={handleNum} type="submit" value="8" className="btn btn-dark">8</button>
                    </div>
                    <div className="col-3">
                        <button onClick ={handleNum} type="submit" value="9" className="btn btn-dark">9</button>
                    </div>  
                    <div className="col-3">
                        <button onClick ={handleNum} type="submit" value="-" className="btn btn-secondary">-</button>
                    </div> 
                </div>
                <div className="row">
                    <div className="col-3">
                        <button onClick ={handleNum} type="submit" value="4" className="btn btn-dark">4</button>
                    </div>
                    <div className="col-3">
                        <button onClick ={handleNum} type="submit" value="5" className="btn btn-dark">5</button>
                    </div>
                    <div className="col-3">
                        <button onClick ={handleNum} type="submit" value="6" className="btn btn-dark">6</button>
                    </div>  
                    <div className="col-3">
                        <button onClick ={handleNum} type="submit" value="+" className="btn btn-secondary">+</button>
                    </div> 
                </div>
                <div className="row">
                    <div className="col-3">
                        <button onClick ={handleNum} type="submit" value="1" className="btn btn-dark">1</button>
                    </div>
                    <div className="col-3">
                        <button onClick ={handleNum} type="submit" value="2" className="btn btn-dark">2</button>
                    </div>
                    <div className="col-3">
                        <button onClick ={handleNum} type="submit" value="3" className="btn btn-dark">3</button>
                    </div>  
                </div>
                <div className="row">
                    <div className="col-6">
                        <button onClick ={handleNum} type="submit" value="0" id="zero" className="btn btn-dark">0</button>
                    </div>
                    <div className="col-3">
                        <button onClick ={handleNum} type="submit" value="." className="btn btn-dark">.</button>
                    </div> 
                </div>
                <button onClick ={handleNum} type="submit" value="=" className="btn" id="equal">=</button>
           </div>
           <p>Coded by Snow Liu</p>  
           </div>
       </div>
   );
}

export default Buttons