// src/App.js
import React, { useState, useEffect } from 'react';
import '../style/announcement.css';
import { Typography } from '@mui/material';
import CustomCard from '../components/CardComponent';
import Grid from '@mui/material/Grid';

function App() {

  const [Announcementsdata, setAnnouncement] = useState([]);//student object
  const [loading, setLoading] = useState(true);//loading state

  useEffect(() => {
    console.log(localStorage.getItem('token'));
    fetch('http://localhost:8000/api/announcements/admin/student', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    }).then((res) => res.json()).then((data) => {
      setAnnouncement(data);
      console.log(data)
      setLoading(false);
    }).catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App test">
      <Typography sx={{ mb: 4 }} variant='h3'>Announcements</Typography>
      {Announcementsdata && <main className="App-content">
        <div className="announcements" >
          <Grid container spacing={2} sx={{ flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
            {Announcementsdata.map((announcement) => (
              <Grid item xs={12} key={announcement?._id}>
                <CustomCard item={announcement} />
              </Grid>
            ))}
          </Grid>
        </div>
      </main>}
    </div>
  );
}

export default App;
