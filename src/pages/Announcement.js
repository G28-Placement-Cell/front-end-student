import React, { useState, useEffect } from 'react';
import {
  Typography,
  ListItem,
  ListItemText,
  List,
  Paper,
} from '@mui/material';
import '../style/AnnouncementSection.css'
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Announcement = ({ title }) => {

  const [student, setStudent] = useState({});
  const [loadings, setLoadings] = useState(true);


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
        if (data.stu.verified === false) {
          navigate('/nv');
        }
        // setRegJobProfiles(data?.stu?.jobprofiles);
        setLoadings(false);
      })
      .catch((err) => {
        // console.log(err);
        setLoadings(false);
      });
  }, []);

  const navigate = useNavigate();


  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [loadinger, setLoadinger] = useState(true); // Add loading state

  useEffect(() => {
    fetch('https://back-end-production-3140.up.railway.app/api/announcements/admin/companyAnnouncements', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {

        // Filter out announcements with null company
        const validAnnouncements = data.filter(announcement => announcement.company);
        // console.log("Valid announcements:", validAnnouncements); // Log valid announcements

        // Extract the unique company IDs from the valid announcements
        const uniqueCompanyIds = [...new Set(validAnnouncements.map(announcement => announcement.company._id))];
        // console.log("Unique company IDs:", uniqueCompanyIds); // Log unique company IDs

        // Fetch company names for each unique company ID
        const fetchCompanyNames = uniqueCompanyIds.map(companyId =>
          fetch(`https://back-end-production-3140.up.railway.app/api/company/name/${companyId}`, {
            method: 'GET',
            headers: {
              'content-type': 'application/json',
            },
          })
            .then((res) => res.json())
        );

        // Wait for all company name fetches to complete
        Promise.all(fetchCompanyNames)
          .then(companyData => {

            const companyMap = {};
            companyData.forEach(company => {
              companyMap[company.company._id] = company.company.companyname; // Access the 'companyname' field

            });

            // console.log("Company map:", companyMap); // Log company map

            const announcementsWithCompanyNames = validAnnouncements.map(announcement => ({
              ...announcement,
              companyName: companyMap[announcement.company._id],
            }));

            setAnnouncements(announcementsWithCompanyNames);
            // console.log(announcements);
            setLoading(false);
          });
      })
      .catch((err) => {
        // console.log(err);
        setLoading(false);
      });
  }, []);
  if (loading) return (<div style={{
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
  </div>);
  return (
    // student?.verified?(
    <div style={{ position: 'relative', padding: '10px' }}>
      <Paper sx={{ py: 1, px: 3 }} className="container">
        <Typography variant="h5" sx={{ pt: 1, pb: 1 }}>
          Company Announcements {title}:
        </Typography>
        {loading ? (
          <p>Loading...</p>
        ) : (
          announcements && announcements.length > 0 ? (
            <List className="list">
              {announcements
                .slice()
                .reverse()
                .map((announcement, index) => (
                  <ListItem key={index} className="item">
                    <ListItemText
                      primary={
                        <div>
                          <Typography variant='h6' sx={{ mb: 1 }}>{announcement?.companyName}</Typography>
                          <Typography variant='body1'>{announcement.title}</Typography>
                        </div>
                      }
                      secondary={
                        <div>
                          <Typography variant='body2'>{announcement.description}</Typography>
                          <Typography
                            sx={{ fontSize: 12, fontStyle: "italic", textAlign: "right" }}
                            color="text.secondary"
                          >
                            {new Date(announcement.date).toLocaleString()}
                          </Typography>
                        </div>
                      }
                      secondaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItem>
                ))}
            </List>
          ) : (
            <div style={{ minHeight: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography sx={{ textAlign: 'center' }} variant="body1">No data to display</Typography>
            </div>
          )
        )}
      </Paper>
    </div>
    // ):(navigate('/nv'))
  );
};

export default Announcement;
