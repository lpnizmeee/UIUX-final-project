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
import { useMediaQuery } from '@mui/material';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import GetAppIcon from '@mui/icons-material/GetApp';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';


const actions = [
    { icon: <GetAppIcon />, name: "Download KPI file" },
    { icon: <AddToPhotosOutlinedIcon />, name: "Add Assignment" },
    { icon: <EditIcon />, name: "Edit KPI" },
];

const assignmentList = [
    {
        id: "1",
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
        id: "2",
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
        id: "3",
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

const priorities = [
    { label: 'Low', color: 'error.main', hoverColor: 'error.dark' },
    { label: 'Medium', color: 'warning.main', hoverColor: 'warning.dark' },
    { label: 'High', color: 'success.main', hoverColor: 'success.dark' },
];


const KPIDetailFake = () => {
    const [openAssignmentId, setOpenAssignmentId] = useState(null);
    const [priorityIndex, setPriorityIndex] = useState(0);
    const matches = useMediaQuery(theme => theme.breakpoints.up('sm'));
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

    const handleClose = (title) => {
        setOpen(false);
    };

    const handleAddNewTask = (id) => {
        setOpenAssignmentId(id);
        setOpen(true);
    }

    const handleSubmit = () => {
        navigate('/kpi/detail-add');
    }

    const handlePriorityChange = () => {
        setPriorityIndex((priorityIndex + 1) % priorities.length);
    };

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
            {assignmentList.map((assignment, index) => (
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
                                    onClick={() => handleAddNewTask(assignment.id)}
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
                                {openAssignmentId === assignment.id && (
                                    matches ? (
                                        <Table
                                            aria-label="simple table"
                                            sx={{
                                                mt: 0,
                                                whiteSpace: "nowrap",
                                                minWidth: 650,
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
                                                                backgroundColor: priorities[priorityIndex].color,
                                                                color: "#fff",
                                                                '&:hover': {
                                                                    backgroundColor: priorities[priorityIndex].hoverColor,
                                                                },
                                                            }}
                                                            onClick={handlePriorityChange}
                                                            size="small"
                                                            label={priorities[priorityIndex].label}
                                                        ></Chip>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                            <Button sx={{ mt: 1, ml: 1 }} color="primary" variant="contained" onClick={handleSubmit}>
                                                Submit
                                            </Button>
                                        </Table>
                                    ) : (
                                        <Dialog open={open} onClose={() => handleClose('')}>
                                            <DialogTitle sx={{ minWidth: '500px' }}>Add New Task</DialogTitle>
                                            <DialogContent sx={{ minHeight: '20vh' }}>
                                                <TextField
                                                    fullWidth
                                                    label="Task Name"
                                                    variant="outlined"
                                                    margin="normal"
                                                />
                                                <TextField
                                                    fullWidth
                                                    label="Quantity"
                                                    variant="outlined"
                                                    margin="normal"
                                                />
                                                <TextField
                                                    fullWidth
                                                    label="Unit"
                                                    variant="outlined"
                                                    margin="normal"
                                                />
                                                <Box display="flex" justifyContent="space-around" paddingTop={2}>
                                                    <Typography>Priority</Typography>
                                                    <Chip
                                                        sx={{
                                                            pl: "4px",
                                                            pr: "4px",
                                                            backgroundColor: priorities[priorityIndex].color,
                                                            color: "#fff",
                                                            '&:hover': {
                                                                backgroundColor: priorities[priorityIndex].hoverColor,
                                                            },
                                                        }}
                                                        onClick={handlePriorityChange}
                                                        size="big"
                                                        label={priorities[priorityIndex].label}
                                                    ></Chip>
                                                </Box>
                                                <Button sx={{ mt: 1, ml: 1 }} color="primary" variant="contained" onClick={handleSubmit}>
                                                    Submit
                                                </Button>
                                            </DialogContent>
                                        </Dialog>
                                    )
                                )}

                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            ))
            }
        </Box >
    );
}

export default KPIDetailFake;