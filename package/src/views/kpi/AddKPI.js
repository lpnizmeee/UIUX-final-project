import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { Box } from "@mui/system";
import KPIForm from "./kpi-components/KPIForm";


const AddKPI = () => {
    return (
        <Box>
            <Typography paddingLeft={2} variant="h3" sx={{ marginBottom: "0" }} gutterBottom>
                <Link to="/kpi" style={{ color: 'inherit', textDecoration: 'none' }}>KPI</Link>
                <Link to="/kpi/add-kpi" style={{ color: 'inherit', textDecoration: 'none' }}> / Add KPI</Link>
            </Typography>
            <Grid container spacing={0}>
                <Grid item lg={12} md={12} xs={12}>
                    <KPIForm />
                </Grid>
            </Grid>
        </Box>
    );
}

export default AddKPI;