import React , {useContext} from 'react';
import playerContext  from '../context/PlayerContetxt';
// import {} from '../../public/samples/'
// const padsList = () =>{
//     let pads = [];
//     for (let i=0; i<9;i++){
//         pads[i]="Sample name"
//     }
//     return pads;
// }

function Pads(){
    const {SetCurrent,currentPad, samples} = useContext(playerContext);
    let i=0;
    return(
        // <div className="pads container mt-5 mb-5"> 
        //         <div>
        //             <div className="row">
        //                 <div className="col-12 col-sm-4">
        //                     <button onClick={()=>{SetCurrent(i);}} className={(currentPad===i)?" btn btn-warning":"btn btn-primary"}>{samples[i++][0]}</button>
        //                 </div>  
        //                 <div className="col-12 col-sm-4">
        //                     <button onClick={()=>{SetCurrent(i);}} className={(currentPad===i)?" btn btn-warning":"btn btn-primary"}>{samples[i++][0]}</button>
        //                 </div>  
        //                 <div className="col-12 col-sm-4">
        //                     <button onClick={()=>{SetCurrent(i);}} className={(currentPad===i)?" btn btn-warning":"btn btn-primary"}>{samples[i++][0]}</button>
        //                 </div>  
        //             </div>
        //             <div className="row">
        //                 <div className="col-12 col-sm-4">
        //                     <button onClick={()=>{SetCurrent(i);}} className={(currentPad===i)?" btn btn-warning":"btn btn-primary"}>{samples[i++][0]}</button>
        //                 </div>  
        //                 <div className="col-12 col-sm-4">
        //                     <button onClick={()=>{SetCurrent(i);}} className={(currentPad===i)?" btn btn-warning":"btn btn-primary"}>{samples[i++][0]}</button>
        //                 </div>  
        //                 <div className="col-12 col-sm-4">
        //                     <button onClick={()=>{SetCurrent(i);}} className={(currentPad===i)?" btn btn-warning":"btn btn-primary"}>{samples[i++][0]}</button>
        //                 </div>  
        //             </div>
        //             <div className="row">
        //                 <div className="col-12 col-sm-4">
        //                     <button onClick={()=>{SetCurrent(i);}} className={(currentPad===i)?" btn btn-warning":"btn btn-primary"}>{samples[i++][0]}</button>
        //                 </div>  
        //                 <div className="col-12 col-sm-4">
        //                     <button onClick={()=>{SetCurrent(i);}} className={(currentPad===i)?" btn btn-warning":"btn btn-primary"}>{samples[i++][0]}</button>
        //                 </div>  
        //                 <div className="col-12 col-sm-4">
        //                     <button onClick={()=>{SetCurrent(i);}} className={(currentPad===i)?" btn btn-warning":"btn btn-primary"}>{samples[i++][0]}</button>
        //                 </div>  
        //             </div>
        //         </div>
        // </div>


      <ul className="loi">
        {samples.map((sample, i) => (
          <ul
            className={'songContainer ' + (currentPad === i ? 'selected' : '')}
            key={i}
            onClick={() => {
              SetCurrent(i)
            }}
          >
            <div className="row">
                <div className="col-4">
                    <button onClick={()=>{SetCurrent(i);}} className={(currentPad===i)?" btn btn-warning":"btn btn-primary"}>{sample[0]}</button>
                </div>
            </div>
          </ul>
        ))}
      </ul>

    )
}

export default Pads;