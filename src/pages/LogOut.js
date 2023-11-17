import { Paper, Typography } from "@mui/material";

const LogOut = () => {
    return (
        <div style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            padding: "5vh 5vw",
        }}>
            <Paper sx={{ py: 1, px: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight:'73vh' }} className="container">
                <Typography variant="h4">
                    Logging Out...
                </Typography>
            </Paper>
        </div>
    );
}

export default LogOut;