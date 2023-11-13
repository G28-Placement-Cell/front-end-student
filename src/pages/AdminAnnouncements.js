import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Fab,
} from '@mui/material';
import { PostAdd as PostAddIcon, Add as AddIcon } from '@mui/icons-material';
import '../style/AnnouncementSection.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const AnnouncementSection = ({ title }) => {

  const [student, setStudent] = useState();
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
        if (data.stu.verified === false) {
          navigate('/nv');
        }
        setLoadings(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadings(false);
      });
  }, []);

  // const navigate = useNavigate();

  const [announcements, setAnnouncements] = useState([]);
  const [announcementText, setAnnouncementText] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetch('http://localhost:8000/api/announcements/admin/student', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAnnouncements(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);


  // Simulate loading for 2 seconds (you should replace this with your actual data fetching code)
  // useEffect(() => {
  //     setTimeout(() => {
  //         setLoading(false);
  //     }, 2000);
  // }, []);


  const navigate = useNavigate();
  return (

    <div style={{ position: 'relative', padding: '10px' }}>
      <Paper sx={{ py: 1, px: 3 }} className="container">
        <Typography variant="h5" sx={{ pt: 1, pb: 1 }}>
          Admin Announcements {title}:
        </Typography>
        {loading ? (
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
          announcements && announcements.length > 0 ? (
            <List className="list">
              {announcements
                .slice() // Create a shallow copy of the array
                .reverse() // Reverse the order of announcements
                .map((announcement, index) => (
                  <ListItem key={index} className="item">
                    <ListItemText
                      primary={
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <Typography>{announcement.title}</Typography>
                        </div>
                      }
                      secondary={
                        <div>
                          <Typography>{announcement.description}</Typography>
                          <Typography
                            sx={{ fontSize: 12, fontStyle: "italic", textAlign: "right" }}
                            color="text.secondary"
                          >
                            {new Date(announcement.date).toLocaleString()}
                          </Typography>
                        </div>
                      }
                      secondaryTypographyProps={{ variant: "body2" }} // Customize secondary text style
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
  );
};

export default AnnouncementSection;
