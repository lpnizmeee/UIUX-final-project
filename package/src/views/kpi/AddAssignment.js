import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { Box } from "@mui/system";
import AssignmentForm from "./kpi-components/AssignmentForm";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


const AddAssignment = () => {
    return (
        <Box>
            <Typography paddingLeft={2} variant="h3" sx={{ marginBottom: "0" }} gutterBottom>
                <Link to="/kpi/detail" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <Box display="flex" alignItems="center">
                        <NavigateBeforeIcon />
                        KPI
                        <NavigateBeforeIcon />
                        Add Assignment
                    </Box>
                </Link>
            </Typography>
            <Grid container spacing={0}>
                <Grid item lg={12} md={12} xs={12}>
                    <AssignmentForm />
                </Grid>
            </Grid>
        </Box>
    );
}

export default AddAssignment;