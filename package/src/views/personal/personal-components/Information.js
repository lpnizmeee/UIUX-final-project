import { Box } from "@mui/material";
import React from "react";
import Typography from '@mui/material/Typography';

const font_size = 'h4';

const Information = ({ title, data }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Typography variant={font_size} sx={{ fontWeight: 'bold' }}>{title} :</Typography>
            <Typography variant={font_size}
                sx={{
                    m: 2,
                }}>
                {data}
            </Typography>
        </Box>
    )
}

export default Information;