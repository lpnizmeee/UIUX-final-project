import React from "react";

import { TextField } from "@mui/material";

const InputDateTime = ({ label, defaultValue }) => {
    return (
        <TextField
            id="datetime-local"
            label={label}
            type="datetime-local"
            defaultValue={defaultValue}
            fullWidth
            InputLabelProps={{
                shrink: true,
            }}
            sx={{
                mb: 1,
            }}
        />
    );
};

export default InputDateTime;
