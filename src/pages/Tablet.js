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
  const [company, setCompany] = useState([]);//student object
  const [loading, setLoading] = useState(true);//loading state
  useEffect(() => {
    console.log(localStorage.getItem('token'));
    fetch('http://localhost:8000/api/student/jobprofile', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    }).then((res) => res.json()).then((data) => {
      console.log(data.job);
      setCompany(data.job);
      // setCompany(data);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }, []);


  
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };
 

  const [student, setStudent] = useState({});//student object
  const [loadings, setLoadings] = useState(true);//loading state

  useEffect(() => {
    console.log(localStorage.getItem('token'));
    fetch('http://localhost:8000/api/student/profile', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    }).then((res) => res.json()).then((data) => {
      console.log(data);
      setStudent(data.stu);
      setLoadings(false);
    }).catch((err) => {
      console.log(err);
      setLoadings(false);
    });
  }, []);

    const [cnt,setCnt]=useState(1);
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
          {company.map((row,index) => (
            (student?.registering_for===row.offer_type) &&
            <>
            <StyledTableRow className="mt-10 py-10" key={row._id}>
              <StyledTableCell component="th" scope="row">{index+1}</StyledTableCell>
              <StyledTableCell  align="right">
                <a style={{color: "#2B2442", textDecoration: "none"}} href={row.link} target="_blank">{row.company_name}</a>
              </StyledTableCell>
              <StyledTableCell align="right">{row.offer_type}</StyledTableCell>
              <StyledTableCell align="right">{row.cpi_criteria}</StyledTableCell>
              <StyledTableCell align="right">{row.open_for}</StyledTableCell>
              <StyledTableCell align="right">{new Date(row.registration_start_date).toLocaleString(undefined, options)}</StyledTableCell>
              <StyledTableCell align="right">{new Date(row.registration_end_date).toLocaleString(undefined, options)}</StyledTableCell>
              <StyledTableCell align="right">

                <CheckDate reg_open={row.registration_start_date} reg_end={row.registration_end_date}/>
              </StyledTableCell>
              <StyledTableCell align="right" style={{alignItems:'end', display:'flex', flexDirection:'column', justifyContent:'end', columnWidth: 50}}><Buttoned reg_open={row.registration_start_date} reg_end={row.registration_end_date} cpiOf={row.cpi_criteria}/></StyledTableCell>
            </StyledTableRow>
            
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {/* <Footer /> */}
    </>  
);
}