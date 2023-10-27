import React from "react";
import { Container, Grid, Avatar, TextField, Button, Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled, alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { useState } from "react";
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});


function StudentRegister() {
    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [student_id,setStudent_id] = useState('');
    const [fath_name,setFath_name] = useState('');
    const [moth_name,setMoth_name] = useState('');
    const [permanent_address,setPermanent_address] = useState('');
    const [current_address,setCurrent_address] = useState('');
    const [cpi,setCpi] = useState('');
    const [current_backlogs,setCurrent_backlogs] = useState('');
    const [total_backlogs,setTotal_backlogs] = useState('');
    const [skype_id,setSkype_id] = useState('');
    const [phone,setPhone] = useState('');
    const [alt_phone,setAlt_phone] = useState('');
    const [dob,setDob] = useState('');
    const [tenth_percentage,setTenth_percentage] = useState('');
    const [twelth_percentage,setTwelth_percentage] = useState('');
    const [branch, setBranch] = useState('');
    const [domain, setDomain] = useState('');
    const [regfor, setRegfor] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [altemail, setAltemail] = useState('');
    const [altpassword, setAltpassword] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const verify = (e) => {
        e.preventDefault();
        if (password !== altpassword || email === altemail || password === '') {

            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
        if (password !== altpassword) {
            alert("Passwords do not match");
        }
        else if (email === altemail) {
            alert("Please enter different email id");
        }
        else if (!error && submitted) {
            document.getElementById("stu_reg").reset();
            alert("Submitted for verification");
        }
    }

    const handleChange = (event) => {
        setBranch(event.target.value);
        setSubmitted(false);
    };
    const handleDomain = (event) => {
        setDomain(event.target.value);
        setSubmitted(false);
    }
    const handleReg = (event) => {
        setRegfor(event.target.value);
        setSubmitted(false);
    };
    return (
        <>
            {console.log("studentRegister.js")}
            <Typography variant="h4" sx={{ fontWeight: "bold", mt: 3, textAlign: "center" }}>
                Student Registration
            </Typography>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                <form id="stu_reg" onSubmit={verify} enctype="multipart/form-data" method="post">

                    <Container sx={{ mb: 10, display: "flex", flexDirection: 'column ', justifyContent: "center", alignItems: "center", }} >
                        <Grid container sx={{ justifyContent: "center", mb: 0 }}>
                            <Grid item md={4.5} sx={{ borderRight: 0, borderColor: "divider", mr: 5 }}>
                                <div style={{ padding: "2rem 0 5rem" }}>

                                    <Grid container spacing={2}>
                                        <Grid item md={6}>
                                            <TextField
                                                label="Name"
                                                id="name"
                                                name="name"
                                                type="text"
                                                variant="outlined"
                                                fullWidth
                                                required={true}
                                            />
                                        </Grid>
                                        <Grid item md={6}>
                                            <TextField
                                                label="Surname"
                                                id="surname"
                                                name="surname"
                                                type="text"
                                                variant="outlined"
                                                fullWidth
                                                required={true}
                                            />
                                        </Grid>
                                    </Grid>
                                    <TextField
                                        label="Student_id"
                                        id="student_id"
                                        name="name"
                                        type="number"
                                        variant="outlined"
                                        fullWidth
                                        required={true}
                                        sx={{ mt: 2 }}
                                    />
                                    <TextField
                                        label="Email"
                                        id="email"
                                        name="email"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                        required={true}
                                        onChange={(e) => setEmail(e.target.value)}
                                        sx={{ mt: 2 }}
                                    />
                                    <TextField
                                        label="Alternate-email"
                                        id="alt-email"
                                        name="alt-email"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                        onChange={(e) => setAltemail(e.target.value)}
                                        required={true}
                                        sx={{ mt: 2 }}
                                    />
                                    <TextField
                                        label="Password"
                                        id="password"
                                        name="password"
                                        type="password"
                                        variant="outlined"
                                        fullWidth
                                        required={true}
                                        onChange={(e) => setPassword(e.target.value)}
                                        sx={{ mt: 2 }}
                                    />
                                    <TextField
                                        label="Confirm password"
                                        id="conf-password"
                                        name="conf-password"
                                        type="password"
                                        variant="outlined"
                                        fullWidth
                                        required={true}
                                        onChange={(e) => setAltpassword(e.target.value)}
                                        sx={{ mt: 2 }}
                                    />
                                    <TextField
                                        label="Skype ID"
                                        id="skype-id"
                                        name="skype-id"
                                        type="text"
                                        variant="outlined"
                                        fullWidth
                                        required={true}
                                        sx={{ mt: 2 }}
                                    />
                                    <TextField
                                        label="Mobile number"
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        pattern="[1-9]{1}[0-9]{9}"
                                        fullWidth
                                        required={true}
                                        sx={{ mt: 2 }}
                                    />
                                    <TextField
                                        label="Alternate mobile number"
                                        id="alt-phone"
                                        name="alt-phone"
                                        type="tel"
                                        pattern="[1-9]{1}[0-9]{9}"
                                        fullWidth
                                        required={true}
                                        sx={{ mt: 2 }}
                                    />
                                    <div style={{
                                        marginTop: "5px",
                                    }}>

                                        <FormLabel id="radio-buttons-group-label">Gender</FormLabel>
                                    </div>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="male"
                                        name="radio-buttons-group"
                                    >
                                        <span style={{
                                            marginTop: "1px",
                                        }}>
                                            <FormControlLabel value="male" control={<Radio />} label="male" />
                                            <FormControlLabel value="female" control={<Radio />} label="female" />
                                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                                        </span>
                                    </RadioGroup>
                                    <div style={{
                                        marginTop: "7px",
                                    }}>
                                        <FormLabel id="dob"
                                        >Date Of Birth</FormLabel>
                                    </div>
                                    <TextField
                                        label=""
                                        id="dob"
                                        name="dob"
                                        type="date"
                                        variant="outlined"
                                        fullWidth
                                        required={true}

                                        sx={{ mt: 1 }}
                                    />
                                </div>
                            </Grid>
                            <Grid item md={4.5} sx={{}}>
                                <div style={{ padding: "2rem 0 5rem" }}>
                                    <Grid container spacing={2} sx={{}}>
                                        <Grid item md={6}>
                                            <TextField
                                                label="Father name"
                                                id="fath-name"
                                                name="fath-name"
                                                type="text"
                                                variant="outlined"
                                                fullWidth
                                                required={true}
                                            />
                                        </Grid>
                                        <Grid item md={6}>
                                            <TextField
                                                label="Mother name"
                                                id="moth-name"
                                                name="moth-name"
                                                type="text"
                                                variant="outlined"
                                                fullWidth
                                                required={true}
                                            />
                                        </Grid>
                                    </Grid>
                                    <TextField
                                        label="Permanent Address"
                                        variant="outlined"
                                        name="permanent-address"
                                        id="permanent-address"
                                        type="text"
                                        fullWidth
                                        required={true}
                                        sx={{ mt: 2 }}
                                    />
                                    <TextField
                                        label="Current Address"
                                        variant="outlined"
                                        name="current-address"
                                        id="current-address"
                                        type="text"
                                        fullWidth
                                        required={true}
                                        sx={{ mt: 2 }}
                                    />
                                    <TextField
                                        label="10th Percentage"
                                        id="10th-percentage"
                                        name="10th-percentage"
                                        variant="outlined"
                                        fullWidth
                                        type="number"
                                        sx={{ mt: 2 }}
                                        required={true}
                                    />
                                    <TextField
                                        label="12th Percentage"
                                        id="12th-percentage"
                                        name="12th-percentage"
                                        variant="outlined"
                                        fullWidth
                                        type="number"
                                        required={true}
                                        sx={{ mt: 2 }}
                                    />
                                    <TextField
                                        label="CPI"
                                        id="cpi"
                                        name="cpi"
                                        variant="outlined"
                                        fullWidth
                                        type="number"
                                        required={true}
                                        sx={{ mt: 2 }}
                                    />
                                    <Grid container spacing={2} sx={{ mt: 0.3 }}>
                                        <Grid item md={6}>
                                            <TextField
                                                label="Current BackLogs"
                                                variant="outlined"
                                                fullWidth
                                                type="number"
                                                id="current-backlogs"
                                                name="current-backlogs"
                                                required={true}
                                            />
                                        </Grid>
                                        <Grid item md={6}>
                                            <TextField
                                                label="Total BackLogs"
                                                variant="outlined"
                                                fullWidth
                                                type="number"
                                                id="total-backlogs"
                                                name="total-backlogs"
                                                required={true}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Box sx={{ minWidth: 120, mt: 2 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="branch" required={true}>Branch</InputLabel>
                                            <Select
                                                labelId="branch"
                                                id="branch"
                                                value={branch}
                                                label="branch"
                                                onChange={handleChange}

                                            >
                                                <MenuItem value={"ictcs"}>ICT with CS</MenuItem>
                                                <MenuItem value={"ict"}>ICT</MenuItem>
                                                <MenuItem value={"mnc"}>MnC</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <Box sx={{ minWidth: 120, mt: 2 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="domain" required={true}>Domain</InputLabel>
                                            <Select
                                                labelId="seldomain"
                                                id="domain"
                                                value={domain}
                                                label="domain"
                                                onChange={handleDomain}

                                            >
                                                <MenuItem value={"it"}>IT</MenuItem>
                                                <MenuItem value={"ec"}>EC</MenuItem>
                                                <MenuItem value={"ct"}>CT</MenuItem>
                                                <MenuItem value={"other"}>Other</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <Box sx={{ minWidth: 120, mt: 2 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="regfor" required={true}>Registering For</InputLabel>
                                            <Select
                                                labelId="regfor"
                                                id="regfor"
                                                value={regfor}
                                                label="regfor"
                                                onChange={handleReg}

                                            >
                                                <MenuItem value={"placement"}>Placement</MenuItem>
                                                <MenuItem value={"si"}>SI</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <Grid container spacing={2} sx={{ mt: 0.3 }}>
                                        <Grid item md={6}>
                                            <Button for="resume" component="label" fullWidth variant="contained" startIcon={<CloudUploadIcon />}>
                                                Upload Resume
                                                <VisuallyHiddenInput id="resume" required={true} type="file" />
                                            </Button>

                                        </Grid>
                                        <Grid item md={6}>
                                            <Button for="photo" component="label" v fullWidth variant="contained" startIcon={<PersonIcon />}>
                                                Upload Photo
                                                <VisuallyHiddenInput type="file" id="photo" required={true} />
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                        {/* submit button */}
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Button fullWidth type="submit" variant="contained" sx={{}}>
                                Register
                            </Button>{

                            }
                        </div>
                    </Container >

                </form>
            </div >
        </>
    );
}

export default StudentRegister;