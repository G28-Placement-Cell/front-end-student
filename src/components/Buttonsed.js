import { useState } from "react";

export const Buttoned = () => {
    const [stads, setStads] = useState(false);
    return (
        <>
            {!stads && <button style={{ backgroundColor: "#493D72", color: "white",height: -10, fontSize: 15, alignItems: "center", justifyContent:"center"}} className="btn btn-lg pb-2" onClick={() => { setStads(!stads) }}>REGISTER</button>}
            {stads &&
                <>
                    <button style={{ backgroundColor: "#493D72", color: "white" }} className="btn btn-sm pb-2" onClick={() => { setStads(!stads) }}> DEREGISTER </button>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center',justifySelf:'flex-end' , inlineSize:110}}>
                        <div className="pb-2 d-flex flex-column gap-1 px-1 pe-1 my-1" style={{ border: '1px solid #2B2442', borderRadius: '5px'}}>
                            <h5 className="me-0 pe-0 mb-0">Resume</h5>
                            <button style={{ backgroundColor: "#493D72", color: "white" }} className="btn btn-sm"> DOWNLOAD</button>
                            <button style={{ backgroundColor: "#493D72", color: "white"}} className="btn btn-sm"> UPDATE</button>
                        </div>
                    </div>
                </>
            }
        </>
    );
}