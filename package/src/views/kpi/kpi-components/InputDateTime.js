import React from "react";

import { TextField } from "@mui/material";

const InputDateTime = (props) => {
    return (
        <TextField
            id={props.id}
            label={props.label}
            type="datetime-local"
            defaultValue={
                props.label === "Start time" ? "2024-01-02T15:30" : "2024-11-15T23:59"
            }
            fullWidth
            InputLabelProps={{
                shrink: true,
            }}
            sx={{
                mb: 2,
            }}
        />
    );
};

export default InputDateTime;
