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



const KPIForm = () => {
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
        navigate('/kpi/add-success');
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
                            New KPI
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
                            id="kpi-name"
                            label="KPI Name"
                            variant="outlined"
                            fullWidth
                            sx={{
                                mb: 2,
                            }}
                        />
                        <TextField
                            id="kpi-description"
                            label="KPI Description"
                            multiline
                            rows={2}
                            variant="outlined"
                            fullWidth
                            sx={{
                                mb: 2,
                            }}
                        />
                        <InputDateTime id={"start"} label={"Start time"} />
                        <InputDateTime id={"finish"} label={"Finish time"} />
                        <Box>
                            <AssignmentCheckbox list={AssignmentList} title="Choose Assignment" />
                        </Box>
                        <Box>
                            <Button
                                variant="outlined"
                                color="success"
                                sx={{
                                    mr: 1,
                                    mb: {
                                        xs: 2,
                                        sm: 2,
                                        lg: 2,
                                    },
                                }}
                            >
                                + Add orther Assignment
                            </Button>
                        </Box>

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

export default KPIForm;
