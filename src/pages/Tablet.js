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
import { Link } from 'react-router-dom'
import { Buttoned } from '../components/Buttonsed';
// import Header from '../components/Header';
import 'react-data-grid/lib/styles.css';
import moment from 'moment-timezone';
import { CheckDate } from '../components/ChechDate'
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://back-end-production-3140.up.railway.app/api/student/profile', {
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
        if (data.stu.verified === false) {
          navigate('/nv');
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [navigate]);

  useEffect(() => {
    fetch('https://back-end-production-3140.up.railway.app/api/jobprofile/', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => res.json())
      .then(async (data) => {
        const updatedJobProfiles = await Promise.all(data.jobProfiles.map(async (profile) => {
          if (profile.company) {
            try {
              console.log('profile', profile);
              const response = await fetch(`http://localhost:8000/api/company/name/${profile?.company}`, {
                method: 'GET',
                headers: {
                  'content-type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
              });
              const companyData = await response.json();

              console.log('companyData', companyData?.company?.companyname);
              return {
                ...profile,
                companyName: companyData?.company?.companyname
              };
            } catch (err) {
              console.error(err);
              return {
                ...profile,
                companyName: 'Company Name Unavailable'
              };
            }
          } else {
            return {
              ...profile,
              companyName: ''
            };
          }
        }));
        setJobProfiles(updatedJobProfiles);
        setLoadings(false);
      })
      .catch((err) => {
        console.error(err);
        setLoadings(false);
      });
  }, []);

  // console.log('studentDetails', student);
  // console.log('reg', regJobProfiles);
  // console.log('jobprofiles', jobProfiles);

  // const formatDate = (dateString) => {
  const options = { day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'UTC' };
  //   const date = new Date(dateString);

  //   const day = date.getDate().toString().padStart(2, '0');
  //   const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  //   const year = date.getFullYear();

  //   return `${day}/${month}/${year} ${date.toLocaleString('en-GB', options).split(' ')[1]}`;
  // };

  console.log('jobProfiles', jobProfiles);

  return (
    <>
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
                <StyledTableCell align="right">PROFILE NAME</StyledTableCell>
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
                  <StyledTableRow className="mt-10 py-10" key={row?._id}>
                    <StyledTableCell component="th" scope="row">{index + 1}</StyledTableCell>
                    <StyledTableCell align="right">
                      <Link
                        to={`/JobProfile/${row?.companyName}/${row._id}`}
                        style={{
                          textDecoration: 'none',
                          color: 'black',
                          transition: 'color 0.3s ease-in-out', // Adding transition for smooth effect
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = 'purple';
                          e.target.style.textDecoration = 'underline'
                        }} // Change color on hover
                        onMouseLeave={(e) => {
                          e.target.style.color = 'black';
                          e.target.style.textDecoration = 'none'
                        }} // Reset color on mouse leave
                      >
                        {row?.companyName?.toUpperCase()}
                      </Link>

                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Link
                        to={`/JobProfile/${row?.companyName}/${row._id}`}
                        style={{
                          textDecoration: 'none',
                          color: 'black',
                          transition: 'color 0.3s ease-in-out', // Adding transition for smooth effect
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = 'purple';
                          e.target.style.textDecoration = 'underline'
                        }} // Change color on hover
                        onMouseLeave={(e) => {
                          e.target.style.color = 'black';
                          e.target.style.textDecoration = 'none'
                        }} // Reset color on mouse leave
                      >
                        {row.company_name.toUpperCase()}
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell align="right">{row?.offer_type?.toUpperCase()}</StyledTableCell>
                    <StyledTableCell align="right">{row.cpi_criteria}</StyledTableCell>
                    <StyledTableCell align="right">{row.open_for.toUpperCase()}</StyledTableCell>
                    <StyledTableCell align="right">{new Date(row.registration_start_date).toLocaleString('en-GB', options)}</StyledTableCell>
                    <StyledTableCell align="right">{new Date(row.registration_end_date).toLocaleString('en-GB', options)}</StyledTableCell>
                    <StyledTableCell align="right">
                      <CheckDate reg_open={moment.utc(row.registration_start_date).tz('UTC').format('LLLL')} reg_end={moment.utc(row.registration_end_date).tz('UTC').format('LLLL')} />
                    </StyledTableCell>
                    <StyledTableCell align="right" style={{ alignItems: 'end', display: 'flex', flexDirection: 'column', justifyContent: 'end', columnWidth: 50 }}>
                      <Buttoned reg_open={moment.utc(row.registration_start_date).tz('UTC').format('LLLL')} reg_end={moment.utc(row.registration_end_date).tz('UTC').format('LLLL')} cpiOf={row.cpi_criteria} jobId={row._id} registered={regJobProfiles.some(profile => profile === row._id)} student_cpi={student?.cpi} />
                    </StyledTableCell>
                  </StyledTableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};