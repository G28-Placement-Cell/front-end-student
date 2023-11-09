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
    Box,
    Fab,
} from '@mui/material';
import { PostAdd as PostAddIcon, Add as AddIcon } from '@mui/icons-material';
import '../style/AnnouncementSection.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const AnnouncementSection = ({ title }) => {
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


    const handleAnnouncementChange = (e) => {
        setAnnouncementText(e.target.value);
    };

    const handleSubmitAnnouncement = () => {
        if (announcementText.trim() !== '') {
            const newAnnouncement = {
                id: new Date().getTime(),
                text: announcementText,
                timestamp: new Date().toLocaleString(),
            };

            setAnnouncements([...announcements, newAnnouncement]);
            setAnnouncementText('');
        }
    };

    // Simulate loading for 2 seconds (you should replace this with your actual data fetching code)
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 2000);
    // }, []);

    const navigate = useNavigate();

    return (
        <div style={{ position: 'relative', padding:'10px' }}>
      <Paper sx={{ py: 1, px: 3 }} className="container">
        <Typography variant="h5" sx={{ pt: 1, pb: 1 }}>
          Admin Announcements {title}:
        </Typography>
        {loading ? (
          <p>Loading...</p>
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
