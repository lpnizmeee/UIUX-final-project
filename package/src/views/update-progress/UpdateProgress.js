import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Box, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Grid, Card } from '@mui/material';
import { DateTimePicker } from '@mui/lab';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import Autocomplete from '@mui/material/Autocomplete';
import InputDateTime from './InputDateTime';
import TaskCheck from './TaskCheck';
import { useMediaQuery } from '@mui/material';


const localizer = momentLocalizer(moment);

const UpdateProgress = (props) => {
    const [events, setEvents] = useState([
        {
            'title': 'Article published in domestic science magazine',
            'allDay': true,
            'start': new Date(2024, 4, 30),
            'end': new Date(2024, 5, 6)
        },
        {
            'title': 'Instruct Graduation Research',
            'start': new Date(2024, 5, 8),
            'end': new Date(2024, 5, 18)
        },
    ]);
    const matches = useMediaQuery(theme => theme.breakpoints.up('sm'));
    const [open, setOpen] = useState(false);
    const [newEvent, setNewEvent] = useState({});

    const [selectedKPI, setSelectedKPI] = useState(false);
    const [selectedAssignment, setSelectedAssignment] = useState(false);
    const [selectedTask, setSelectedTask] = useState(false);
    const [value, setValue] = React.useState("");
    const [notification, setNotification] = React.useState("");

    const handleSelect = ({ start, end }) => {
        setNewEvent({ start, end });
        setOpen(true);
    };

    const handleClose = (title) => {
        setOpen(false);
        if (title)
            setEvents([
                ...events,
                {
                    ...newEvent,
                    title,
                },
            ]);
        setSelectedKPI(false);
        setSelectedAssignment(false);
        setSelectedTask(false);
        setValue('');
    };

    const handleChangeComplete = (event) => {
        setValue(event.target.value);
    }

    const handleChange = (event) => {
        setNotification(event.target.value);
    }

    const eventPropGetter = (event, start, end, isSelected) => {
        var backgroundColor = '#194DD3'; // Màu sự kiện mặc định
        if (event.color) {
            backgroundColor = event.color;
        }
        return {
            style: {
                backgroundColor,
            }
        };
    }


    return (
        <Box
            sx={{
                minHeight: '100%',
            }}
        >
            <Typography paddingLeft={2} variant="h3" sx={{ marginBottom: "2" }} gutterBottom>
                <Link to="/update-progress" style={{ color: 'inherit', textDecoration: 'none' }}>Update Progress</Link>
            </Typography>
            <Card
                variant="outlined"
                sx={{
                    m: 2,
                    paddingX: '5%'
                }}
            >
                <Typography bgcolor={"primary.light"} align="center" variant="h4" paddingTop={1} paddingBottom={1} sx={{ marginBottom: "4", marginLeft: '35%', marginRight: '35%', borderRadius: '10px' }} gutterBottom>
                    Calendar
                </Typography>
                <Calendar
                    selectable
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: matches ? "48vh" : "75vh", fontFamily: "'DM Sans', sans-serif" }}
                    onSelectSlot={handleSelect}
                    eventPropGetter={eventPropGetter}
                />
                <Dialog open={open} onClose={() => handleClose('')}>
                    <DialogTitle sx={{ minWidth: '500px' }}>Add Task Progress</DialogTitle>
                    <DialogContent sx={{ minHeight: '20vh' }}>
                        <Autocomplete
                            disablePortal
                            sx={
                                {
                                    marginBottom: 1,
                                    marginTop: 1
                                }
                            }
                            options={kpiList}
                            autoFocus
                            margin="dense"
                            id="KPI"
                            label="KPI Title"
                            fullWidth
                            onKeyPress={(ev) => {
                                if (ev.key === 'Enter') {
                                    handleClose(ev.target.value);
                                    ev.preventDefault();
                                }
                            }}
                            onChange={(event) => {
                                event.preventDefault();
                                setSelectedKPI(true);
                            }}
                            renderInput={(params) => <TextField {...params} label="KPI title" />}
                        />
                        {
                            selectedKPI && (
                                <Autocomplete
                                    disablePortal
                                    sx={
                                        {
                                            marginBottom: 1
                                        }
                                    }
                                    options={assignmentList}
                                    autoFocus
                                    margin="dense"
                                    id="Assignment"
                                    label="Assignment Title"
                                    fullWidth
                                    onKeyPress={(ev) => {
                                        if (ev.key === 'Enter') {
                                            handleClose(ev.target.value);
                                            ev.preventDefault();
                                        }
                                    }}
                                    onChange={(event) => {
                                        event.preventDefault();
                                        setSelectedAssignment(true);
                                    }}
                                    renderInput={(params) => <TextField {...params} label="Assignment title" />}
                                />
                            )
                        }
                        {
                            selectedAssignment && (
                                <Autocomplete
                                    disablePortal
                                    sx={
                                        {
                                            marginBottom: 1
                                        }
                                    }
                                    options={taskList}
                                    autoFocus
                                    margin="dense"
                                    id="task"
                                    label="Task Title"
                                    fullWidth
                                    onKeyPress={(ev) => {
                                        if (ev.key === 'Enter') {
                                            handleClose(ev.target.value);
                                            ev.preventDefault();
                                        }
                                    }}
                                    onChange={(event) => {
                                        event.preventDefault();
                                        setSelectedTask(true);
                                    }}
                                    renderInput={(params) => <TextField {...params} label="Task title" />}
                                />
                            )
                        }
                        {
                            selectedTask && (
                                <FormControl component="fieldset">
                                    <Grid container>
                                        <Grid item xs={6} paddingRight={2}>
                                            <InputDateTime label={"Start time"} defaultValue={new Date(newEvent.start).toISOString().slice(0, 16)} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <InputDateTime label={"End time"} defaultValue={new Date(newEvent.end).toISOString().slice(0, 16)} />
                                        </Grid>
                                    </Grid>

                                    <RadioGroup
                                        aria-label="gender"
                                        name="gender1"
                                        value={value}
                                        onChange={handleChangeComplete}
                                    >
                                        <FormControlLabel
                                            value="completed"
                                            control={<Radio />}
                                            label="Completed"
                                        />
                                        <FormControlLabel
                                            value="notCompleted"
                                            control={<Radio />}
                                            label="Not Completed"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            )
                        }
                        {
                            value === "completed" && (
                                <Box>
                                    <TextField
                                        margin="dense"
                                        id="unit"
                                        label="Unit"
                                        type="text"
                                        defaultValue="Hour"
                                        fullWidth
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                    <TextField
                                        margin="dense"
                                        id="quantity"
                                        label="Quantity"
                                        type="text"
                                        defaultValue={(newEvent.end - newEvent.start) / 3600000}
                                        fullWidth
                                    />
                                </Box>
                            )
                        }
                        {
                            value === "notCompleted" && (
                                <Box>
                                    <TextField
                                        margin="dense"
                                        id="unit"
                                        label="Unit"
                                        type="text"
                                        defaultValue="Hour"
                                        fullWidth
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                    <TextField
                                        margin="dense"
                                        id="quantity"
                                        label="Quantity"
                                        type="text"
                                        defaultValue={(newEvent.end - newEvent.start) / 3600000}
                                        fullWidth
                                        sx={
                                            {
                                                marginBottom: 1
                                            }
                                        }
                                    />
                                    <Autocomplete
                                        disablePortal
                                        sx={
                                            {
                                                marginBottom: 1
                                            }
                                        }
                                        options={repeatList}
                                        autoFocus
                                        margin="dense"
                                        id="repeat"
                                        label="Repeat"
                                        fullWidth
                                        onKeyPress={(ev) => {
                                            if (ev.key === 'Enter') {
                                                handleClose(ev.target.value);
                                                ev.preventDefault();
                                            }
                                        }}
                                        onChange={(event) => {
                                            event.preventDefault();
                                            setSelectedTask(true);
                                        }}
                                        renderInput={(params) => <TextField {...params} label="Repeat" />}
                                    />
                                    <RadioGroup
                                        aria-label="noti"
                                        name="noti"
                                        value={notification}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel
                                            value="noti"
                                            control={<Radio />}
                                            label="30 minutes ago"
                                        />
                                    </RadioGroup>
                                </Box>
                            )
                        }
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handleClose('')}>Cancel</Button>
                        <Button onClick={(ev) => handleClose(document.getElementById('task').value)}>OK</Button>
                    </DialogActions>
                </Dialog>
            </Card>
            <TaskCheck />

        </Box>
    );
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const kpiList = [
    { label: "Work" },
    { label: "Social Activities" },
    { label: "House Chores" },
    { label: "Charity" },
    { label: "Improve Knowledge" },
];

const assignmentList = [
    { label: "Teaching" },
    { label: "Research" },
    { label: "Service" },
];

const taskList = [
    { label: "Number of Theory hours" },
    { label: "Number of Exercise hours" },
    { label: "Number of Practice hours" },
];

const repeatList = [
    { label: "Not Repeat" },
    { label: "Daily" },
    { label: "Weekly" },
    { label: "Monthly" },
    { label: "Yearly" },
];

export default UpdateProgress;