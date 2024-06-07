import React from "react";

import {
    Card,
    CardContent,
    Divider,
    Box,
    Typography,
    Chip,
} from "@mui/material";

const KPICard = (props) => {
    const getChipColor = (chiptitle) => {
        switch (chiptitle >= 80 ? "high" : chiptitle >= 50 ? "medium" : "low") {
            case 'high':
                return 'success.main';
            case 'medium':
                return 'warning.main';
            case 'low':
                return 'error.main';
            default:
                return '';
        }
    };

    return (
        <Card
            variant="outlined"
            sx={{
                p: 0,
                width: "100%",
            }}
        >
            <Box p={2} display="flex" alignItems="center" backgroundColor="#f4f4f8">
                <Box>
                    <Typography variant="h5">{props.title}</Typography>
                </Box>
                {props.chiptitle ? (
                    <Chip
                        label={props.chiptitle + '%'}
                        size="small"
                        sx={{
                            ml: "auto",
                            fontSize: "12px",
                            fontWeight: "500",
                            color: 'white',
                            backgroundColor: getChipColor(props.chiptitle),
                        }}
                    ></Chip>
                ) : (
                    ""
                )}
            </Box>
            <Divider />
            <CardContent>{props.children}</CardContent>
        </Card>
    );
};

export default KPICard;