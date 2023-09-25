// src/components/Announcements.js
import React from 'react';
import CustomCard from './CardComponent';
import Grid from '@mui/material/Grid'; // Import Grid from Material-UI

function Announcements({ announcements }) {
  return (
    <div className="announcements" >
      <Grid container spacing={2} sx={{flexDirection:'column',justifyContent:'center',alignContent:'center'}}>
        {announcements.map((announcement) => (
          <Grid item xs={12} key={announcement.id}>
            <CustomCard item={announcement} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Announcements;
