import { useState } from "react";
import "../App.css"

export const Job = (props) => {
    const [state,setState] = useState(false);
    const [sunt,setSunt] = useState(true);


    return (
        <div className=" px-2 mx-2 me-2 d-flex justify-content-center mt-2 border border-danger rounded align-items-center gap-5 px-1 pe-1" style={{borderColor: "red",justifyContent: "space-between"}}>
            <div className="w-50 h-50" style={{color: "blue"}}>
            <h3>{props.name}</h3>
            </div>
            <div className="w-50 h-50">
            <h3>{props.type}</h3>
            </div>
            <div className="w-50 h-50">
            <h3>{props.cpi}</h3>
            </div>
            <div className="w-50 h-50">
            <h3>{props.open_for}</h3>
            </div>
            <div className="w-75 h-75">
            <h3>{props.registration_open}</h3>
            </div>
            <div className="w-75 h-75">
            <h3>{props.registration_end}</h3>
            </div>
            <div className="w-50 h-50">
            {sunt && <h3>OPEN</h3>}
            {!sunt && <h3>CLOSED</h3>}
            </div>
            <div className="w-50 h-50 pt-2">
                {!state && <button className="btn btn-success btn-sm" onClick={() => {setState(!state)}}> REGISTER </button>} 
                { state && 
                        <>
                            <button className="btn btn-success btn-sm pb-2" onClick={() => {setState(!state)}}> DEREGISTER </button>
                            <div className="pb-2 d-flex flex-column gap-1 px-1 pe-1 my-1" style={{ border: '1px solid #cc0000'  }}>
                            <h5> Resume </h5>
                            <button className="btn btn-success btn-sm"> DOWNLOAD</button>
                            <button className="btn btn-success btn-sm"> UPDATE</button>
                            </div>
                        </>
                }  
            </div> 
        </div>
        // <div className="mx-2 me-2 d-flex border rounded border-danger justify-content-between align-items-center">
        //     <table className="table">
        //             <tr>
        //                 <th scope="row">{props.name}</th>
        //                 <td>{props.type}</td>
        //                 <td>{props.cpi}</td>
        //                 <td>{props.open_for}</td>
        //                 <td>{props.registration_open}</td>
        //                 <td>{props.registration_end}</td>
        //                 <td>{!state && props.status}</td>
        //                 <td>{state && props.status}</td>
        //                 <td>{<button>{!state && <h3>OPEN</h3>}</button>}</td>
        //             </tr>
        //     </table>
        // </div>
    ); 
}