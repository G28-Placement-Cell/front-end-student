import { useState,useEffect } from "react";
// import {CheckDate} from "../pages/ChechDate"

export const Buttoned = ({reg_open,reg_end,cpiOf}) => {
    const [stads, setStads] = useState(false);
    const studCpi = 7;
    var currentDate = new Date();
    const [stats, setStatus] = useState(false);
    const date1 = new Date(reg_open);
    const date2 = new Date(reg_end);
    useEffect(() => {
        if (currentDate.getTime() > date1.getTime() && currentDate.getTime() < date2.getTime())
            setStatus(!stats);
        console.log(date1, date2);
    }, []);

    return (
        <>  {stats && (studCpi>=cpiOf) && !stads && <button style={{ backgroundColor: "#493D72", color: "white", fontSize: 16, height: 41, 
            marginTop:2}} className="btn btn-lg pb-2" onClick={() => { setStads(!stads) }}>REGISTER</button>}
            {stads &&
                <>
                    <button style={{ backgroundColor: "#493D72", color: "white", marginTop: 2, fontSize: 15, height: 41, borderRadius: 5}} className="btn btn-sm pb-2" onClick={() => { setStads(!stads) }}> DEREGISTER </button>
                    {/* <div style={{display:'flex', flexDirection:'column', justifyContent:'center',justifySelf:'flex-end' , inlineSize:110}}>
                        <div className="pb-2 d-flex flex-column gap-1 px-1 pe-1 my-1" style={{ border: '1px solid #2B2442', borderRadius: '5px'}}>
                            <h5 className="me-0 pe-0 mb-0">Resume</h5>
                            <button style={{ backgroundColor: "#493D72", color: "white" }} className="btn btn-sm"> DOWNLOAD</button>
                            <button style={{ backgroundColor: "#493D72", color: "white"}} className="btn btn-sm"> UPDATE</button>
                        </div>
                    </div> */}
                </>
            }
            {(!stats || studCpi<cpiOf) && <><button style={{ backgroundColor: "#493D72", color: "white", fontSize: 16, height: 41, 
            marginTop:2}} className="btn btn-lg pb-2" disabled> REGISTER </button></>}
            {/* { !stats && <button style={{ backgroundColor: "#493D72", color: "white", fontSize: 16, height: 41, 
            marginTop:2}} className="btn btn-lg pb-2" onClick={() => { setStads(!stads) }}>REGISTER</button>} */}
        </>
    );
}