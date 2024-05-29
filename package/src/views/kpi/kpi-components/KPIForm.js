import React from "react";
import InputDateTime from "./InputDateTime";

import {
    Card,
    CardContent,
    Divider,
    Box,
    Typography,
    TextField,
    Button,
} from "@mui/material";


const KPIForm = () => {
    // const [AssignmentList, setAssignmentList] = React.useState([]);

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
                                + Add Assignment
                            </Button>
                        </Box>
                        <div>
                            <Button color="primary" variant="contained">
                                Submit
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default KPIForm;
