import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom';
import { Box } from "@mui/system";
import KPICard from "./kpi-components/KPICard";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Chip from "@mui/material/Chip";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const KPIList = [
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
        assignment: ["Vol", "Research", "Service"]

    },
    {
        id: "3",
        title: "House Chores",
        chiptitle: "Low",
        assignment: ["Teaching", "Research", "Service"]
    },
    {
        id: "4",
        title: "Charity",
        chiptitle: "Medium",
        assignment: ["Teaching", "Research", "Service"]
    },
    {
        id: "5",
        title: "Improve Knowledge",
        chiptitle: "Low",
        assignment: ["Workshop", "Training", "Conference"]
    }
]

const KPIFake = () => {
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
                                <Fab
                                    color="primary"
                                    variant="extended"
                                    size="small"
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
                                        Details
                                    </Typography>
                                    <NavigateNextIcon />
                                </Fab>
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
                            }}
                        >
                            <Link to="/kpi/add-kpi" style={{ textDecoration: 'none' }}>
                                <Fab
                                    color="primary"
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
                                </Fab>
                            </Link>
                        </Box>
                    </KPICard>
                </Grid>
            </Grid>
        </Box>
    );
}

export default KPIFake;