import React from 'react'
import { Typography, Link, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';


function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                mt: 'auto',
                py: 2,
                backgroundColor: '#212330', // Background color for the footer
                color: '#fff', // Text color for the footer
                position: 'fixed',
                bottom: 0,
                // marginTop: 100,
                width: '100%',
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="body2" align="center">
                    &copy; {new Date().getFullYear()} Placement-Cell. All rights reserved.
                </Typography>
                <Typography variant="body2" align="center" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {/* GitHub icon and link */}
                    <Link
                        href="https://github.com/G28-Placement-Cell"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        <GitHubIcon sx={{ fontSize: 20, color: '#fff', ml: '5px' }} />
                        {/* GitHub */}
                    </Link>
                </Typography>
            </div>
        </Box>
    );
}

export default Footer;