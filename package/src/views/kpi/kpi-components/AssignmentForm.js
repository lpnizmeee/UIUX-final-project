import React from "react";
import InputDateTime from "./InputDateTime";
import { useNavigate } from 'react-router-dom';

import {
    Card,
    CardContent,
    Divider,
    Box,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import AssignmentCheckbox from "./AssignmentCheckbox";



const AssignmentForm = () => {
    const [AssignmentList, setAssignmentList] = React.useState([
        { title: "Teaching" },
        { title: "Research" },
        { title: "Service" },
        { title: "Volunteer" },
        { title: "Workshop" },
        { title: "Seminar" },
        { title: "Conference" },
        { title: "Training" },
        { title: "House Cleaning" },
    ]);
    const navigate = useNavigate();

    const handleCreate = () => {
        navigate('/kpi/detail');
    }

    return (
        <div>
            {/* ------------------------------------------------------------------------------------------------ */}
            {/* Basic Checkbox */}
            {/* ------------------------------------------------------------------------------------------------ */}
            <Card
                variant="outlined"
                sx={{
                    p: 0,
                }}
            >
                <Box
                    sx={{
                        padding: "15px 30px",
                    }}
                    display="flex"
                    alignItems="center"
                >
                    <Box flexGrow={1}>
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: "500",
                            }}
                        >
                            New Assignment
                        </Typography>
                    </Box>
                </Box>
                <Divider />
                <CardContent
                    sx={{
                        padding: "30px",
                    }}
                >
                    <form>
                        <TextField
                            id="assignment-name"
                            label="Assignment Name"
                            variant="outlined"
                            fullWidth
                            defaultValue="Improve Knowledge"
                            sx={{
                                mb: 2,
                            }}
                        />
                        <div>
                            <Button color="primary" variant="contained" onClick={handleCreate}>
                                Create
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default AssignmentForm;
