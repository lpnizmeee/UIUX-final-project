import React from "react";
import { Grid, Box, Container, Avatar } from "@mui/material";
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Information from "./personal-components/Information";

import tht from "../../assets/images/users/tht.jpg";

const avatar_radius = '80px'

const Personal = () => {
    return (
        <Box maxWidth="sm">
            <Typography variant="h1" >Personal Information</Typography>
            <Container maxWidth='sm'
                sx={{
                    m: 4,
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 4,
                    }}
                >
                    <Avatar
                        src={tht}
                        alt={tht}
                        sx={{
                            width: avatar_radius,
                            height: avatar_radius,
                        }}
                    />
                    <Box
                        sx={{
                            ml: 6,
                        }}
                    >
                        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>Ta Hai Tung</Typography>
                    </Box>
                </Box>
                <Information title="Email" data="tungth@soict.hust.edu.vn" />
                <Information title="Phone" data="0987654321" />
                <Information title="Place of work" data="HUST" />
                <Information title="Position" data="Principal of SoICT" />
            </Container>
        </Box>
    );
}

export default Personal;