import React , {useContext,useState} from 'react';
import playerContetx from '../context/PlayerContetx';
// import {} from '../../public/samples/'
// const padsList = () =>{
//     let pads = [];
//     for (let i=0; i<9;i++){
//         pads[i]="Sample name"
//     }
//     return pads;
// }

function Pads({setCurrentPad}){
    const {SetCurrent,currentPad} = useContext(playerContext);
    let i=0;
    const pads = [
        [
            "funk beats",
            '../../public/samples/120_future_funk_beats_25.mp3'
        ],
        [
            "breack beats",
            '../../public/samples/120_future_funk_beats_25.mp3'
        ],
        [
            "funk beats",
            '../../public/samples/120_future_funk_beats_25.mp3'
        ],
        [
            "funk beats",
            '../../public/samples/120_future_funk_beats_25.mp3'
        ],
        [
            "funk beats",
            '../../public/samples/120_future_funk_beats_25.mp3'
        ],
        [
            "funk beats",
            '../../public/samples/120_future_funk_beats_25.mp3'
        ],
        [
            "funk beats",
            '../../public/samples/120_future_funk_beats_25.mp3'
        ],
        [
            "funk beats",
            '../../public/samples/120_future_funk_beats_25.mp3'
        ],
        [
            "funk beats",
            '../../public/samples/120_future_funk_beats_25.mp3'
        ]
    ]
    const [selected,setSelcted] = useState(0);
    return(
        <div className="pads container mt-5 mb-5"> 
                <div>
                    <div className="row">
                        <div className="col-12 col-sm-4">
                            <button onClick={()=>{setCurrentPad(pads[i][1]); setSelcted(i);}} className={(selected===i)?" btn btn-warning":"btn btn-primary"}>{pads[i++][0]}</button>
                        </div>  
                        <div className="col-12 col-sm-4"><button className="btn btn-primary">{pads[i++][0]}</button></div>  
                        <div className="col-12 col-sm-4"><button className="btn btn-primary">{pads[i++][0]}</button></div>  
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-4"><button className="btn btn-primary">{pads[i++][0]}</button></div>  
                        <div className="col-12 col-sm-4"><button className="btn btn-primary">{pads[i++][0]}</button></div>  
                        <div className="col-12 col-sm-4"><button className="btn btn-primary">{pads[i++][0]}</button></div>  
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-4"><button className="btn btn-primary">{pads[i++][0]}</button></div>  
                        <div className="col-12 col-sm-4"><button className="btn btn-primary">{pads[i++][0]}</button></div>  
                        <div className="col-12 col-sm-4"><button className="btn btn-primary">{pads[i++][0]}</button></div>  
                    </div>
                </div>
        </div>
    )
}

export default Pads;