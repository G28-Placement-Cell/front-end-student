import { useState } from 'react';
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
import Header from '../components/Header';
import 'react-data-grid/lib/styles.css';
import Footer from '../components/Footer';


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
  
  function createData(name, type,cpi,link,open_for,registration_open,registration_end) {
    return { name, type,cpi,link,open_for,registration_open,registration_end };
  }

export const Tablet = () => {
  const [stats, setStatus] = useState(true);

    const rows = [
        createData('Micryyyyyydffffffffosoft', "Summer Internship", "NONE","https://www.microsoft.com/en-in/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('Google', "Summer Internship", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('Google', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('Google', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('Google', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('Google', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('Google', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('Google', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('Google', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('Google', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('Google', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('Google', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
        createData('eeeed', "Job", 7,"https://www.google.com/","btech-ict,btech-mnc", "12-20-2023 06:00", "12-20-2023 08:00"),
    ];

return (
<>
    {/* <Header />   */}
    <TableContainer component={Paper} style={{height: '85vh'}} sx={{borderRadius:0}}>
      <Table sx={{ minWidth: 700}} aria-label="customized table">
        <TableHead>
          <TableRow >
            <StyledTableCell>COMPANY NAME</StyledTableCell>
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
            <StyledTableRow className="mt-10 py-10" key={row.name}>
              <StyledTableCell  component="th" scope="row">
                <a style={{color: "#2B2442", textDecoration: "none"}} href={row.link} target="_blank">{row.name}</a>
              </StyledTableCell>
              <StyledTableCell align="right">{row.type}</StyledTableCell>
              <StyledTableCell align="right">{row.cpi}</StyledTableCell>
              <StyledTableCell align="right">{row.open_for}</StyledTableCell>
              <StyledTableCell align="right">{row.registration_open}</StyledTableCell>
              <StyledTableCell align="right">{row.registration_end}</StyledTableCell>
              <StyledTableCell align="right">{stats && "OPEN"}{!stats && "CLOSED"}</StyledTableCell>
              <StyledTableCell align="right" style={{alignItems:'end', display:'flex', flexDirection:'column', justifyContent:'end', columnWidth: 50}}><Buttoned /></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {/* <Footer /> */}
    </>  
);
}