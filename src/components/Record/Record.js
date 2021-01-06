import React, { useState , useEffect} from "react";
import MicRecorder from "mic-recorder-to-mp3";

const Record = () => {
    const [isRecording,setIsRecording] = useState(false);
    const [blobURL,setBlobURL] = useState("");
    const [isBlocked, setIsBlocked] = useState(false);
    const [Mp3Recorder,setMp3Recorder] = useState(new MicRecorder({ bitRate: 128 }));
    const [playSession,setPlaySession] = useState(false);

    useEffect(() => {
        navigator.getUserMedia(
            { audio: true },
            () => {
              console.log("Permission Granted");
              setIsBlocked(false);
            //   this.setState({ isBlocked: false });
            },
            () => {
              console.log("Permission Denied");
              setIsBlocked(true);
            //   this.setState({ isBlocked: true });
            }
          );
    }, [])

    const start = () => {
        if (isBlocked) {
          console.log("Permission Denied");
        } else {
          Mp3Recorder.start()
            .then(() => {
                setIsRecording(true);
                setPlaySession(false)
            //   this.setState({ isRecording: true, playSession: false });
            })
            .catch((e) => console.error(e));
        }
      };
      const stop = () => {
        Mp3Recorder.stop()
          .getMp3()
          .then(([buffer, blob]) => {
            const blobURL = URL.createObjectURL(blob);
            setBlobURL(blobURL);
            setIsRecording(false);
            setPlaySession(true);
            // this.setState({ blobURL, isRecording: false, playSession: true });
          })
          .catch((e) => console.log(e));
      };

    return (
        <div className="ui equal width center aligned padded grid">
        <div className="row">
          <button
            onClick={start}
            className="ui labeled icon button"
            disabled={isRecording}
          >
            <i className="circle red icon"></i>
            Record
          </button>
          <button
            onClick={stop}
            className="ui right labeled icon button"
            disabled={!isRecording}
          >
            <i className="stop icon"></i>
            Next
          </button>
        </div>
        <div className="row">
          <audio
            src={blobURL}
            controls="controls"
            hidden={playSession ? false : true}
          />
        </div>
      </div>
    )
}
// class Record extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isRecording: false,
//       blobURL: "",
//       isBlocked: false,
//       Mp3Recorder: new MicRecorder({ bitRate: 128 }),
//       playSession: false,
//     };
//   }
//   componentDidMount() {
//     navigator.getUserMedia(
//       { audio: true },
//       () => {
//         console.log("Permission Granted");
//         this.setState({ isBlocked: false });
//       },
//       () => {
//         console.log("Permission Denied");
//         this.setState({ isBlocked: true });
//       }
//     );
//   }
//   start = () => {
//     if (this.state.isBlocked) {
//       console.log("Permission Denied");
//     } else {
//       this.state.Mp3Recorder.start()
//         .then(() => {
//           this.setState({ isRecording: true, playSession: false });
//         })
//         .catch((e) => console.error(e));
//     }
//   };
//   stop = () => {
//     this.state.Mp3Recorder.stop()
//       .getMp3()
//       .then(([buffer, blob]) => {
//         const blobURL = URL.createObjectURL(blob);
//         this.setState({ blobURL, isRecording: false, playSession: true });
//       })
//       .catch((e) => console.log(e));
//   };
//   render() {
//     return (
//       <div className="ui equal width center aligned padded grid">
//         <div className="row">
//           <button
//             onClick={this.start}
//             className="ui labeled icon button"
//             disabled={this.state.isRecording}
//           >
//             <i className="circle red icon"></i>
//             Record
//           </button>
//           <button
//             onClick={this.stop}
//             className="ui right labeled icon button"
//             disabled={!this.state.isRecording}
//           >
//             <i className="stop icon"></i>
//             Next
//           </button>
//         </div>
//         <div className="row">
//           <audio
//             src={this.state.blobURL}
//             controls="controls"
//             hidden={this.state.playSession ? false : true}
//           />
//         </div>
//       </div>
//     );
//   }
// }

export default Record;
