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
import { Autocomplete } from "@mui/material";
import { PostAdd as PostAddIcon, Add as AddIcon } from '@mui/icons-material';
// import '../CSS_files/AnnouncementSection.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const AnnouncementSection = ({ title }) => {
  const [announcements, setAnnouncements] = useState([]);
  const [announcementText, setAnnouncementText] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state
  const [searchInput, setSearchInput] = useState(""); // Add searchInput state
  const [filteredAnnouncements, setFilteredAnnouncements] = useState([]); // Add filteredAnnouncements state

  const [student, setStudent] = useState([]);
  // const []
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(localStorage.getItem('token'));
    fetch('https://back-end-production-3140.up.railway.app/api/company/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res) => res.json()).then((data) => {
      // console.log(data);
      // console.log(data.comp.isVerified)
      if (data.comp.isVerified == false) {
        // alert("Your profile is not verified yet");
        navigate('/nv');
      }
      setLoading(false);
    }).catch((err) => {
      // console.log(err);
      setLoading(false);
    });
  }, [])

  useEffect(() => {
    // console.log(localStorage.getItem('token'));
    fetch('https://back-end-production-3140.up.railway.app/api/company/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res) => res.json()).then((data) => {
      // console.log(data);
      // console.log(data.comp.isVerified)
      if (data.comp.isVerified == false) {
        // alert("Your profile is not verified yet");
        navigate('/nv');
      }
      setLoading(false);
    }).catch((err) => {
      // console.log(err);
      setLoading(false);
    });
  }, [])

  useEffect(() => {
    fetch('https://back-end-production-3140.up.railway.app/api/announcements/admin/company/company', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAnnouncements(data);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        setLoading(false);
      });
  }, []);

  const handleSearch = (value) => {
    if (!value) {
      setSearchInput(value);
      setFilteredAnnouncements(announcements);
      return;
    }

    setSearchInput(value);
    const filtered = announcements.filter(
      (announcement) =>
        announcement?.title?.toLowerCase().includes(value.toLowerCase()) ||
        announcement?.description?.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredAnnouncements(filtered);
  };

  return (
    <div style={{
      position: "relative",
      display: "flex",
      justifyContent: "center",
      padding: "5vh 5vw",
    }}>
      <Paper sx={{ py: 1, px: 3 }} className="container">
        <Typography variant="h5" sx={{ pt: 1, pb: 1 }}>
          Admin Announcements {title}:
        </Typography>
        <Autocomplete
              disablePortal
              id="search-announcement"
              options={announcements.map((announcement) => announcement.title)}
              value={searchInput}
              onChange={(_, newValue) => handleSearch(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search title"
                  sx={{
                    width: '100%',
                    margin: "10px auto",
                  }}
                />
              )}
            />
        {loading ? (
          <p>Loading...</p>
        ) : (
          announcements && announcements.length > 0 ? (
            <List className="list">
              {(searchInput ? filteredAnnouncements : announcements)
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
            <Typography sx={{ textAlign: "center" }} variant="body1">
              {searchInput
                ? "No matching announcements found"
                : "No data to display"}
            </Typography>
            </div>
          )
        )}
      </Paper>
    </div>
  );
};

export default AnnouncementSection;