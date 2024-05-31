import React from "react";
import { Link } from 'react-router-dom';
import { Box } from "@mui/system";
import { Card, CardContent, Typography } from "@mui/material";
import KPIDetailTable from "./kpi-components/KPIDetailTable";
import Fab from "@mui/material/Fab";
import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const assignmentList = [
    {
        name: "Teaching",
        tasks: [
            {
                id: "1",
                name: "Number of Theory hours",
                quantity: "2/20",
                status: "High",
                pbg: "success.main",
                unit: "Hour",
            },
            {
                id: "2",
                name: "Number of Exercise hours",
                quantity: "12/20",
                status: "Medium",
                pbg: "warning.main",
                unit: "Hour",
            },
            {
                id: "3",
                name: "Number of Practice/Experiment hours",
                quantity: "9/10",
                status: "High",
                pbg: "success.main",
                unit: "Hour",
            },
        ]
    },
    {
        name: "Research",
        tasks: [
            {
                id: "1",
                name: "Article published in domestic science magazine",
                quantity: "9/10",
                status: "High",
                pbg: "success.main",
                unit: "Paper",
            },
            {
                id: "2",
                name: "Article published in the international science magazine",
                quantity: "4/5",
                status: "High",
                pbg: "success.main",
                unit: "Paper",
            },
            {
                id: "3",
                name: "State-level pilot production projects and topics",
                quantity: "1/2",
                status: "Medium",
                pbg: "warning.main",
                unit: "Project",
            },
        ]
    },
    {
        name: "Service",
        tasks: [
            {
                id: "1",
                name: "Instruct Graduation Research",
                quantity: "9/10",
                status: "High",
                pbg: "success.main",
                unit: "Student",
            },
            {
                id: "2",
                name: "Instructions for doctoral dissertations",
                quantity: "1/5",
                status: "Low",
                pbg: "error.main",
                unit: "master",
            },
        ]
    },

]


const KPIDetail = () => {
    return (
        <Box>
            <Typography paddingLeft={2} variant="h3" sx={{ marginBottom: "0" }} gutterBottom>
                <Link to="/kpi" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <Box display="flex" alignItems="center">
                        <NavigateBeforeIcon />
                        KPI
                        <NavigateBeforeIcon />
                        Details
                    </Box>
                </Link>
            </Typography>
            <Box
                sx={
                    {
                        m: 2,
                    }

                }>
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
                        <AddToPhotosOutlinedIcon />
                    </Fab>
                </Link>
            </Box>
            {assignmentList.map((assignment) => (
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h3">{assignment.name}</Typography>
                        <Box
                            sx={{
                                overflow: {
                                    xs: "auto",
                                    sm: "unset",
                                },
                            }}
                        >

                            <Box>
                                <KPIDetailTable list={assignment} />
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
}

export default KPIDetail;