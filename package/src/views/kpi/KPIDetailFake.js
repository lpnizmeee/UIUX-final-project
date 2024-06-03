import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Box } from "@mui/system";
import { Card, CardContent, TextField, Typography } from "@mui/material";
import KPIDetailTable from "./kpi-components/KPIDetailTable";
import Fab from "@mui/material/Fab";
import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import AddIcon from "@mui/icons-material/Add";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import download from 'downloadjs';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import GetAppIcon from '@mui/icons-material/GetApp';
import EditIcon from '@mui/icons-material/Edit';


const actions = [
    { icon: <GetAppIcon />, name: "Download KPI file" },
    { icon: <AddToPhotosOutlinedIcon />, name: "Add Assignment" },
    { icon: <EditIcon />, name: "Edit KPI" },
];

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
                name: "Number of Practice hours",
                quantity: "9/10",
                status: "High",
                pbg: "success.main",
                unit: "Hour",
            },
            {
                id: "4",
                name: "Number of Experiment hours",
                quantity: "0/10",
                status: "Low",
                pbg: "error.main",
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
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleActionClick = (actionName) => {
        switch (actionName) {
            case 'Download KPI file':
                fetch('/assets/add-kpi-example.xlsx')
                    .then(response => response.blob())
                    .then(blob => {
                        download(blob, 'add-kpi-example.xlsx');
                    })
                    .catch(error => console.error(error));
                break;
            case 'Add Assignment':
                navigate('/kpi/add-assignment');
                break;
            case 'Edit KPI':
                navigate('/kpi/edit-kpi');
                break;
            default:
                console.log(`Unknown action: ${actionName}`);
        }
    };

    const handleAddNewTask = () => {
        setOpen(true);
    }

    const handleSubmit = () => {
        navigate('/kpi/detail-add');
    }

    return (
        <Box>
            <Box>
                <Typography paddingLeft={2} variant="h3" sx={{ marginBottom: "0" }} gutterBottom>
                    <Link to="/kpi" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <Box display="flex" alignItems="center">
                            <NavigateBeforeIcon />
                            KPI
                            <NavigateBeforeIcon />
                            Details: Work
                        </Box>
                    </Link>
                </Typography>
            </Box>
            <Box
                sx={
                    {
                        m: 2,
                    }

                }>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ top: 0, left: 0 }}
                    icon={<SpeedDialIcon />}
                    direction="right"
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={() => handleActionClick(action.name)
                            }
                        />
                    ))}
                </SpeedDial>
            </Box>
            {assignmentList.map((assignment) => (
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h3">
                            <Box display="flex" justifyContent={"space-between"}>
                                {assignment.name}
                                <Fab
                                    color="primary"
                                    size="small"
                                    sx={{
                                        mr: 1,
                                        mb: {
                                            xs: 1,
                                            sm: 0,
                                            lg: 0,
                                        },
                                    }}
                                    onClick={handleAddNewTask}
                                >
                                    <AddIcon />
                                </Fab>
                            </Box>
                        </Typography>
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
                                {open && (
                                    <Table
                                        aria-label="simple table"
                                        sx={{
                                            mt: 0,
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        <TableBody>
                                            <TableRow>
                                                <TableCell style={{ width: '10%' }}>
                                                    <Typography
                                                        sx={{
                                                            fontSize: "15px",
                                                            fontWeight: "300",
                                                        }}
                                                    >
                                                        4
                                                    </Typography>
                                                </TableCell>
                                                <TableCell style={{ width: '50%' }}>
                                                    <TextField sx={{
                                                        fontSize: "10px",
                                                    }}>
                                                    </TextField>
                                                </TableCell>
                                                <TableCell style={{ width: '15%' }}>
                                                    <TextField>
                                                    </TextField>
                                                </TableCell>
                                                <TableCell style={{ width: '15%' }}>
                                                    <TextField>
                                                    </TextField>
                                                </TableCell>
                                                <TableCell align="right" style={{ width: '10%' }}>
                                                    <Chip
                                                        sx={{
                                                            pl: "4px",
                                                            pr: "4px",
                                                            backgroundColor: "error.main",
                                                            color: "#fff",
                                                        }}
                                                        size="small"
                                                        label={"Low"}
                                                    ></Chip>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                        <Button sx={{ mt: 1, ml: 1 }} color="primary" variant="contained" onClick={handleSubmit}>
                                            Submit
                                        </Button>
                                    </Table>

                                )}
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
}

export default KPIDetail;