import { useState, useEffect } from 'react';
import * as React from 'react';
import { Typography, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link,useNavigate } from 'react-router-dom'
import { Buttoned } from '../components/Buttonsed';
// import Header from '../components/Header';
import 'react-data-grid/lib/styles.css';
import { CheckDate } from '../components/ChechDate'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

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

export const Tablet = () => {
  // const [stats, setStatus] = useState(false);
  const [jobProfiles, setJobProfiles] = useState([]);
  const [regJobProfiles, setRegJobProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [student, setStudent] = useState({});
  const [loadings, setLoadings] = useState(true);
  

  useEffect(() => {
    fetch('http://localhost:8000/api/student/profile', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setStudent(data.stu);
        setRegJobProfiles(data?.stu?.jobprofiles);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const navigate = useNavigate();
  // const booled = localStorage.getItem('studentInfo');
  // const boolVerification = booled ? JSON.parse(booled).verified : null;

  // console.log(boolVerification);

  useEffect(() => {
    fetch('http://localhost:8000/api/jobprofile/', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setJobProfiles(data.jobProfiles);
        setLoadings(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadings(false);
      });
  }, []);

  console.log('studentDetails', student);
  console.log('reg', regJobProfiles);
  console.log('jobprofiles', jobProfiles);

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    const date = new Date(dateString);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();

    return `${day}/${month}/${year} ${date.toLocaleString(undefined, options).split(' ')[1]}`;
  };

  return (
    student?.verified? (<> 
      {loading || loadings ? (
        <div style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          padding: "5vh 5vw",
        }}>
          <Paper sx={{ py: 1, px: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '73vh' }} className="container">
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          </Paper>
        </div>
      ) : (
        <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
          <Table stickyHeader sx={{ minWidth: 700 }} aria-label="customized table">
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
              {jobProfiles && jobProfiles.length > 0 && jobProfiles.map((row, index) => (
                (student?.registering_for === row.offer_type) &&
                <>
                  <StyledTableRow className="mt-10 py-10" key={index}>
                    <StyledTableCell component="th" scope="row">{index + 1}</StyledTableCell>
                    <StyledTableCell align="right">
                      <Link to={`/JobProfile/${row._id}`} style={{ textDecoration: 'none', color: 'black' }}>{row.company_name.toUpperCase()}</Link>
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.offer_type.toUpperCase()}</StyledTableCell>
                    <StyledTableCell align="right">{row.cpi_criteria}</StyledTableCell>
                    <StyledTableCell align="right">{row.open_for.toUpperCase()}</StyledTableCell>
                    <StyledTableCell align="right">{formatDate(row.registration_start_date)}</StyledTableCell>
                    <StyledTableCell align="right">{formatDate(row.registration_end_date)}</StyledTableCell>
                    <StyledTableCell align="right">
                      <CheckDate reg_open={row.registration_start_date} reg_end={row.registration_end_date} />
                    </StyledTableCell>
                    <StyledTableCell align="right" style={{ alignItems: 'end', display: 'flex', flexDirection: 'column', justifyContent: 'end', columnWidth: 50 }}>
                      <Buttoned reg_open={row.registration_start_date} reg_end={row.registration_end_date} cpiOf={row.cpi_criteria} jobId={row._id} registered={regJobProfiles.some(profile => profile === row._id)} student_cpi={student?.cpi} />
                    </StyledTableCell>
                  </StyledTableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      
    </>): (navigate('/nv'))
  );
};