// src/App.js
import React from 'react';
import '../style/announcement.css';
import Announcements from '../components/Announcements';
import { Typography } from '@mui/material';

function App() {
  const announcementsData = [
    { id: 1, title: 'Company A Recruitment', description: 'Recruitment for Company A is now open.' },
    { id: 2, title: 'Company B Recruitment', description: 'Company B will conduct interviews on Oct 5th.' },
    { id: 3, title: 'Company C Recruitment', description: 'Company C is hiring new talent.' },
    { id: 4, title: 'Company D Internship', description: 'Apply for the summer internship at Company D.' },
    { id: 5, title: 'Company E Hiring Event', description: 'Join Company E\'s hiring event on Nov 15th.' },
    { id: 6, title: 'Company F Job Fair', description: 'Explore job opportunities at Company F.' },
    { id: 7, title: 'Company G Recruitment Drive', description: 'Get ready for Company G\'s recruitment drive.' },
    { id: 8, title: 'Company H Job Openings', description: 'Check out the latest job openings at Company H.' },
    { id: 9, title: 'Company I Career Fair', description: 'Attend the career fair hosted by Company I.' },
    { id: 10, title: 'Company J Internship Program', description: 'Apply for Company J\'s inter nship program.' },
    { id: 11, title: 'Company K Recruitment', description: 'Recruitment for Company K is now open.' },
    { id: 12, title: 'Company L Hiring Event', description: 'Join Company L\'s hiring event on Dec 1st.' },
    // Add more announcements as needed
  ];

  return (
    <div className="App test">
      {/* <header className="bg-slate-600"> */}
        <Typography sx={{mb:4}}variant='h3'>Announcements</Typography>
      {/* </header> */}
      <main className="App-content">
        <Announcements announcements={announcementsData} />
      </main>
    </div>
  );
}

export default App;
