import { Grid, Typography } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from "@mui/system";
import KPICard from "./kpi-components/KPICard";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Chip from "@mui/material/Chip";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';


const initialKPIList = [
    {
        id: "1",
        title: "Work",
        chiptitle: "High",
        assignment: ["Teaching", "Research", "Service"]
    },
    {
        id: "2",
        title: "Social Activities",
        chiptitle: "Medium",
        assignment: ["Volunteer", "Blood Donation"]

    },
    {
        id: "3",
        title: "House Chores",
        chiptitle: "Low",
        assignment: ["House Cleaning", "Cooking"]
    },
    {
        id: "4",
        title: "Charity",
        chiptitle: "Medium",
        assignment: ["Volunteer", "Fundraising"]
    },
]

const KPI = () => {
    const [KPIList, setKPIList] = useState(initialKPIList);
    const navigate = useNavigate();

    const handleViewDetail = () => {
        navigate('/kpi/detail');
    }

    const [open, setOpen] = useState(false);
    const [toBeDeletedId, setToBeDeletedId] = useState(null);

    const handleClickOpen = (id) => {
        setToBeDeletedId(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        setKPIList(KPIList.filter(kpi => kpi.id !== toBeDeletedId));
        setOpen(false);
    };


    return (
        <Box>
            <Typography paddingLeft={2} variant="h3" sx={{ marginBottom: "0" }} gutterBottom>
                <Link to="/kpi" style={{ color: 'inherit', textDecoration: 'none' }}>KPI</Link>
            </Typography>
            <Grid container spacing={0}>
                {KPIList.map((kpi) => (
                    <Grid
                        item
                        xs={12}
                        lg={4}
                        sm={6}
                        sx={{
                            display: "flex",
                            alignItems: "stretch",
                        }}
                    >
                        <KPICard title={kpi.title} chiptitle={kpi.chiptitle}>
                            <Box
                                sx={{
                                    marginBottom: "3rem",
                                    textAlign: "center",
                                }}
                            >
                                {kpi.assignment.map((assignment) => (
                                    <Chip label={assignment} variant="outlined" sx={{ margin: "0.5rem" }} />
                                ))}
                            </Box>
                            <Box
                                sx={{
                                    textAlign: "right",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-around",

                                    }}>
                                    <Fab
                                        variant="extended"
                                        size="small"
                                        onClick={() => handleClickOpen(kpi.id)}
                                        sx={{
                                            mr: 1,
                                            mb: {
                                                xs: 1,
                                                sm: 0,
                                                lg: 0,
                                            },
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                ml: 1,
                                                textTransform: "capitalize",
                                            }}
                                        >
                                            Delete
                                        </Typography>
                                        <DeleteIcon />
                                    </Fab>
                                    <Dialog
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">
                                            {"Confirm Delete"}
                                        </DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                Are you sure you want to delete this KPI?
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose}>Cancel</Button>
                                            <Button color="error" onClick={handleDelete} autoFocus>
                                                Delete
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                    <Fab
                                        color="primary"
                                        variant="extended"
                                        size="small"
                                        onClick={handleViewDetail}
                                        sx={{
                                            mr: 1,
                                            mb: {
                                                xs: 1,
                                                sm: 1,
                                                lg: 1,
                                            },
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                ml: 1,
                                                textTransform: "capitalize",
                                            }}
                                        >
                                            Details
                                        </Typography>
                                        <NavigateNextIcon />
                                    </Fab>
                                </Box>
                            </Box>
                        </KPICard>
                    </Grid>
                ))}
                <Grid
                    item xs={12}
                    lg={4}
                    sm={6}
                    sx={{
                        display: "flex",
                        alignItems: "stretch",
                    }}
                >
                    <KPICard title="Add new KPI">
                        <Box
                            sx={{
                                textAlign: "center",
                                paddingTop: "2rem",
                            }}
                        >
                            <Link to="/kpi/add-kpi" style={{ textDecoration: 'none' }}
                            >
                                <Button
                                    color="primary"
                                    variant="contained"
                                    style={{
                                        borderRadius: '100%',
                                        height: '75px',
                                        width: '75px',
                                        padding: 0,
                                    }}
                                    sx={{
                                        mr: 1,
                                        mb: {
                                            xs: 1,
                                            sm: 0,
                                            lg: 0,
                                        },
                                    }}
                                >
                                    <AddIcon />
                                </Button>
                            </Link>
                        </Box>
                    </KPICard>
                </Grid>
            </Grid>
        </Box>
    );
}

export default KPI;