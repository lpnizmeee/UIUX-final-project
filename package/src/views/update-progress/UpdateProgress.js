import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Box, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';
import { DateTimePicker } from '@mui/lab';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import Autocomplete from '@mui/material/Autocomplete';

import BaseCard from "../../components/BaseCard/BaseCard";

const localizer = momentLocalizer(moment);

const UpdateProgress = (props) => {
    const [events, setEvents] = useState([
        {
            'title': 'Article published in domestic science magazine',
            'allDay': true,
            'start': new Date(2024, 4, 30),
            'end': new Date(2024, 4, 31)
        },
        {
            'title': 'Instruct Graduation Research',
            'start': new Date(2024, 4, 31),
            'end': new Date(2024, 5, 1)
        },
    ]);

    const [open, setOpen] = useState(false);
    const [newEvent, setNewEvent] = useState({});

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
    };

    return (
        <Box
            sx={{
                minHeight: '100%',
                px: 2,
            }}
        >
            <Calendar
                selectable
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '75vh', fontFamily: "'DM Sans', sans-serif" }}
                onSelectSlot={handleSelect}
            />
            <Dialog open={open} onClose={() => handleClose('')}>
                <DialogTitle sx={{ minWidth: '500px' }}>Add Task Progress</DialogTitle>
                <DialogContent>
                    <Autocomplete
                        disablePortal
                        sx={
                            {
                                marginBottom: 1
                            }
                        }
                        options={top100Films}
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Task Title"
                        fullWidth
                        onKeyPress={(ev) => {
                            if (ev.key === 'Enter') {
                                handleClose(ev.target.value);
                                ev.preventDefault();
                            }
                        }}
                        renderInput={(params) => <TextField {...params} label="Task title" />}
                    />
                    {/* <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Task Title"
                        type="text"
                        fullWidth
                        onKeyPress={(ev) => {
                            if (ev.key === 'Enter') {
                                handleClose(ev.target.value);
                                ev.preventDefault();
                            }
                        }}
                    /> */}
                    <TextField
                        margin="dense"
                        id="quantity"
                        label="Quantity"
                        type="text"
                        defaultValue={(newEvent.end - newEvent.start) / 3600000}
                        fullWidth
                    />
                    <DateTimePicker
                        label="Start Time"
                        value={newEvent.start}
                        onChange={(newValue) => {
                            setNewEvent({ ...newEvent, start: newValue.toDate() });
                        }}
                    />
                    <DateTimePicker
                        label="End Time"
                        value={newEvent.end}
                        onChange={(newValue) => {
                            setNewEvent({ ...newEvent, end: newValue.toDate() });
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleClose('')}>Cancel</Button>
                    <Button onClick={(ev) => handleClose(document.getElementById('title').value)}>OK</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { label: "Number of Theory hours" },
    { label: "Number of Exercise hours" },
    { label: "Number of Practice/Experiment hours" },
    { label: "Article published in domestic science magazine" },
    { label: "Article published in the international science magazine" },
    { label: "State-level pilot production projects and topics" },
    { label: "National-level pilot production projects and topics" },
    { label: "International-level pilot production projects and topics" },
    { label: "Number of patents obtained" },
    { label: "Number of patents applied" },
];

export default UpdateProgress;