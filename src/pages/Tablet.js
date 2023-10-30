import { useState,useEffect } from 'react';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Buttoned } from '../components/Buttonsed';
// import Header from '../components/Header';
import 'react-data-grid/lib/styles.css';
import {CheckDate } from '../components/ChechDate'

// import Footer from '../components/Footer';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#493D72',
      color: 'white',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
      
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  }));
  
  function createData(profileId,name, type,cpi,link,open_for,registration_open,registration_end) {
    return { profileId,name, type,cpi,link,open_for,registration_open,registration_end };
  }

export const Tablet = () => {
  // const [stats, setStatus] = useState(false);


    const rows = [
        createData(1,'Microsoft', "SI", 0,"https://www.microsoft.com/en-in/","btech-ict,btech-mnc", "2023-12-15 22:50:00", "2023-12-16 23:00:00"),
        createData(2,'Google', "SI", 7,"https://www.google.com/","btech-ict,btech-mnc", "2023-10-30 22:50:00", "2023-12-30 23:00:00"),
        createData(3,'Google', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "2023-12-15 22:50:00", "2023-12-16 23:00:00"),
        createData(4,'Google', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "2023-12-15 22:50:00", "2023-12-16 23:00:00"),
        // createData(5,'Google', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(6,'Google', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(7,'Google', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(8,'Google', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(9,'Google', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(10,'Google', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(11,'Google', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(12,'Google', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(13,'eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(14,'eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(15,'eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(16,'eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(17,'eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(18,'eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(19,'eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(20,'eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(21,'eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(22,'eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(23,'eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(24,'eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(25,'eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(26,'eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(27,'eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(28,'eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(29,'eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(30,'eeeeddddddd', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(31,'eeeeddddddd', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(32,'eeeeddddddd', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(33,'eeeeddddddd', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(34,'eeeeddddddd', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(35,'eeeeddddddd', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(36,'eeeeddddddd', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(37,'eeeeddddddd', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        // createData(38,'eeeeddddddd', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
    ];

return (
<>
{/* style={{height: '85vh'}}  */}
    {/* <Header />   */}
    <TableContainer component={Paper} sx={{borderRadius:0}}>
      <Table stickyHeader sx={{ minWidth: 700}} aria-label="customized table">
        <TableHead >
          <TableRow >
          <StyledTableCell>PROFILE ID</StyledTableCell>
            <StyledTableCell align="right">COMPANY NAME</StyledTableCell>
            <StyledTableCell align="right">TYPE</StyledTableCell>
            <StyledTableCell align="right">CPI</StyledTableCell>
            <StyledTableCell align="right">OPEN FOR</StyledTableCell>
            <StyledTableCell align="right">REGISTRATION STARTS</StyledTableCell>
            <StyledTableCell align="right">REGISTRATION ENDS</StyledTableCell>
            <StyledTableCell align="right">STATUS</StyledTableCell>
            <StyledTableCell align="right">ACTION</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow className="mt-10 py-10" key={row.profileId}>
              <StyledTableCell component="th" scope="row">{row.profileId}</StyledTableCell>
              <StyledTableCell  align="right">
                <a style={{color: "#2B2442", textDecoration: "none"}} href={row.link} target="_blank">{row.name}</a>
              </StyledTableCell>
              <StyledTableCell align="right">{row.type}</StyledTableCell>
              <StyledTableCell align="right">{row.cpi}</StyledTableCell>
              <StyledTableCell align="right">{row.open_for}</StyledTableCell>
              <StyledTableCell align="right">{row.registration_open}</StyledTableCell>
              <StyledTableCell align="right">{row.registration_end}</StyledTableCell>
              <StyledTableCell align="right">
                <CheckDate reg_open={row.registration_open} reg_end={row.registration_end}/>
              </StyledTableCell>
              {/* if(currentDate.getTime()>{row.registration_open}.getTime() && currentDate.getTime()<{row.registration_end}.getTime())  */}
              {/* <StyledTableCell align="right"><CheckDate /></StyledTableCell> */}
              
              <StyledTableCell align="right" style={{alignItems:'end', display:'flex', flexDirection:'column', justifyContent:'end', columnWidth: 50}}><Buttoned reg_open={row.registration_open} reg_end={row.registration_end} cpiOf={row.cpi}/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {/* <Footer /> */}
    </>  
);
}