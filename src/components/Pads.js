import React from 'react';

const padsList = () =>{
    let pads = [];
    for (let i=0; i<9;i++){
        pads[i]="Sample name"
    }
    return pads;
}

function Pads(){
    const pads = padsList();
    let i=0;
    return(
        <div className="pads container mt-5 mb-5"> 
                <div>
                    <div className="row">
                        <div className="col-12 col-sm-4"><button className="btn btn-primary">{pads[i++]}</button></div>  
                        <div className="col-12 col-sm-4"><button className="btn btn-primary">{pads[i++]}</button></div>  
                        <div className="col-12 col-sm-4"><button className="btn btn-primary">{pads[i++]}</button></div>  
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-4"><button className="btn btn-primary">{pads[i++]}</button></div>  
                        <div className="col-12 col-sm-4"><button className="btn btn-primary">{pads[i++]}</button></div>  
                        <div className="col-12 col-sm-4"><button className="btn btn-primary">{pads[i++]}</button></div>  
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-4"><button className="btn btn-primary">{pads[i++]}</button></div>  
                        <div className="col-12 col-sm-4"><button className="btn btn-primary">{pads[i++]}</button></div>  
                        <div className="col-12 col-sm-4"><button className="btn btn-primary">{pads[i++]}</button></div>  
                    </div>
                </div>
        </div>
    )
}

export default Pads;