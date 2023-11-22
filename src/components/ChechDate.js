import moment from 'moment';
import { useState, useEffect } from 'react';

export const CheckDate = ({ reg_open, reg_end }) => {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' };
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
        <>
            {stats ? "OPEN" : "CLOSED"}
        </>
    );
}